import type { Metadata, Viewport } from "next";
import { Playfair_Display, Archivo } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { COMPANY, SEO } from "@/lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

/* Elegant serif for display — the hospitality counterpart to the reference's
   Imbue. Playfair Display has the high contrast and refined stroke that suits
   a luxury resort. */
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* Archivo for UI and body text, the same face as the reference site. */
const ui = Archivo({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: { type: "website", siteName: COMPANY.name, title: SEO.title, description: SEO.description },
  twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1222",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <body>
        <SmoothScroll />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
