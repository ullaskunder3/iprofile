import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteData from "../data/site.json";

export default function Hero() {
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
          overflow: "hidden",
        }}
      >
        {/* Decorative glow orbs */}
        <div
          className="glow-orb"
          style={{
            width: 420,
            height: 420,
            background: "var(--accent)",
            top: "-10%",
            left: "-8%",
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: 300,
            height: 300,
            background: "var(--accent-tertiary)",
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
            background: "var(--accent-secondary)",
            top: "40%",
            right: "20%",
            animationDelay: "6s",
            opacity: 0.2,
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
          {/* Domain pill */}
          <div
            className="animate-in delay-100"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(144, 50, 61, 0.1)",
              border: "1px solid rgba(144, 50, 61, 0.2)",
              fontSize: "var(--text-xs)",
              color: "var(--accent-light)",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            <span style={{ fontSize: "1rem" }}>⚡</span>
            {siteData.domain}
          </div>

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
        </div>
      </section>

      {/* ═══ FEATURED PRODUCT — PhysDaily ═══ */}
<section id="featured" className="max-w-5xl mx-auto px-6 mb-16">
  <Link href="/phys-daily" className="block group">
    
    <div className="grid md:grid-cols-2 gap-6 items-center rounded-2xl p-6 overflow-hidden transition-all duration-300">
      
      {/* IMAGE */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src="/img/phys-daily/feature-product.png"
          alt="PhysDaily app screens"
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between h-full">
        
        {/* TOP TEXT */}
        <div className="space-y-2">
          
          <div className="flex items-center gap-2">
            <span className="badge badge--live text-[10px] px-1.5 py-[2px]">
              LIVE
            </span>
            <span className="text-xs uppercase tracking-wider text-white/60">
              Featured
            </span>
          </div>

          <h2 className="text-[clamp(1.25rem,3.5vw,1.75rem)] font-bold leading-tight tracking-tight text-white">
            PhysDaily —{" "}
            <span className="gradient-text">
              The Physics Bowl
            </span>
          </h2>

        </div>

        {/* CTA */}
        <div className="flex justify-end mt-4">
          <span className="flex items-center gap-1 text-sm font-semibold text-accent-light transition-transform duration-200 group-hover:translate-x-1">
            Explore
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>

      </div>

    </div>

  </Link>
</section>
    </>
  );
}
