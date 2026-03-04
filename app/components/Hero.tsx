import React from "react";
import siteData from "../data/site.json";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "85vh",
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

      {/* Content */}
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
          }}
        >
          {siteData.subheadline}
        </p>

        {/* CTA */}
        <div
          className="animate-in delay-400"
          style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap", justifyContent: "center" }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

        {/* Mystery teaser — upcoming mobile app */}
        <div
          className="animate-in delay-500"
          style={{
            marginTop: "var(--space-lg)",
            padding: "var(--space-md) var(--space-lg)",
            borderRadius: "var(--radius-lg)",
            background: "var(--bg-glass)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid var(--border)",
            maxWidth: "22rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-sm)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent-secondary)",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                color: "var(--accent-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Coming Up
            </span>
          </div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Something for students. Built mobile-first. 📱
          </p>
        </div>
      </div>
    </section>
  );
}
