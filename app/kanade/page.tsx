import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ZoomableImage from "../components/ZoomableImage";

export const metadata = {
  title: "Kanade — Zero-Frustration AI Composer & Synthesizer",
  description:
    "A highly-specialized synthesizer and AI duet composer where there are no wrong notes.",
};

export default function KanadeLanding() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Header />

      <main id="main-content" className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col items-center text-center gap-8 mb-24 border-b border-black pb-24">
          <div className="text-xs font-bold uppercase tracking-widest border border-black px-4 py-2">
            Free Demo — No Registration Required
          </div>

          <div className="w-24 h-24 flex items-center justify-center border border-black mb-4">
            <span className="text-4xl">🎹</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight">
            Kanade.
            <br />
            Music with no wrong notes.
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A highly specialized web synthesizer and AI duet composer. 
            By mapping keys dynamically to curated cultural scales like Hirajōshi, Kanade guarantees perfect harmony with every keystroke while generating structured melodic responses.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="http://kanade.xforbes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Try Live Demo
            </a>
            <span className="text-sm font-medium uppercase tracking-wider">
              Free to play. No signups or logins required. 🎹
            </span>
          </div>
        </section>

        {/* --- WIDE HERO BANNER --- */}
        <section className="mb-24 border border-black p-1">
          <ZoomableImage
            src="/img/kanade/desktop_view.png"
            alt="Kanade Desktop Synthesizer Interface"
          />
        </section>

        {/* --- THE PROBLEM & PLAN --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 border-b border-black pb-24">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-serif font-bold uppercase tracking-widest border-b border-black pb-2">The Frustration</h3>
            <p className="text-lg leading-relaxed">
              <strong>Choice Paralysis & Discord:</strong> Confusing 88-key layouts make it hard for beginners to improvise, often resulting in dissonant, painful chords.<br/><br/>
              <strong>Wandering AI Music:</strong> Standard neural music generators often produce unstructured, wandering melodies without coherent motifs.<br/><br/>
              <strong>Heavy Downloads & Servers:</strong> Most web synths rely on downloading massive sound libraries (gigabytes of samples) or slow cloud processing.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-serif font-bold uppercase tracking-widest border-b border-black pb-2">The Plan</h3>
            <ul className="text-lg leading-relaxed list-disc pl-6 space-y-4">
              <li>Lock the keyboard dynamically to beautiful scales (Major Pentatonic, Hirajōshi, Diatonic) so <strong>every mash sounds amazing</strong>.</li>
              <li>Design a <strong>First-Order Markov Chain</strong> composer trained on folk melodies to structure 4-bar response loops.</li>
              <li>Synthesize sound waves using <strong>native Web Audio API</strong> node graphs, pitch-shifting it to 432 Hz.</li>
              <li>Export WAV files directly via the browser, and bit-pack notes into <strong>Base64 URL parameters</strong> for database-free sharing.</li>
            </ul>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 1 --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-b border-black pb-24">
          <div className="border border-black p-1 order-2 md:order-1">
            <ZoomableImage
              src="/img/kanade/tablet_view.png"
              alt="Zero-Frustration Scale Mapping and Synthesizer Settings"
            />
          </div>

          <div className="flex flex-col gap-8 order-1 md:order-2">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Zero-Frustration
                <br />
                Scale Mapping
              </h2>
              <p className="text-lg leading-relaxed">
                Kanade dynamically binds your physical keyboard keys to curated, chord-safe musical scales. Switch from standard Diatonic to the bright Major Pentatonic or the traditional Japanese Hirajōshi scale. With wrong notes mathematically excluded, you can focus on rhythm and flow.
              </p>
            </div>
            
            <hr className="border-black" />

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
                Bilingual Markov Composer
              </h2>
              <p className="text-lg leading-relaxed">
                We trained a structured Markov Chain algorithm on real-world folk motifs. When you swap scales, the AI composer swaps its musical corpus—matching Western themes on Major keys, and swapping to traditional Koto folk patterns when using Japanese scales.
              </p>
            </div>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 2 --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-b border-black pb-24">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Real-Time AI Duet
                <br />
                Jam Accompaniment
              </h2>
              <p className="text-lg leading-relaxed">
                Enable AI Duet mode and play standard melodies. When you stop, the AI composer intercepts the last note, analyzes your tempo, and instantly generates a structured 4-bar phrase response in real-time, functioning as an active collaborative partner.
              </p>
            </div>

            <hr className="border-black" />

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
                Web Audio Synthesis & Warm Tuning
              </h2>
              <p className="text-lg leading-relaxed">
                No large sample libraries to download. Kanade constructs its audio graph (oscillators, biquad filters, dynamic gains) directly using the browser's Web Audio API. Instrument profiles simulate the resonant tones of a Marimba, Chimes, and a plucked Japanese Shamisen—all mathematically tuned to the warm 432 Hz healing frequency.
              </p>
            </div>
          </div>

          <div className="border border-black p-1">
            <ZoomableImage
              src="/img/kanade/mobile_view.png"
              alt="Kanade Mobile View showing AI composer options and custom synthesizer controls"
            />
          </div>
        </section>

        {/* --- EXTRA FEATURES --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 pb-12 border-b border-black">
          <div className="flex flex-col gap-4 border border-black p-8">
             <h3 className="text-2xl font-serif font-bold uppercase tracking-widest border-b border-black pb-4">Zero-Server WAV Exporter</h3>
             <p className="text-lg leading-relaxed pt-2">
                Bake and render your compositions in milliseconds. By routing synthesized node data through an `OfflineAudioContext`, Kanade processes, writes PCM headers, and downloads a studio-quality `.WAV` file entirely within the client's browser, bypassing backend processing limits.
             </p>
          </div>
          
          <div className="flex flex-col gap-4 border border-black p-8">
             <h3 className="text-2xl font-serif font-bold uppercase tracking-widest border-b border-black pb-4">Ultra-Compact URL Sharing</h3>
             <p className="text-lg leading-relaxed pt-2">
                Share your compositions without a database or server storage. Kanade packages notes, timestamps, scales, and velocities using custom binary bit-packing, serialized into a compact Base64 parameter appended to the URL. If someone clicks your link, their browser decodes and plays it instantly.
             </p>
          </div>
        </section>

        {/* --- LEGAL FINE PRINT --- */}
        <div className="flex justify-center pt-8">
          <Link
            href="/pin-tube/privacy"
            className="text-sm font-bold uppercase tracking-widest hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
