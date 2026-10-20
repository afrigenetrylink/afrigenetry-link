
import type { Metadata, Viewport } from "next";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";
import RouteScrollManager from "@/components/RouteScrollManager";
import EventPopup from "@/components/EventPopup";

const siteUrl = "https://www.afrigenetrylink.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AfriGenetry Link | Connecting Heritage, Health & Healing",
    template: "%s | AfriGenetry Link",
  },

  description:
    "AfriGenetry Link connects Africans and people of African descent with ancestry education, family health history awareness, community, and opportunities in genomics.",

  applicationName: "AfriGenetry Link",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AfriGenetry Link",
    title: "AfriGenetry Link | Connecting Heritage, Health & Healing",
    description:
      "Explore ancestry, understand family health history, reconnect with heritage, and discover opportunities through AfriGenetry Link.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AfriGenetry Link",
    description:
      "Connecting Heritage, Health, and Healing Through DNA.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#38251f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <RouteScrollManager />

        {children}

        <EventPopup />

        <ScrollToTop />
      </body>
    </html>
  );
}
