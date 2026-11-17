import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
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

/* Cormorant Garamond for the script/accent text — refined and light,
   replacing the reference's Pinyon Script with something that reads
   "luxury retreat" rather than "wedding calligraphy". */
const script = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-script",
  display: "swap",
});

/* Inter for UI and body text — clean, highly legible, variable width,
   replacing the reference's Archivo. */
const ui = Inter({
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
    <html lang="en" className={`${display.variable} ${script.variable} ${ui.variable}`}>
      <body>
        <SmoothScroll />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
