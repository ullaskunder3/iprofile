import React from "react";
import siteData from "../data/site.json";

interface LogoProps {
  size?: "sm" | "md";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const isSm = size === "sm";
  const boxSize = isSm ? 22 : 30;
  const fontSize = isSm ? "0.68rem" : "0.9rem";
  const textFontSize = isSm ? "var(--text-sm)" : "var(--text-md)";
  const textWeight = isSm ? 600 : 700;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
      <span
        className="logo-badge"
        style={{
          width: boxSize,
          height: boxSize,
          borderRadius: "var(--radius-sm)",
          background: "linear-gradient(135deg, #141414 0%, #050505 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: fontSize,
          fontWeight: 800,
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          letterSpacing: "-0.04em",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
          userSelect: "none",
          transition: "all var(--transition-fast)",
        }}
      >
        <span style={{ color: "#ffffff" }}>x</span>
        <span style={{ color: "#605c58" }}>f</span>
      </span>
      {showText && (
        <span
          style={{
            fontSize: textFontSize,
            fontWeight: textWeight,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {siteData.domain}
        </span>
      )}
    </div>
  );
}
