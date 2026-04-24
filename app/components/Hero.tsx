import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteData from "../data/site.json";
import PlayStoreStatus from "./PlayStoreStatus";

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

          <PlayStoreStatus />
        </div>
      </section>

      {/* ═══ FEATURED WRITING — Blog Section (Compact) ═══ */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 mb-20 md:mb-32">
        <div className="flex flex-col gap-6">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-accent-light">
              Journal
            </span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Large Image Side */}
            <div className="w-full lg:w-1/2 aspect-video relative rounded-3xl overflow-hidden group/img bg-white border border-white/10 shadow-2xl">
              <Image
                src="/img/phys-daily/image.png"
                alt="PhysDaily on Google Play Store"
                fill
                className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover/img:scale-[1.02]"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight text-balance">
                  Shipping PhysDaily: <br className="hidden lg:block" />
                  A Solo Engineer&apos;s Blueprint
                </h2>

                <p className="text-base md:text-lg text-white/50 max-w-[45ch] text-balance">
                  A technical deep dive into building a high-stakes physics challenge app using Flutter, Firebase, and AI.
                </p>
              </div>

              <a
                href="https://ullaskunder.tech/blogs/shipping-physdaily-a-solo-engineer-s-blueprint-for-ai-powered-mobile-apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 w-fit py-4 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-sm font-bold text-white transition-all group/article"
              >
                Read full article
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-white transition-transform group-hover/article:translate-x-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ FEATURED PRODUCT — PhysDaily ═══ */}
      <section id="featured" className="max-w-5xl mx-auto px-4 md:px-12 mb-24 md:mb-32">
        <Link href="/phys-daily" className="block group">
          <div className="glass featured-product-card relative flex flex-col md:flex-row items-stretch rounded-[2rem] md:rounded-[3.5rem] mt-12 transition-all duration-500 hover:border-white/20" style={{ padding: 0 }}>

            {/* IMAGE SIDE — Adaptive breakout with overlap prevention */}
            <div className="relative w-full md:w-[45%] lg:w-[42%] min-h-[300px] sm:min-h-[380px] md:min-h-[500px] flex items-center justify-center">
              <div className="absolute 
              -top-12 sm:-top-16 md:-top-16 lg:-top-24 
              -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-24 
              -left-2 sm:-left-4 md:-left-8 lg:-left-20 
              w-[105%] sm:w-[110%] md:w-[115%] lg:w-[130%] 
              z-30 transition-transform duration-700 group-hover:scale-[1.03] pointer-events-none"
              >
                <Image
                  src="/img/phys-daily/feature-product.png"
                  alt="PhysDaily app screens"
                  fill
                  className="object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.7)]"
                  priority
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="w-full md:w-[55%] lg:w-[58%] flex flex-col justify-center p-8 sm:p-12 md:p-14 lg:p-24 md:pl-4 lg:pl-8 gap-6 md:gap-8">

              <div className="flex flex-col gap-4">

                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] sm:tracking-[0.3em] text-accent-secondary">
                    Featured Experience
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <h2 className="text-[clamp(1.5rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                    PhysDaily —<br />
                    <span className="gradient-text">The Physics Bowl</span>
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[var(--text-md)] text-white/50 leading-relaxed max-w-[38ch] font-medium">
                    Reimagining physics education through high-stakes gamified challenges and real-time interactive problem sets.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                  <span className="pill text-[10px] font-bold py-1.5 px-3 border-white/10 bg-white/5">Flutter</span>
                  <span className="pill text-[10px] font-bold py-1.5 px-3 border-white/10 bg-white/5">Firebase</span>
                  <span className="pill text-[10px] font-bold py-1.5 px-3 border-white/10 bg-white/5">Dart</span>
                </div>
              </div>

              <div className="flex items-center justify-end mt-4 pt-6 sm:pt-8 border-t border-white/5">
                <span className="flex items-center gap-2 sm:gap-3 text-sm md:text-base font-black text-accent-light transition-all duration-300 group-hover:gap-5 group-hover:text-white">
                  Explore Project
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
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
