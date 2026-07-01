import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteData from "../data/site.json";
import ExtensionStatus from "./ExtensionStatus";
import StatsSection from "./StatsSection";

export default function Hero() {
  const journals = [
    {
      title: "Shipping PhysDaily: A Solo Engineer's Blueprint",
      description: "A technical deep dive into building a high-stakes physics challenge app using Flutter, Firebase, and AI.",
      url: "http://ullaskunder.com/blogs/shipping-physdaily-a-solo-engineer-s-blueprint-for-ai-powered-mobile-apps",
      imageUrl: "/img/phys-daily/image.png",
      date: "Apr 23, 2026"
    },
    {
      title: "Building Pin-Tube: How I Created a Chrome Extension to Pin YouTube Videos and Stop Doomscrolling",
      description: "A technical walkthrough of building a focus-oriented Chrome extension to pin YouTube videos and keep your feed clean.",
      url: "https://www.ullaskunder.com/blogs/building-pin-tube-how-i-created-a-chrome-extension-to-pin-youtube-videos-and-stop-doomscrolling",
      imageUrl: "/img/pin-tube/first.png",
      date: "Jun 1, 2026"
    }
  ];

  return (
    <>
      {/* ═══ HERO — Company Identity ═══ */}
      <section
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "60vh",
          padding: "var(--space-3xl) var(--space-xl) var(--space-2xl)",
        }}
      >
        {/* Decorative glow orbs */}
        <div
          className="glow-orb"
          style={{
            width: 420,
            height: 420,
            background: "#ffffff",
            top: "-10%",
            left: "-8%",
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: 300,
            height: 300,
            background: "#666666",
            bottom: "5%",
            right: "-5%",
            animationDelay: "3s",
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: 200,
            height: 200,
            background: "#444444",
            top: "40%",
            right: "20%",
            animationDelay: "6s",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "52rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-lg)",
          }}
        >
          {/* Announcement pill */}
          <Link
            href="/kanade"
            className="animate-in delay-100 group hover:border-white/20 hover:bg-white/5 transition-all"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.3rem 0.8rem 0.3rem 0.3rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <span style={{ 
              background: "var(--accent)", 
              color: "#000",
              padding: "0.2rem 0.6rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.65rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>New Release</span>
            <span className="text-white/80 group-hover:text-white transition-colors">Kanade — AI Duet Synthesizer</span>
            <svg 
              className="transition-transform group-hover:translate-x-1 text-white/50 group-hover:text-white" 
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          {/* Headline */}
          <h1
            className="animate-in delay-200"
            style={{
              fontSize: "clamp(var(--text-2xl), 6vw, var(--text-4xl))",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "var(--text-primary)",
            }}
          >
            {siteData.headline.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="gradient-text">{line}</span> : line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className="animate-in delay-300"
            style={{
              fontSize: "var(--text-md)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "42rem",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {siteData.subheadline}
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-in delay-400"
            style={{
              display: "flex",
              gap: "var(--space-md)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#featured" className="btn-primary">
              See What&apos;s New
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
            <a
              href={siteData.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {siteData.ctaText}
            </a>
          </div>

          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "var(--space-sm)", 
            width: "100%", 
            maxWidth: "32rem", 
            marginTop: "var(--space-xl)" 
          }}>
            <ExtensionStatus />
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ═══ FEATURED WRITING — Blog Section (Compact Grid) ═══ */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 mb-20 md:mb-28">
        <div className="flex flex-col gap-6">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-accent-secondary">
              Journal
            </span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>

          <div style={{
            display: "grid",
            gap: "var(--space-xl)",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
          }}>
            {journals.map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  gap: "var(--space-md)",
                  transition: "all var(--transition-base)"
                }}>
                  {/* Thumbnail Container */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "180px",
                    background: post.imageUrl.includes("pin-tube") ? "#0a0a0a" : "#ffffff",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.05)"
                  }}>
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)", flex: 1 }}>
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-mono, monospace)", color: "var(--text-muted)" }}>
                      {post.date}
                    </span>
                    <h3 style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 800,
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.3,
                      transition: "color var(--transition-fast)"
                    }} className="group-hover:text-accent-secondary">
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--text-secondary)",
                      margin: 0,
                      lineHeight: 1.5,
                      flex: 1
                    }}>
                      {post.description}
                    </p>
                    
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "rgba(255, 255, 255, 0.6)",
                      marginTop: "var(--space-xs)",
                      transition: "color var(--transition-fast)"
                    }} className="group-hover:text-white">
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ FEATURED PRODUCTS GRID ═══ */}
      <section id="featured" className="max-w-6xl mx-auto px-4 md:px-12 mb-20 md:mb-28">
        <div style={{
          display: "grid",
          gap: "var(--space-lg)",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        }}>
          {/* Card 1: PhysDaily */}
          <Link href="/phys-daily" className="block group" style={{ textDecoration: "none" }}>
            <div className="glass" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              transition: "all var(--transition-base)",
            }}>
              {/* Image Container */}
              <div style={{
                position: "relative",
                width: "100%",
                height: "220px",
                background: "rgba(255, 255, 255, 0.02)",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "relative",
                  width: "90%",
                  height: "140%",
                  top: "10%",
                  transition: "transform 0.5s ease"
                }} className="group-hover:scale-[1.03]">
                  <Image
                    src="/img/phys-daily/feature-product.png"
                    alt="PhysDaily app screens"
                    fill
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: "var(--space-md)", display: "flex", flexDirection: "column", gap: "var(--space-sm)", flex: 1 }}>
                <span style={{ fontSize: "10px", uppercase: true, fontWeight: 900, letterSpacing: "0.2em", color: "var(--text-secondary)" }}>
                  Featured Experience
                </span>
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "#fff", margin: 0 }}>
                  PhysDaily — <span className="gradient-text">The Physics Bowl</span>
                </h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", margin: 0, flex: 1, lineHeight: 1.5 }}>
                  Reimagining physics education through daily gamified challenges and real-time interactive problem sets.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "var(--space-xs)" }}>
                  <span className="pill" style={{ fontSize: "9px", padding: "2px 6px" }}>Flutter</span>
                  <span className="pill" style={{ fontSize: "9px", padding: "2px 6px" }}>Firebase</span>
                  <span className="pill" style={{ fontSize: "9px", padding: "2px 6px" }}>Dart</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Kanade */}
          <Link href="/kanade" className="block group" style={{ textDecoration: "none" }}>
            <div className="glass" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              transition: "all var(--transition-base)",
            }}>
              {/* Image Container */}
              <div style={{
                position: "relative",
                width: "100%",
                height: "220px",
                background: "rgba(255, 255, 255, 0.02)",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "relative",
                  width: "88%",
                  height: "88%",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  transition: "transform 0.5s ease"
                }} className="group-hover:scale-[1.03]">
                  <Image
                    src="/img/kanade/desktop_view.png"
                    alt="Kanade AI Composer interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: "var(--space-md)", display: "flex", flexDirection: "column", gap: "var(--space-sm)", flex: 1 }}>
                <span style={{ fontSize: "10px", uppercase: true, fontWeight: 900, letterSpacing: "0.2em", color: "var(--text-secondary)" }}>
                  New Release
                </span>
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "#fff", margin: 0 }}>
                  Kanade — <span className="gradient-text">AI Composer</span>
                </h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", margin: 0, flex: 1, lineHeight: 1.5 }}>
                  A zero-frustration synthesizer and AI composer where every keypress resolves to beautiful harmony.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "var(--space-xs)" }}>
                  <span className="pill" style={{ fontSize: "9px", padding: "2px 6px" }}>Next.js</span>
                  <span className="pill" style={{ fontSize: "9px", padding: "2px 6px" }}>Web Audio API</span>
                  <span className="pill" style={{ fontSize: "9px", padding: "2px 6px" }}>TypeScript</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

