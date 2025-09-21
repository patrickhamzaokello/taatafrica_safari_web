import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {GA_TRACKING_ID} from "@/lib/gtag";

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
  title: "Tata Africa Safaris | Mid & Luxury East Africa Safari Tours & Tailored Experiences",
  description: "Custom mid and luxury safari tours in East Africa. Explore Uganda, Kenya, Tanzania & Rwanda with gorilla trekking, wildlife safaris, and cultural experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}