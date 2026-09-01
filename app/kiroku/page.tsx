import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KirokuClient from "./KirokuClient";

export const metadata = {
  title: "Kiroku — Minimalist Living Library & Distraction-Free Workspace",
  description:
    "Where speed meets serenity for your writing, organization, and ideas. A high-speed living library and distraction-free rich text editor.",
};

export default function KirokuLanding() {
  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      <Header />
      <KirokuClient />
      <Footer />
    </div>
  );
}
