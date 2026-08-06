import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayStoreStatus from "../components/PlayStoreStatus";
import ZoomableImage from "../components/ZoomableImage";

export const metadata = {
  title: "PhysDaily — The Physics Bowl",
  description:
    "A daily physics challenge to sharpen your curiosity in the age of AI.",
};

export default function PhysDailyLanding() {
  return (
    <div className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <Header />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* --- HERO SECTION --- */}
        <section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          <div className="border border-black px-4 py-1 text-sm font-medium tracking-wide uppercase">
            <span>🚀</span> Now Available on Google Play
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tighter text-black m-0">
            Sharpen Your Mind.
            <br />
            One Daily Challenge.
          </h1>

          <p className="text-lg md:text-xl text-black/80 max-w-prose mx-auto leading-relaxed">
            Introducing the <strong>Physics Bowl</strong> format. Keep your
            curiosity alive and your analytical skills sharp in the age of AI
            with a focused, daily physics problem.
          </p>

          <PlayStoreStatus />

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.iprofilelabs.physdaily"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-black hover:bg-black/5 transition-colors h-[58px] items-center justify-center px-2"
            >
              <Image
                src="/img/google-play-badge.png"
                alt="Get it on Google Play"
                width={150}
                height={45}
                className="object-contain"
              />
            </a>
            <a
              href="http://ullaskunder.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-black text-white hover:bg-white hover:text-black transition-colors px-6 h-[58px] flex items-center justify-center font-medium"
            >
              Contact Us
            </a>

            <a 
              href="http://ullaskunder.com/blogs/shipping-physdaily-a-solo-engineer-s-blueprint-for-ai-powered-mobile-apps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-black border-b border-black hover:border-black/0 transition-all flex items-center gap-1.5 h-[58px] group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Read the Building Story
            </a>
          </div>
        </section>

        {/* --- WIDE HERO BANNER --- */}
        <section className="max-w-7xl mx-auto my-24 px-6">
          <div className="relative w-full border border-black p-2">
            <div className="border border-black relative">
              <ZoomableImage
                src="/img/phys-daily/mockup3.png"
                alt="PhysDaily App flow showing dashboard, question, and completion screens"
              />
            </div>
          </div>
        </section>

        <hr className="border-black max-w-7xl mx-auto my-16" />

        {/* --- FEATURE GRID --- */}
        <section className="max-w-6xl mx-auto my-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black m-0 tracking-tight leading-tight">
              The Science of
              <br />
              Satisfaction
            </h2>
            <p className="text-lg text-black/80 m-0 leading-relaxed max-w-lg">
              PhysDaily isn&apos;t just another quiz. It&apos;s a carefully
              designed tactile experience. From the satisfying feedback of the
              virtual keyboard to the glowing &quot;Correct!&quot; screens,
              every interaction rewards your analytical thinking.
            </p>
          </div>

          <div className="w-full border border-black p-2">
            <div className="border border-black relative">
               <ZoomableImage
                 src="/img/phys-daily/mockup2.png"
                 alt="Close-up of the tactile virtual QWERTY keyboard and game interface"
               />
            </div>
          </div>
        </section>

        <hr className="border-black max-w-7xl mx-auto my-16" />

        {/* --- MISSION --- */}
        <section
          id="story"
          className="max-w-6xl mx-auto my-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <div className="w-full border border-black p-2 md:order-none order-last">
            <div className="border border-black relative">
               <ZoomableImage
                 src="/img/phys-daily/mockup1.png"
                 alt="Developer space with mechanical pencils and free-body diagrams"
               />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-sm font-bold uppercase tracking-widest text-black border-b border-black pb-1 self-start">
              The Why
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black m-0 tracking-tight leading-tight">
              Curiosity in the
              <br />
              Age of AI
            </h2>
            <p className="text-lg text-black/80 m-0 leading-relaxed max-w-lg">
              Generative AI gives us answers instantly. But instant answers
              remove the joy of the struggle. We built{" "}
              <strong>PhysDaily</strong> to preserve the art of thinking.
              It&apos;s a &quot;physics bowl&quot; in your pocket — an everyday
              invitation to stop scrolling, start deducing, and feel the thrill
              of solving a puzzle on your own.
            </p>
            <div className="mt-4">
              <a 
                href="http://ullaskunder.com/blogs/shipping-physdaily-a-solo-engineer-s-blueprint-for-ai-powered-mobile-apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-bold text-black hover:opacity-70 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Read the full story of how we built this
              </a>
            </div>
          </div>
        </section>

        <hr className="border-black max-w-7xl mx-auto my-16" />

        {/* --- EARLY ACCESS CTA --- */}
        <section
          id="download"
          className="max-w-3xl mx-auto my-24 px-6 text-center flex flex-col items-center gap-8 border border-black py-16"
        >
          <div className="border border-black p-2">
            <Image
              src="/img/phys-daily/logo.png"
              alt="PhysDaily Logo"
              width={72}
              height={72}
              className="border border-black"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold m-0 mb-4 text-black tracking-tight">
              Now Available!
            </h2>

            <p className="text-lg text-black/80 max-w-prose mx-auto leading-relaxed">
              PhysDaily has officially launched. Download it today and start your journey of solving daily physics challenges.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.iprofilelabs.physdaily"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-black hover:bg-black/5 transition-colors h-[68px] items-center justify-center px-4"
            >
              <Image
                src="/img/google-play-badge.png"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="object-contain"
              />
            </a>
            <a
              href="http://ullaskunder.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-black text-white hover:bg-white hover:text-black transition-colors px-8 h-[68px] flex items-center justify-center font-medium text-lg"
            >
              Contact Directly
            </a>
          </div>

          <div className="mt-8 px-6 border-t border-black pt-8">
            <p className="text-sm text-black/60 italic font-medium max-w-md mx-auto">
              We promise not to spam you. We don&apos;t have the energy for
              that. It&apos;s a one-time thing, not a sales pitch. 🫡
            </p>
          </div>
        </section>

        {/* --- LEGAL FINE PRINT --- */}
        <div className="mb-8 flex justify-center items-center gap-6 text-sm font-medium text-black/60">
          <Link
            href="/phys-daily/privacy"
            className="hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>
          <div className="w-1 h-1 bg-black rounded-full" />
          <Link
            href="/phys-daily/terms"
            className="hover:text-black transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
