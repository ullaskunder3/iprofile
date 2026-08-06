import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ZoomableImage from "../components/ZoomableImage";

export const metadata = {
  title: "Pin-Tube — The Smart YouTube Pinner",
  description:
    "A native-feeling Chrome extension to pin your YouTube videos and eradicate doom-scrolling distractions.",
};

export default function PinTubeLanding() {
  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* --- HERO SECTION --- */}
        <section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 pb-16 border-b-2 border-black">
          <div className="border-2 border-black px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white text-black">
            Available on Chrome Web Store
          </div>

          <Image
            src="/img/pin-tube/icon128.png"
            alt="Pin-Tube Logo"
            width={96}
            height={96}
            className="border-2 border-black"
          />

          <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight uppercase tracking-tighter">
            Pin-Tube.
            <br />
            <span className="italic">Never lose a video again.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A smart, native-feeling Chrome Extension that puts a simple pin icon directly inside the YouTube video player. 
            Keep your videos handy without cluttering bookmarks, and permanently hide Shorts shelves and tag recommendation chips to stop doom-scrolling.
          </p>

          <div className="mt-8">
            <a
              href="https://chromewebstore.google.com/detail/pin-tube/oehonkhbilmcmmpcnbpocpoomldofejd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
            >
              Get it on Chrome Web Store
            </a>
          </div>
        </section>

        {/* --- WIDE HERO BANNER --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b-2 border-black">
          <div className="border-2 border-black w-full overflow-hidden bg-gray-100 relative">
            <ZoomableImage
              src="/img/pin-tube/first.png"
              alt="Pin-Tube Extension Interface"
            />
          </div>
        </section>

        {/* --- THE PROBLEM & PLAN --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-b-2 border-black">
          <div className="flex flex-col gap-6">
             <h3 className="text-3xl font-serif font-bold uppercase border-b-2 border-black pb-4">The Frustration</h3>
             <p className="text-lg leading-relaxed">
                <strong>Lost Videos:</strong> You would watch a video, close your laptop, and then struggle to find it again later. Using regular browser bookmarks was clunky, required too many clicks, and clogged up your bookmarks bar.<br/><br/>
                <strong>Doom-scrolling:</strong> The YouTube homepage is filled with distracting &quot;Shorts&quot; shelves that suck you into doom-scrolling, and tag recommendation chips that you never use.
             </p>
          </div>
          
          <div className="flex flex-col gap-6">
             <h3 className="text-3xl font-serif font-bold uppercase border-b-2 border-black pb-4">The Plan</h3>
             <ul className="text-lg leading-relaxed list-disc list-outside pl-6 space-y-4 font-medium">
                <li>Put a simple <strong>Pin icon</strong> directly inside the YouTube video player.</li>
                <li>Inject a <strong>small, natural-looking row</strong> of those pinned videos at the absolute top of the YouTube homepage.</li>
                <li>Add a feature to permanently hide Shorts and tags.</li>
                <li>Make the code &quot;Senior Engineer&quot; level: fast, clean, and minified to prevent easy copying.</li>
             </ul>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 1 --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b-2 border-black">
          <div className="border-2 border-black overflow-hidden bg-gray-100">
            <ZoomableImage
              src="/img/pin-tube/second.png"
              alt="Seamless UI Integration"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase leading-tight mb-4">
                Seamless UI
                <br />
                Integration
              </h2>
              <p className="text-lg leading-relaxed">
                We wrote a smart script that patiently waits for YouTube&apos;s video player to load, and injects a custom pushpin SVG button right next to the native settings gear. It looks exactly like it belongs there.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase leading-tight mb-4 pt-8 border-t-2 border-black">
                Dynamic Grid Parity
              </h2>
              <p className="text-lg leading-relaxed">
                To make the &quot;Pinned Videos&quot; row on the homepage look native, we hooked into YouTube&apos;s internal CSS variables and used ResizeObserver. Our pinned videos perfectly adapt and resize their columns exactly when YouTube&apos;s grid resizes, seamlessly tying into native dark/light modes.
              </p>
            </div>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 2 --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b-2 border-black">
          <div className="flex flex-col gap-8 lg:order-1 order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase leading-tight mb-4">
                The &quot;Smart Resume&quot;
                <br />
                Engine
              </h2>
              <p className="text-lg leading-relaxed">
                Instead of just linking back to the video, we wanted you to resume exactly where you left off. We added silent listeners to the pause and visibilitychange events. The second you pause or switch tabs, we save your exact timestamp and append it to the video URL.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase leading-tight mb-4 pt-8 border-t-2 border-black">
                Distraction Blocking
              </h2>
              <p className="text-lg leading-relaxed">
                We built a popup menu with toggle switches. When active, our CSS completely eradicates the doom-scroll triggers by hiding the Shorts sidebar links, the Shorts grid shelves, and the tag chips. 
              </p>
            </div>
          </div>

          <div className="border-2 border-black overflow-hidden bg-gray-100 lg:order-2 order-1">
            <ZoomableImage
              src="/img/pin-tube/third.png"
              alt="Distraction Blocking and Popup Menu"
            />
          </div>
        </section>

        {/* --- EXTRA FEATURES --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-b-2 border-black">
          <div className="flex flex-col gap-6">
             <div className="border-2 border-black overflow-hidden bg-gray-100">
                <ZoomableImage
                  src="/img/pin-tube/forth.png"
                  alt="Management Dashboard"
                />
              </div>
             <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-black pb-4">Smart Tab Management</h3>
             <p className="text-lg leading-relaxed">
                To prevent opening duplicate &quot;Manage Videos&quot; tabs, we gave the extension tabs permission. A background service worker intelligently searches open tabs—if the dashboard is already open, it just snaps your screen over to it instead of spawning a new one.
             </p>
          </div>
          
          <div className="flex flex-col gap-6">
             <div className="border-2 border-black overflow-hidden bg-gray-100">
                <ZoomableImage
                  src="/img/pin-tube/fifth.png"
                  alt="Onboarding and Dashboard"
                />
              </div>
             <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-black pb-4">Onboarding &amp; Obfuscation</h3>
             <p className="text-lg leading-relaxed">
                We built an automatic onboarding screen that teaches users how to pin. We squashed the code using <strong>Vite &amp; Terser</strong> into a single highly-minified build, protecting the logic while remaining compliant with Chrome Web Store policies.
             </p>
          </div>
        </section>

        {/* --- LEGAL FINE PRINT --- */}
        <div className="max-w-7xl mx-auto px-6 pt-16 flex justify-center">
          <Link
            href="/pin-tube/privacy"
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-black transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
