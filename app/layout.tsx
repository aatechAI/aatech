import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

const SITE_URL = "https://aatech.pk";
const GA_ID = "G-QFZX6LZJ6Z"; // Google Analytics 4 measurement ID
const GTM_ID = "GTM-WJPMSK56"; // Google Tag Manager container ID

const TITLE = "AATech — Global AI & Software Development Company";
const DESCRIPTION =
  "AATech is a global software house with 10+ years building AI-powered software, e-commerce (Shopify, Magento, WooCommerce), business automation, reporting and big-data solutions for clients worldwide.";
const OG_DESCRIPTION =
  "AI-powered development, end-to-end e-commerce, business automation, systems integration, reporting & big-data analytics. A global software partner with 10+ years of expertise — delivering worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | AATech",
  },
  description: DESCRIPTION,
  applicationName: "AATech",
  category: "Technology",
  keywords: [
    "AATech",
    "AI software development",
    "AI development company",
    "custom software development",
    "e-commerce development",
    "Shopify development",
    "Magento development",
    "WooCommerce development",
    "BigCommerce development",
    "business process automation",
    "systems integration",
    "web development",
    "mobile app development",
    "big data analytics",
    "business intelligence",
    "data reporting dashboards",
    "cloud & DevOps",
    "software house",
    "digital transformation",
  ],
  authors: [{ name: "AATech", url: SITE_URL }],
  creator: "AATech",
  publisher: "AATech",
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "AATech",
    locale: "en_US",
    alternateLocale: ["ar_AR", "de_DE", "el_GR", "fr_FR", "es_ES"],
    images: [
      {
        url: "/logo.png",
        width: 650,
        height: 208,
        alt: "AATech — Global AI & Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager (noscript) — must be first in body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          />
        </noscript>

        <LanguageProvider>{children}</LanguageProvider>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
