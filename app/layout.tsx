import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://aatech.pk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AATech — IT & Software Development Company in Pakistan",
  description:
    "AATech builds custom software, web & mobile apps, cloud solutions and IT consulting that help businesses grow. Based in Pakistan, delivering worldwide.",
  keywords: [
    "AATech",
    "software development Pakistan",
    "web development",
    "mobile app development",
    "IT consulting",
    "cloud solutions",
    "custom software",
  ],
  authors: [{ name: "AATech" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "AATech — IT & Software Development Company",
    description:
      "Custom software, web & mobile apps, cloud and IT consulting. Engineered to help your business grow.",
    siteName: "AATech",
  },
  twitter: {
    card: "summary_large_image",
    title: "AATech — IT & Software Development Company",
    description:
      "Custom software, web & mobile apps, cloud and IT consulting.",
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
      <body>{children}</body>
    </html>
  );
}
