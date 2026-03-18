import React from "react";
import Image from "next/image";
import Link from "next/link";
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
            textWrap: "balance",
          }}
        >
          {siteData.subheadline}
        </p>

        {/* Featured Product — PhysDaily showcase */}
        <Link
          href="/phys-daily"
          className="animate-in delay-500"
          style={{
            display: "block",
            position: "relative",
            width: "100%",
            maxWidth: "48rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="featured-product-card"
          >
            {/* Large editorial text behind the phones */}
            <div
              style={{
                position: "relative",
                padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)",
                paddingBottom: 0,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", justifyContent: "center" }}>
                <div className="badge badge--live" style={{ padding: "0.15rem 0.5rem", fontSize: 10 }}>LIVE</div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Featured Product
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  margin: 0,
                  color: "var(--text-primary)",
                  textWrap: "balance",
                }}
              >
                Daily physics<br />
                challenge for the{" "}
                <span className="gradient-text">curious mind</span>
              </h2>

              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                  margin: "0 auto",
                  maxWidth: "36ch",
                  lineHeight: 1.5,
                  textWrap: "balance",
                }}
              >
                PhysDaily — The Physics Bowl. Sharpen your thinking in the age of AI.
              </p>
            </div>

            {/* Phone mockups image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/10",
                marginTop: "var(--space-md)",
              }}
            >
              <Image
                src="/img/phys-daily/feature-product.png"
                alt="PhysDaily app screens showing daily challenge gameplay"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
                priority
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
