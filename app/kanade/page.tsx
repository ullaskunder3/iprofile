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
    <>
      <div className="noise-overlay" />
      <Header />

      <main
        className="animate-in"
        id="main-content"
        style={{ paddingTop: "var(--space-3xl)", overflow: "hidden" }}
      >
        {/* --- HERO SECTION --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "var(--space-xl) var(--space-md)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "var(--space-lg)",
          }}
        >
          <div className="badge" style={{ marginBottom: "var(--space-xs)", borderColor: "rgba(255, 255, 255, 0.15)", background: "rgba(255, 255, 255, 0.05)", color: "var(--text-primary)" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#ffffff",
                display: "inline-block",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                animation: "pulse 2s infinite"
              }}
            />
            <span style={{ fontWeight: 600 }}>Free Demo — No Registration Required</span>
          </div>

          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #111111 0%, #333333 100%)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              marginBottom: "var(--space-xs)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <span style={{ fontSize: "3rem" }}>🎹</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 7vw, 3.25rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Kanade.
            <br />
            <span className="gradient-text">Music with no wrong notes.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "var(--text-secondary)",
              maxWidth: "55ch",
              margin: "0 auto",
              lineHeight: 1.6,
              textWrap: "balance",
            }}
          >
            A highly specialized web synthesizer and AI duet composer. 
            By mapping keys dynamically to curated cultural scales like Hirajōshi, Kanade guarantees perfect harmony with every keystroke while generating structured melodic responses.
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-sm)",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "var(--space-md)",
            }}
          >
            <a
              href="http://kanade.xforbes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "0.875rem 1.75rem", fontSize: "1rem" }}
            >
              Try Live Demo
            </a>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: "var(--space-xs)", width: "100%", display: "block" }}>
              Free to play. No signups or logins required. 🎹
            </span>
          </div>
        </section>

        {/* --- WIDE HERO BANNER --- */}
        <section
          style={{
            maxWidth: "96rem",
            margin: "var(--space-2xl) auto",
            padding: "0 var(--space-md)",
          }}
        >
          <div
            className="glass"
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
          >
            <ZoomableImage
              src="/img/kanade/desktop_view.png"
              alt="Kanade Desktop Synthesizer Interface"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "20%",
                background:
                  "linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>
        </section>

        {/* --- THE PROBLEM & PLAN --- */}
        <section
          style={{
            maxWidth: "80rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          <div
            className="glass"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-xl)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
            }}
          >
             <h3 style={{ fontSize: "1.25rem", color: "var(--accent)", margin: 0 }}>The Frustration</h3>
             <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <strong>Choice Paralysis & Discord:</strong> Confusing 88-key layouts make it hard for beginners to improvise, often resulting in dissonant, painful chords.<br/><br/>
                <strong>Wandering AI Music:</strong> Standard neural music generators often produce unstructured, wandering melodies without coherent motifs.<br/><br/>
                <strong>Heavy Downloads & Servers:</strong> Most web synths rely on downloading massive sound libraries (gigabytes of samples) or slow cloud processing.
             </p>
          </div>
          
          <div
            className="glass"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-xl)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
            }}
          >
             <h3 style={{ fontSize: "1.25rem", color: "var(--accent)", margin: 0 }}>The Plan</h3>
             <ul style={{ color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, paddingLeft: "1.5rem" }}>
                <li>Lock the keyboard dynamically to beautiful scales (Major Pentatonic, Hirajōshi, Diatonic) so **every mash sounds amazing**.</li>
                <li>Design a **First-Order Markov Chain** composer trained on folk melodies to structure 4-bar response loops.</li>
                <li>Synthesize sound waves using **native Web Audio API** node graphs, pitch-shifting it to 432 Hz.</li>
                <li>Export WAV files directly via the browser, and bit-pack notes into **Base64 URL parameters** for database-free sharing.</li>
             </ul>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 1 --- */}
        <section
          style={{
            maxWidth: "80rem",
            margin: "var(--space-4xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: "var(--space-2xl)",
            alignItems: "center",
          }}
        >
          <div
            className="glass"
            style={{
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
          >
            <ZoomableImage
              src="/img/kanade/tablet_view.png"
              alt="Zero-Frustration Scale Mapping and Synthesizer Settings"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
              padding: "0 var(--space-md)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Zero-Frustration
              <br />
              Scale Mapping
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                margin: 0,
                textWrap: "balance",
                lineHeight: 1.7,
              }}
            >
              Kanade dynamically binds your physical keyboard keys to curated, chord-safe musical scales. Switch from standard Diatonic to the bright Major Pentatonic or the traditional Japanese Hirajōshi scale. With wrong notes mathematically excluded, you can focus on rhythm and flow.
            </p>
            
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "var(--space-xl) 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              Bilingual Markov Composer
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                margin: 0,
                textWrap: "balance",
                lineHeight: 1.7,
              }}
            >
              We trained a structured Markov Chain algorithm on real-world folk motifs. When you swap scales, the AI composer swaps its musical corpus—matching Western themes on Major keys, and swapping to traditional Koto folk patterns when using Japanese scales.
            </p>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 2 --- */}
        <section
          style={{
            maxWidth: "80rem",
            margin: "var(--space-4xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: "var(--space-2xl)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
              padding: "0 var(--space-md)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Real-Time AI Duet
              <br />
              Jam Accompaniment
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                margin: 0,
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              Enable AI Duet mode and play standard melodies. When you stop, the AI composer intercepts the last note, analyzes your tempo, and instantly generates a structured 4-bar phrase response in real-time, functioning as an active collaborative partner.
            </p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "var(--space-xl) 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              Web Audio Synthesis &amp; Warm Tuning
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                margin: 0,
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              No large sample libraries to download. Kanade constructs its audio graph (oscillators, biquad filters, dynamic gains) directly using the browser's Web Audio API. Instrument profiles simulate the resonant tones of a Marimba, Chimes, and a plucked Japanese Shamisen—all mathematically tuned to the warm 432 Hz healing frequency.
            </p>
          </div>

          <div
            className="glass"
            style={{
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
          >
            <ZoomableImage
              src="/img/kanade/mobile_view.png"
              alt="Kanade Mobile View showing AI composer options and custom synthesizer controls"
            />
          </div>
        </section>

        {/* --- EXTRA FEATURES --- */}
        <section
          style={{
            maxWidth: "80rem",
            margin: "var(--space-4xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "var(--space-2xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
             <h3 style={{ fontSize: "1.5rem", color: "var(--accent)", margin: "var(--space-sm) 0 0" }}>Zero-Server WAV Exporter</h3>
             <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
                Bake and render your compositions in milliseconds. By routing synthesized node data through an `OfflineAudioContext`, Kanade processes, writes PCM headers, and downloads a studio-quality `.WAV` file entirely within the client's browser, bypassing backend processing limits.
             </p>
          </div>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
             <h3 style={{ fontSize: "1.5rem", color: "var(--accent)", margin: "var(--space-sm) 0 0" }}>Ultra-Compact URL Sharing</h3>
             <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
                Share your compositions without a database or server storage. Kanade packages notes, timestamps, scales, and velocities using custom binary bit-packing, serialized into a compact Base64 parameter appended to the URL. If someone clicks your link, their browser decodes and plays it instantly.
             </p>
          </div>
        </section>

        {/* --- LEGAL FINE PRINT --- */}
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-xl)",
            alignItems: "center",
            marginTop: "var(--space-2xl)",
          }}
        >
          <Link
            href="/pin-tube/privacy"
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.2s ease",
              fontWeight: 500,
            }}
            className="hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
