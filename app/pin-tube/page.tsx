import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pin-Tube — The Smart YouTube Pinner",
  description:
    "A native-feeling Chrome extension to pin your YouTube videos and eradicate doom-scrolling distractions.",
};

export default function PinTubeLanding() {
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
          <div className="badge" style={{ marginBottom: "var(--space-xs)", borderColor: "rgba(139, 92, 246, 0.3)", background: "rgba(139, 92, 246, 0.1)", color: "#a78bfa" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#8b5cf6",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ fontWeight: 600 }}>In Review — Coming Soon</span>
          </div>

          <Image
            src="/img/pin-tube/icon128.png"
            alt="Pin-Tube Logo"
            width={96}
            height={96}
            style={{
              borderRadius: 24,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              marginBottom: "var(--space-xs)"
            }}
          />

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
            Pin-Tube.
            <br />
            <span className="gradient-text">Never lose a video again.</span>
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
            A smart, native-feeling Chrome Extension that puts a simple pin icon directly inside the YouTube video player. 
            Keep your videos handy without cluttering bookmarks, and permanently hide Shorts shelves and tag recommendation chips to stop doom-scrolling.
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
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "0.875rem 1.75rem", fontSize: "1rem", color: "var(--text-primary)", borderColor: "var(--border)", opacity: 0.8 }}
            >
              Coming Soon to Chrome Web Store
            </a>
          </div>
        </section>

        {/* --- WIDE HERO BANNER --- */}
        <section
          style={{
            maxWidth: "72rem",
            margin: "var(--space-2xl) auto",
            padding: "0 var(--space-md)",
          }}
        >
          <div
            className="glass"
            style={{
              position: "relative",
              aspectRatio: "16/9",
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/img/pin-tube/first.png"
              alt="Pin-Tube Extension Interface"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, var(--bg-primary) 0%, transparent 25%)",
              }}
            />
          </div>
        </section>

        {/* --- THE PROBLEM & PLAN --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                <strong>Lost Videos:</strong> You would watch a video, close your laptop, and then struggle to find it again later. Using regular browser bookmarks was clunky, required too many clicks, and clogged up your bookmarks bar.<br/><br/>
                <strong>Doom-scrolling:</strong> The YouTube homepage is filled with distracting &quot;Shorts&quot; shelves that suck you into doom-scrolling, and tag recommendation chips that you never use.
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
                <li>Put a simple <strong>Pin icon</strong> directly inside the YouTube video player.</li>
                <li>Inject a <strong>small, natural-looking row</strong> of those pinned videos at the absolute top of the YouTube homepage.</li>
                <li>Add a feature to permanently hide Shorts and tags.</li>
                <li>Make the code &quot;Senior Engineer&quot; level: fast, clean, and minified to prevent easy copying.</li>
             </ul>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 1 --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-xl)",
            alignItems: "center",
          }}
        >
          <div
            className="glass"
            style={{
              position: "relative",
              aspectRatio: "1/1",
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <Image
              src="/img/pin-tube/second.png"
              alt="Seamless UI Integration"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
              padding: "0 var(--space-xs)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Seamless UI
              <br />
              Integration
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--text-base)",
                margin: 0,
                textWrap: "balance",
                lineHeight: 1.6,
              }}
            >
              We wrote a smart script that patiently waits for YouTube&apos;s video player to load, and injects a custom pushpin SVG button right next to the native settings gear. It looks exactly like it belongs there.
            </p>
            
            <h2
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "var(--space-md) 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              Dynamic Grid Parity
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--text-base)",
                margin: 0,
                textWrap: "balance",
                lineHeight: 1.6,
              }}
            >
              To make the &quot;Pinned Videos&quot; row on the homepage look native, we hooked into YouTube&apos;s internal CSS variables and used ResizeObserver. Our pinned videos perfectly adapt and resize their columns exactly when YouTube&apos;s grid resizes, seamlessly tying into native dark/light modes.
            </p>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 2 --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-xl)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
              padding: "0 var(--space-xs)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              The &quot;Smart Resume&quot;
              <br />
              Engine
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--text-base)",
                margin: 0,
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              Instead of just linking back to the video, we wanted you to resume exactly where you left off. We added silent listeners to the pause and visibilitychange events. The second you pause or switch tabs, we save your exact timestamp and append it to the video URL.
            </p>

            <h2
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "var(--space-md) 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              Distraction Blocking
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--text-base)",
                margin: 0,
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              We built a popup menu with toggle switches. When active, our CSS completely eradicates the doom-scroll triggers by hiding the Shorts sidebar links, the Shorts grid shelves, and the tag chips. 
            </p>
          </div>

          <div
            className="glass"
            style={{
              position: "relative",
              aspectRatio: "1/1",
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/img/pin-tube/third.png"
              alt="Distraction Blocking and Popup Menu"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* --- EXTRA FEATURES --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
             <div
                className="glass"
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  width: "100%",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <Image
                  src="/img/pin-tube/forth.png"
                  alt="Management Dashboard"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
             <h3 style={{ fontSize: "1.25rem", color: "var(--accent)", margin: "var(--space-sm) 0 0" }}>Smart Tab Management</h3>
             <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                To prevent opening duplicate &quot;Manage Videos&quot; tabs, we gave the extension tabs permission. A background service worker intelligently searches open tabs—if the dashboard is already open, it just snaps your screen over to it instead of spawning a new one.
             </p>
          </div>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
             <div
                className="glass"
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  width: "100%",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <Image
                  src="/img/pin-tube/fifth.png"
                  alt="Onboarding and Dashboard"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
             <h3 style={{ fontSize: "1.25rem", color: "var(--accent)", margin: "var(--space-sm) 0 0" }}>Onboarding &amp; Obfuscation</h3>
             <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                We built an automatic onboarding screen that teaches users how to pin. We squashed the code using <strong>Vite &amp; Terser</strong> into a single highly-minified build, protecting the logic while remaining compliant with Chrome Web Store policies.
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
