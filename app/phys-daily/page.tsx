import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PhysDaily — The Physics Bowl",
  description:
    "A daily physics challenge to sharpen your curiosity in the age of AI.",
};

export default function PhysDailyLanding() {
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
          <div className="badge badge--live">
            <span style={{ fontSize: 16 }}>🎮</span> Now Available for Android
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
            Sharpen Your Mind.
            <br />
            <span className="gradient-text">One Daily Challenge.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "var(--text-secondary)",
              maxWidth: "50ch",
              margin: "0 auto",
              lineHeight: 1.6,
              textWrap: "balance",
            }}
          >
            Introducing the <strong>Physics Bowl</strong> format. Keep your
            curiosity alive and your analytical skills sharp in the age of AI
            with a focused, daily physics problem.
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-sm)",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "var(--space-xs)",
            }}
          >
            <a
              href="https://forms.gle/i6T2WeqszCVqdceK9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Early Access
            </a>
            <a
              href="https://ullaskunder.tech/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Contact Us
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
              src="/img/phys-daily/mockup3.png"
              alt="PhysDaily App flow showing dashboard, question, and completion screens"
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

        {/* --- FEATURE GRID --- */}
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
              The Science of
              <br />
              Satisfaction
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
              PhysDaily isn&apos;t just another quiz. It&apos;s a carefully
              designed tactile experience. From the satisfying feedback of the
              virtual keyboard to the glowing &quot;Correct!&quot; screens,
              every interaction rewards your analytical thinking.
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

        {/* --- MISSION --- */}
        <section
          id="story"
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
              aspectRatio: "4/5",
              width: "100%",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              order: -1,
            }}
          >
            <Image
              src="/img/phys-daily/mockup1.png"
              alt="Developer space with mechanical pencils and free-body diagrams"
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
                fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Curiosity in the
              <br />
              Age of AI
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
              Generative AI gives us answers instantly. But instant answers
              remove the joy of the struggle. We built{" "}
              <strong>PhysDaily</strong> to preserve the art of thinking.
              It&apos;s a &quot;physics bowl&quot; in your pocket — an everyday
              invitation to stop scrolling, start deducing, and feel the thrill
              of solving a puzzle on your own.
            </p>
          </div>
        </section>

        {/* --- EARLY ACCESS CTA --- */}
        <section
          id="download"
          style={{
            maxWidth: "48rem",
            margin: "var(--space-3xl) auto var(--space-2xl)",
            padding: "var(--space-3xl) var(--space-2xl)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-lg)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "var(--accent)",
              filter: "blur(120px)",
              opacity: 0.1,
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          />

          <Image
            src="/img/phys-daily/logo.png"
            alt="PhysDaily Logo"
            width={72}
            height={72}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(144, 50, 61, 0.25)",
              position: "relative",
              zIndex: 1,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: 800,
                margin: "0 0 var(--space-sm) 0",
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
                margin: "0 auto",
                maxWidth: "42ch",
                textWrap: "balance",
                lineHeight: 1.6,
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              }}
            >
              We&apos;re onboarding early testers. Join the list and be among
              the first to solve daily physics challenges.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-md)",
              flexWrap: "wrap",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              marginTop: "var(--space-xs)",
            }}
          >
            <a
              href="https://forms.gle/i6T2WeqszCVqdceK9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "0.875rem 2rem", fontSize: "1rem" }}
            >
              Request Test Access
            </a>
            <a
              href="https://ullaskunder.tech/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "0.875rem 1.75rem", fontSize: "1rem" }}
            >
              Contact Directly
            </a>
          </div>

          <div
            style={{
              marginTop: "var(--space-md)",
              padding: "var(--space-sm) var(--space-md)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "0.89rem",
                color: "var(--text-secondary)",
                margin: 0,
                fontStyle: "italic",
                textWrap: "balance",
                fontWeight: 500,
              }}
            >
              We promise not to spam you. We don&apos;t have the energy for that. It&apos;s a one-time thing, not a sales pitch. 🫡
            </p>
          </div>
        </section>

        {/* --- LEGAL FINE PRINT --- */}
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto var(--space-4xl)",
            padding: "0 var(--space-md)",
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-xl)",
            alignItems: "center",
          }}
        >
          <Link
            href="/phys-daily/privacy"
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.2s ease",
              fontWeight: 500,
            }}
          >
            Privacy Policy
          </Link>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--border)" }} />
          <Link
            href="/phys-daily/terms"
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.2s ease",
              fontWeight: 500,
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
