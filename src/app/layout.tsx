import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add luxurious serif font
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Add elegant cursive font
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Add Cormorant Garamond for body text
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "African Safari Adventures",
  description: "Immerse yourself in authentic African safaris and cultural experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}