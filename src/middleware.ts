// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

type Locale = (typeof routing.locales)[number];
const isLocale = (v: string | undefined): v is Locale =>
  !!v && (routing.locales as readonly string[]).includes(v);

function parseNetlifyGeo(header: string | null) {
  if (!header) return undefined as { country?: { code?: string } } | undefined;

  // 1) JSON 그대로 시도
  if (header.trim().startsWith("{")) {
    try {
      return JSON.parse(header);
    } catch {}
  }
  // 2) base64 → JSON 시도
  try {
    const decoded =
      typeof atob === "function"
        ? atob(header)
        : Buffer.from(header, "base64").toString("utf8");
    return JSON.parse(decoded);
  } catch {}
  return undefined;
}

function detectLocale({
  countryCode,
  acceptLanguage,
  cookieLocale,
  fallback,
}: {
  countryCode?: string;
  acceptLanguage?: string;
  cookieLocale?: string;
  fallback: Locale;
}): Locale {
  if (isLocale(cookieLocale)) return cookieLocale;

  // Geo 우선
  if (countryCode === "KR") return "ko";
  if (countryCode === "TW") return "zh-TW";

  // Accept-Language 폴백(필요 시 보다 정교하게 확장)
  const al = (acceptLanguage || "").toLowerCase();
  if (al.startsWith("ko")) return "ko";

  // zh 매핑: 의도적으로 전부 zh-TW로 보낼지 명확화
  if (
    al.startsWith("zh-tw") ||
    al.startsWith("zh-hk") ||
    al.startsWith("zh-mo") ||
    al.startsWith("zh")
  ) {
    return "zh-TW";
  }

  return fallback;
}

export default function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // 이미 /{locale}로 시작하면 next-intl만 통과
  if (
    (routing.locales as readonly string[]).some((l) =>
      pathname.startsWith(`/${l}`),
    )
  ) {
    return intl(req);
  }

  const nfGeo = parseNetlifyGeo(req.headers.get("x-nf-geo"));
  const country = nfGeo?.country?.code; // e.g. "KR"

  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const locale = detectLocale({
    countryCode: country,
    acceptLanguage: req.headers.get("accept-language") || undefined,
    cookieLocale,
    fallback: routing.defaultLocale as Locale,
  });

  // 이미 같은 로케일로 계산됐다면 redirect 불필요(안전 가드)
  const target = `/${locale}${pathname}${search}`;
  if (req.nextUrl.pathname === `/${locale}${pathname}`) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(target, req.url));
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
