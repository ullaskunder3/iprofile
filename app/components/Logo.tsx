import React from "react";
import Image from "next/image";
import siteData from "../data/site.json";

interface LogoProps {
  size?: "sm" | "md";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const isSm = size === "sm";
  const boxSize = isSm ? 22 : 30;
  const textFontSize = isSm ? "var(--text-sm)" : "var(--text-md)";
  const textWeight = isSm ? 600 : 700;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
      <Image
        className="logo-badge"
        src="/favicon.svg"
        alt="Logo"
        width={boxSize}
        height={boxSize}
        style={{
          borderRadius: "var(--radius-sm)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
          transition: "all var(--transition-fast)",
          cursor: "pointer",
        }}
      />
      {showText && (
        <span
          style={{
            fontSize: textFontSize,
            fontWeight: textWeight,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {siteData.domain.replace(".com", "")}
        </span>
      )}
    </div>
  );
}

