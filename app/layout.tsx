import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

import Sidebar from "./components/Sidebar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xforbes.com"),
  title: {
    default: "xforbes.com — Developer Tools & Open-Source Projects",
    template: "%s | xforbes.com",
  },
  description:
    "Discover lightweight, open-source developer tools built by Ullas Kunder. From SwidoMark, a minimal Markdown editor, to upcoming mobile apps — crafted to simplify workflows and ship ideas faster.",
  keywords: [
    "developer tools",
    "open source projects",
    "SwidoMark",
    "Markdown editor",
    "Turai Blog",
    "Pin-Tube",
    "Chrome Extension",
    "xforbes.com",
    "Ullas Kunder",
    "SvelteKit",
    "Tauri",
    "React Native",
    "TypeScript",
    "fullstack developer",
    "developer portfolio",
  ],
  authors: [{ name: "Ullas Kunder", url: "http://ullaskunder.com/" }],
  creator: "Ullas Kunder",
  publisher: "xforbes.com",
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
  alternates: {
    canonical: "https://www.xforbes.com",
  },
  openGraph: {
    title: "xforbes.com — Developer Tools & Open-Source Projects",
    description:
      "Lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster. By Ullas Kunder.",
    url: "https://www.xforbes.com",
    siteName: "xforbes.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "xforbes.com — Developer Tools & Open-Source Projects",
    description:
      "Lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster.",
    creator: "@ullaskunder",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} antialiased bg-white text-black font-serif`}
      >
        <Sidebar />
        <div className="md:pl-16 transition-[padding] duration-300 min-h-screen flex flex-col">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
