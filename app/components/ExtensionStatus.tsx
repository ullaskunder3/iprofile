"use client";

import React from "react";

export default function ExtensionStatus() {
  return (
    <div
      className="animate-in delay-500"
      style={{
        width: "100%",
        padding: "var(--space-md)",
        background: "rgba(234, 179, 8, 0.04)",
        border: "1px solid rgba(234, 179, 8, 0.35)",
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
          width: "140px",
          height: "140px",
          background: "#eab308",
          filter: "blur(55px)",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "4px" }}>
          {/* Star icon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "#b45309", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Featured by Google
          </span>
        </div>

        <h4 style={{ 
          fontSize: "var(--text-sm)", 
          color: "var(--text-primary)", 
          fontWeight: 600, 
          margin: 0 
        }}>
          Pin-Tube is Featured on Chrome Web Store 🎉
        </h4>
        <p style={{ 
          fontSize: "12px", 
          color: "var(--text-secondary)", 
          margin: 0, 
          lineHeight: 1.5,
          opacity: 0.9
        }}>
          Handpicked by Google — now live and available for everyone!
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
          background: "rgba(234, 179, 8, 0.12)",
          color: "#b45309",
          fontSize: "0.75rem",
          fontWeight: 700,
          border: "1px solid rgba(234, 179, 8, 0.35)",
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
