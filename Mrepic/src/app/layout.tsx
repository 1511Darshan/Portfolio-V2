import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Chatbot from '@/components/chatbot/Chatbot';
import Navigation from '@/components/Navigation';
import Script from "next/script";
import type { ReactNode } from "react";
import React from "react";
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ireddragonicy.vercel.app";
const SITE_NAME = "Darshan K";
const SITE_TITLE = "Darshan K | AI & Data Science Portfolio";
const SITE_DESCRIPTION = "The professional portfolio of Darshan K, a B.Tech student in AI and Data Science.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: "%s | Darshan K",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  verification: {
    google: "SeU7j1p_RghwijQK39HcGyU9L5su7-xhodHrPXhE2Xs",
  },
  keywords: [
    "Darshan K",
    "AI and Data Science",
    "B.Tech",
    "Chennai Institute of Technology",
    "Portfolio",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
  ],
  authors: [{ name: "Darshan K", url: siteUrl }],
  creator: "Darshan K",
  publisher: SITE_NAME,
  // Do not set a global canonical here to avoid overriding per-page canonicals
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "IRedDragonICY hero image",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  category: "Technology",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": siteUrl,
        "description": SITE_DESCRIPTION,
        "inLanguage": "en",
      },
      {
        "@type": "Person",
        "name": "Darshan K",
        "url": siteUrl,
        "jobTitle": "AI & Data Science Student",
        "affiliation": {
          "@type": "Organization",
          "name": "Chennai Institute of Technology"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var theme = savedTheme || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <Script
          id="ld-json-site"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}