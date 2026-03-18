import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PhysDaily — The Physics Bowl",
  description: "A daily physics challenge to sharpen your curiosity in the age of AI.",
};

export default function PhysDailyLanding() {
  return (
    <>
      <div className="noise-overlay" />
      <Header />

      <main className="animate-in" id="main-content" style={{ paddingTop: "var(--space-3xl)" }}>
        {/* --- HERO SECTION --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "var(--space-xl) var(--space-xl)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "var(--space-lg)",
          }}
        >
          <div className="badge badge--live">
            <span style={{ fontSize: 16 }}>🎮</span> Now Available for Android
          </div>
          
          <h1
            style={{
              fontSize: "clamp(var(--text-3xl), 8vw, var(--text-4xl))",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Sharpen Your Mind.<br />
            <span className="gradient-text">One Daily Challenge.</span>
          </h1>

          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              maxWidth: "60ch",
              margin: "0 auto",
              lineHeight: 1.6,
              textWrap: "balance",
            }}
          >
            Introducing the <strong>Physics Bowl</strong> format. Keep your curiosity alive and your analytical skills sharp in the age of AI with a focused, daily physics problem.
          </p>

          <div style={{ display: "flex", gap: "var(--space-md)", marginTop: "var(--space-sm)" }}>
            <Link href="#download" className="btn-primary">
              Get the App
            </Link>
            <Link href="#story" className="btn-outline">
              Our Mission
            </Link>
          </div>
        </section>

        {/* --- WIDE HERO BANNER (The User Journey) --- */}
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
              src="/img/phys-daily/mockup3.png"
              alt="PhysDaily App flow showing dashboard, question, and completion screens"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            {/* Soft gradient overlay at bottom to blend into page */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, var(--bg-primary) 0%, transparent 25%)",
              }}
            />
          </div>
        </section>

        {/* --- FEATURE GRID (Close up & Portrait) --- */}
        <section
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-xl)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-xl)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              The Science of <br/>Satisfaction
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-base)", margin: 0, textWrap: "balance", lineHeight: 1.6 }}>
              PhysDaily isn&apos;t just another quiz. It&apos;s a carefully designed tactile experience. From the satisfying feedback of the virtual keyboard to the glowing &quot;Correct!&quot; screens, every interaction rewards your analytical thinking.
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
              boxShadow: "var(--shadow-card)",
            }}
          >
            <Image
              src="/img/phys-daily/mockup2.png"
              alt="Close-up of the tactile virtual QWERTY keyboard and game interface"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* --- OUR MISSION / CREATOR SPACE --- */}
        <section
          id="story"
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto",
            padding: "0 var(--space-xl)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-xl)",
            alignItems: "center",
          }}
        >
          <div
            className="glass"
            style={{
              position: "relative",
              aspectRatio: "4/5",
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              order: -1, // Ensures image is first on mobile, but flex layout handles grid
            }}
          >
            <Image
              src="/img/phys-daily/mockup1.png"
              alt="Developer space with mechanical pencils and free-body diagrams"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              The Why
            </span>
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Curiosity in the<br/>Age of AI
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-base)", margin: 0, lineHeight: 1.7, textWrap: "balance" }}>
              Generative AI gives us answers instantly. But giving absolute answers removes the joy of the struggle. We built <strong>PhysDaily</strong> to preserve the art of thinking. It&apos;s a &quot;physics bowl&quot; in your pocket — an everyday invitation to stop scrolling, start deducing, and feel the thrill of solving a puzzle organically.
            </p>
          </div>
        </section>

        {/* --- EARLY ACCESS CTA --- */}
        <section
          id="download"
          style={{
            maxWidth: "64rem",
            margin: "var(--space-3xl) auto var(--space-2xl)",
            padding: "var(--space-3xl) var(--space-xl)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-lg)",
            position: "relative",
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "var(--accent)",
              filter: "blur(120px)",
              opacity: 0.08,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          <Image
            src="/img/phys-daily/logo.png"
            alt="PhysDaily Logo"
            width={64}
            height={64}
            style={{ borderRadius: 14, boxShadow: "0 8px 32px rgba(144, 50, 61, 0.2)" }}
          />

          <h2
            style={{
              fontSize: "clamp(var(--text-xl), 4vw, var(--text-2xl))",
              fontWeight: 700,
              margin: 0,
              color: "var(--text-primary)",
              textWrap: "balance",
              letterSpacing: "-0.02em",
            }}
          >
            Be the first to play.
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              margin: 0,
              maxWidth: "40ch",
              textWrap: "balance",
              lineHeight: 1.6,
              fontSize: "var(--text-base)",
            }}
          >
            We&apos;re onboarding early testers. Join the list and be among the first to solve daily physics challenges.
          </p>

          <a
            href="https://ullaskunder.tech/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "0.75rem 2rem",
              fontSize: "var(--text-base)",
            }}
          >
            Request Early Access
          </a>
        </section>

        {/* --- LEGAL FINE PRINT --- */}
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto var(--space-3xl)",
            padding: "0 var(--space-xl)",
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-lg)",
          }}
        >
          <Link
            href="/phys-daily/privacy"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.2s ease",
              opacity: 0.6,
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/phys-daily/terms"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.2s ease",
              opacity: 0.6,
            }}
          >
            Terms &amp; Conditions
          </Link>
        </div>

      </main>

      <Footer />
    </>
  );
}
