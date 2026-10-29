import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import type { PropsWithChildren } from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { cn } from "@/utils/style";

import "@/styles/globals.css";

interface Props {
  params: Promise<{
    locale?: string;
  }>;
}

export const metadata = {
  metadataBase: new URL("https://seoulmoment.com.tw"),
  title: "Seoul Moment｜韓國時尚生活選品平台",
  description:
    "Seoul Moment 是一個連結首爾與台灣的跨境選品平台，精選韓國時尚、美妝與設計品牌，為你的日常注入靈感與風格。",
  alternates: {
    canonical: "https://seoulmoment.com.tw",
  },
  openGraph: {
    title: "Seoul Moment | Your Style, Your Moment",
    description:
      "Discover the essence of Seoul lifestyle and trend-forward products, delivered straight to Taiwan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seoul Moment OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<Props>) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations("common");

  return (
    <html lang={locale ?? "ko"}>
      <head>
        <meta
          content="tkdfXJ6-ynp9D_0x2zpVyESgoJIA3YtbN5LxrpjEGxQ"
          name="google-site-verification"
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-Y6VPB373S3"
              strategy="afterInteractive"
            />
            <Script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y6VPB373S3');  
            `,
              }}
              id="gtag-init"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <a
            className={cn(
              "focus:z-modal sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4",
              "rounded-[4px] bg-black px-[20px] py-[16px] font-semibold text-white",
            )}
            href="#main"
          >
            {t("skipToContent")}
          </a>
          <Header />
          <main className="relative min-h-[calc(100dvh-70px)]" id="main">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
