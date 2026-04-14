import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloomsday | Turn Expertise into Income & Productize Expertise",
  description: "The modern professional's guide to scale. Learn how to productize expertise, build a digital product for consultants, and leverage the no-code product builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorantGaramond.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
