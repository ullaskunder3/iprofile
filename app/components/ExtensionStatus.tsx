"use client";

import React from "react";
import Link from "next/link";

export default function ExtensionStatus() {
  return (
    <div
      className="animate-in delay-500"
      style={{
        width: "100%",
        padding: "var(--space-md)",
        background: "rgba(0, 0, 0, 0.02)",
        border: "1px solid rgba(16, 185, 129, 0.2)",
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
          background: "#10b981",
          filter: "blur(50px)",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "4px" }}>
          <span style={{ 
            width: "8px", 
            height: "8px", 
            borderRadius: "50%", 
            background: "#10b981", 
            boxShadow: "0 0 10px rgba(16, 185, 129, 0.4)",
            display: "inline-block"
          }} />
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "#059669", letterSpacing: "0.02em", textTransform: "uppercase" }}>
            Available Now
          </span>
        </div>

        <h4 style={{ 
          fontSize: "var(--text-sm)", 
          color: "var(--text-primary)", 
          fontWeight: 600, 
          margin: 0 
        }}>
          v1.3 Live on Chrome Web Store
        </h4>
        <p style={{ 
          fontSize: "12px", 
          color: "var(--text-secondary)", 
          margin: 0, 
          lineHeight: 1.5,
          opacity: 0.9
        }}>
          The smart YouTube Pinner update has been approved and is now public!
        </p>
      </div>

      <a
        href="https://chromewebstore.google.com/detail/pin-tube/oehonkhbilmcmmpcnbpocpoomldofejd"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "var(--radius-md)",
          background: "rgba(16, 185, 129, 0.1)",
          color: "#059669",
          fontSize: "0.75rem",
          fontWeight: 600,
          border: "1px solid rgba(16, 185, 129, 0.2)",
          whiteSpace: "nowrap",
          textDecoration: "none",
          transition: "all 0.2s ease"
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Get Extension
      </a>
    </div>
  );
}
