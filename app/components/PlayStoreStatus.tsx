"use client";

import React from "react";
import Image from "next/image";

export default function PlayStoreStatus() {
  return (
    <div
      className="animate-in delay-500"
      style={{
        marginTop: "var(--space-xl)",
        width: "100%",
        maxWidth: "32rem",
        padding: "var(--space-md)",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "var(--radius-lg)",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-md)"
      }}
    >
      {/* Background Glow */}
      <div 
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "120px",
          height: "120px",
          background: "#ffffff",
          filter: "blur(50px)",
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "4px" }}>
          <span style={{ 
            width: "8px", 
            height: "8px", 
            borderRadius: "50%", 
            background: "var(--success)", 
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.15)",
            display: "inline-block"
          }} />
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--success)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
            Available Now
          </span>
        </div>

        <h4 style={{ 
          fontSize: "var(--text-sm)", 
          color: "var(--text-primary)", 
          fontWeight: 600, 
          margin: 0 
        }}>
          Live on Google Play
        </h4>
        <p style={{ 
          fontSize: "12px", 
          color: "var(--text-secondary)", 
          margin: 0, 
          lineHeight: 1.5,
          opacity: 0.9
        }}>
          PhysDaily is now fully reviewed and ready to download!
        </p>
      </div>

      <a 
        href="https://play.google.com/store/apps/details?id=com.iprofilelabs.physdaily"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
        }}
      >
        <Image
          src="/img/google-play-badge.png"
          alt="Get it on Google Play"
          width={135}
          height={40}
          style={{ objectFit: "contain" }}
        />
      </a>
    </div>
  );
}
