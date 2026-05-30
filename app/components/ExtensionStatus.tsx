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
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(139, 92, 246, 0.2)",
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
          background: "#8b5cf6",
          filter: "blur(50px)",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "4px" }}>
          <span style={{ 
            width: "8px", 
            height: "8px", 
            borderRadius: "50%", 
            background: "#8b5cf6", 
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.4)",
            display: "inline-block",
            animation: "pulse 2s infinite"
          }} />
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "#a78bfa", letterSpacing: "0.02em", textTransform: "uppercase" }}>
            In Review
          </span>
        </div>

        <h4 style={{ 
          fontSize: "var(--text-sm)", 
          color: "var(--text-primary)", 
          fontWeight: 600, 
          margin: 0 
        }}>
          Submitted to Chrome Web Store
        </h4>
        <p style={{ 
          fontSize: "12px", 
          color: "var(--text-secondary)", 
          margin: 0, 
          lineHeight: 1.5,
          opacity: 0.9
        }}>
          Pin-Tube is currently pending review by Google.
        </p>
      </div>

      <Link 
        href="/pin-tube"
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "var(--radius-md)",
          background: "rgba(139, 92, 246, 0.1)",
          color: "#a78bfa",
          fontSize: "0.75rem",
          fontWeight: 600,
          border: "1px solid rgba(139, 92, 246, 0.2)",
          textDecoration: "none"
        }}
        className="hover:bg-[rgba(139,92,246,0.2)] transition-colors"
      >
        Sneak Peek
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  );
}
