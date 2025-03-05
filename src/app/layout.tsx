import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MidEast Strategia | Middle East Geopolitical Analysis",
  description: "Expert analysis on China-Gulf relations and Middle East geopolitics",
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
        {children}
      </body>
    </html>
  );
}
