import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mideast-strategia.com"),
  title: "MidEast Strategia | Middle East Geopolitical Analysis",
  description: "Expert analysis on China-Gulf relations and Middle East geopolitics by Dr. Naser Al-Tamimi. Research papers, strategic insights, and in-depth coverage of MENA region.",
  keywords: "Middle East, China Gulf relations, geopolitics, Saudi Arabia, Qatar, energy politics, MENA, strategic analysis",
  authors: [{ name: "Dr. Naser Al-Tamimi" }],
  creator: "MidEast Strategia",
  publisher: "MidEast Strategia",
  openGraph: {
    title: "MidEast Strategia | Middle East Geopolitical Analysis",
    description: "Expert analysis on China-Gulf relations and Middle East geopolitics",
    url: "https://mideast-strategia.com",
    siteName: "MidEast Strategia",
    images: [
      {
        url: "/china-gulf-map.jpeg",
        width: 1200,
        height: 630,
        alt: "MidEast Strategia - China Gulf Relations Analysis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MidEast Strategia | Middle East Geopolitical Analysis",
    description: "Expert analysis on China-Gulf relations and Middle East geopolitics",
    images: ["/china-gulf-map.jpeg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
