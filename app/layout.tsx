import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iprofile.dev — Developer Tools & Projects",
  description:
    "A curated collection of lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster. By Ullas Kunder.",
  keywords: [
    "developer tools",
    "open source",
    "SwidoMark",
    "Turai Blog",
    "iprofile",
    "Ullas Kunder",
  ],
  authors: [{ name: "Ullas Kunder", url: "https://github.com/ullaskunder3" }],
  openGraph: {
    title: "iprofile.dev — Developer Tools & Projects",
    description:
      "Lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster.",
    url: "https://iprofile.dev",
    siteName: "iprofile.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iprofile.dev — Developer Tools & Projects",
    description:
      "Lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
