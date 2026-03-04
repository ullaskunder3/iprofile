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
  metadataBase: new URL("https://iprofile.dev"),
  title: {
    default: "iprofile.dev — Developer Tools & Open-Source Projects",
    template: "%s | iprofile.dev",
  },
  description:
    "Discover lightweight, open-source developer tools built by Ullas Kunder. From SwidoMark, a minimal Markdown editor, to upcoming mobile apps — crafted to simplify workflows and ship ideas faster.",
  keywords: [
    "developer tools",
    "open source projects",
    "SwidoMark",
    "Markdown editor",
    "Turai Blog",
    "iprofile.dev",
    "Ullas Kunder",
    "SvelteKit",
    "Tauri",
    "React Native",
    "TypeScript",
    "fullstack developer",
    "developer portfolio",
  ],
  authors: [{ name: "Ullas Kunder", url: "https://ullaskunder.tech" }],
  creator: "Ullas Kunder",
  publisher: "iprofile.dev",
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
    canonical: "https://iprofile.dev",
  },
  openGraph: {
    title: "iprofile.dev — Developer Tools & Open-Source Projects",
    description:
      "Lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster. By Ullas Kunder.",
    url: "https://iprofile.dev",
    siteName: "iprofile.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iprofile.dev — Developer Tools & Open-Source Projects",
    description:
      "Lightweight, focused tools for developers — crafted to simplify workflows and ship ideas faster.",
    creator: "@ullaskunder",
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
