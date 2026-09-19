# Architecture

Single-page marketing site (Next.js 15 App Router, React 19, TypeScript strict). No test
framework, no API routes — all data goes out to an external backend.

## Request path

1. `src/middleware.ts` — runs on every non-asset path (`matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"`).
   - Path already starts with a supported locale → delegate to `next-intl` middleware.
   - Otherwise → 302 to `/{locale}{path}` picked from the `Accept-Language` header
     (`ko` → ko, `zh*` → zh-TW, else `en`). `localeDetection` is **off** in the routing
     config, so this hand-rolled branch is the only locale detection there is; changing
     detection behavior means editing the middleware, not `routing.ts`.
2. `src/app/[locale]/layout.tsx` — the only layout. Loads messages via `getMessages()`,
   wraps everything in `NextIntlClientProvider`, renders `Header` / `main` / `Footer`,
   injects the GA script (production only) and the Search Console meta tag.
3. `src/app/[locale]/page.tsx` — the whole site: an ordered list of section components
   inside `SectionsWrapper`.

There is no route other than `/[locale]` (+ `not-found.tsx`). "Navigation" is scroll
position within the single page; `src/hooks/useActiveSection.ts` drives the active-section
indicator from an `IntersectionObserver`.

## Directory contract

| Path | Holds |
| --- | --- |
| `src/app/[locale]/components/` | Page-section components, used only by `page.tsx`. Folder per section with `index.tsx` + its own sub-parts. |
| `src/components/ui/` | Shared primitives (`button`, `dialog`, `dropdown-menu`, `section`, `header`, `footer`, `divider`). |
| `src/components/` | Shared non-UI components (`Trans.tsx`). |
| `src/services/` | `ky` client + endpoint wrappers. |
| `src/hooks/`, `src/utils/`, `src/types/` | Cross-cutting helpers; `@/*` maps to `./src/*`. |
| `src/i18n/` | Routing config, request config, `messages/{ko,en,zh-TW}.json`. |
| `src/styles/globals.css` | Tailwind v4 entry, theme tokens, global Swiper overrides. |

Adding a section = new folder under `src/app/[locale]/components/`, then insert it into the
`SectionsWrapper` children in `page.tsx`. Order in that JSX is the scroll order of the site.

## Rendering model

Server components by default; only components that need GSAP, Swiper, Lenis, browser APIs
or form state are marked `"use client"` (about 16 files). `Trans.tsx` uses
`useTranslations` but is imported from both worlds — keep it free of client-only hooks.

## External surfaces

- Backend: `https://api.seoulmoment.com.tw` (`src/services/index.ts`), 10s timeout.
- Images: remote pattern allow-list in `next.config.ts` is Cloudinary only — a new image
  host must be added there or `next/image` will throw.
- Analytics: GA id lives in `.env.local` as `NEXT_PUBLIC_GA_ID`, but the layout currently
  hardcodes `G-Y6VPB373S3` in the gtag snippet.
- `src/app/sitemap.ts` hardcodes `https://intro.seoulmoment.com.tw`, while the layout's
  canonical URL is `https://seoulmoment.com.tw` — keep both in mind when touching SEO.
