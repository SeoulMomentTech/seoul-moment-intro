import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { PropsWithChildren } from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

import "@/styles/globals.css";

interface Props {
  params: Promise<{
    locale?: string;
  }>;
}

export const metadata = {
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
        url: "https://seoul-moment.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seoul Moment OG Image",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<Props>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html className="scroll-smooth" lang={locale ?? "ko"}>
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
          <Header />
          <main className="relative min-h-[calc(100vh-70px)]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
