"use client";

import React, { useEffect, useState } from "react";

const APPLICATION_DATE = new Date("2026-04-09T11:51:00");
const TARGET_REVIEW_DAYS = 7;

export default function PlayStoreStatus() {
  const [daysSinceApplied, setDaysSinceApplied] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateProgress = () => {
      const now = new Date();
      const diffTime = now.getTime() - APPLICATION_DATE.getTime();
      const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
      
      setDaysSinceApplied(diffDays);
    };

    calculateProgress();
    const timer = setInterval(calculateProgress, 3600000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="animate-in delay-500"
      style={{
        marginTop: "var(--space-xl)",
        width: "100%",
        maxWidth: "32rem",
        padding: "var(--space-md)",
        background: "rgba(28, 22, 20, 0.4)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
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
          background: "var(--accent-secondary)",
          filter: "blur(40px)",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ 
              width: "8px", 
              height: "8px", 
              borderRadius: "50%", 
              background: "#4285F4", // Google Blue
              boxShadow: "0 0 10px #4285F4",
              display: "inline-block"
            }} />
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              Google Play Status: Production Review
            </span>
          </div>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", fontWeight: 500 }}>
            {daysSinceApplied > 0 ? `${daysSinceApplied} days ago` : "Applied today"}
          </span>
        </div>

        {/* Progress Bar (Indeterminate style) */}
        <div style={{ 
          height: "6px", 
          width: "100%", 
          background: "rgba(255, 255, 255, 0.05)", 
          borderRadius: "var(--radius-full)",
          overflow: "hidden",
          position: "relative"
        }}>
          <div 
            className="indeterminate-progress"
            style={{ 
              height: "100%", 
              width: "40%", 
              background: "linear-gradient(90deg, transparent, var(--accent-secondary), transparent)",
              borderRadius: "var(--radius-full)",
              position: "absolute",
              left: "-100%",
            }} 
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "4px" }}>
          <h4 style={{ 
            fontSize: "var(--text-sm)", 
            color: "var(--text-primary)", 
            fontWeight: 600, 
            margin: 0 
          }}>
            We have your application for production access
          </h4>
          <p style={{ 
            fontSize: "12px", 
            color: "var(--text-secondary)", 
            margin: 0, 
            lineHeight: 1.5,
            opacity: 0.9
          }}>
            We&apos;re reviewing your application form. We&apos;ll email the account owner with an update. This usually takes {TARGET_REVIEW_DAYS} days or less, but may occasionally take longer.
          </p>
        </div>

        <div style={{ 
          marginTop: "var(--space-xs)",
          padding: "6px 10px",
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "var(--radius-sm)",
          display: "inline-flex",
          alignItems: "center",
          width: "fit-content"
        }}>
          <span style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: 500 }}>
            APPLIED: APRIL 9, 2026 • 11:51 AM
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes indeterminate {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .indeterminate-progress {
          animation: indeterminate 2s infinite linear;
        }
      `}</style>
    </div>
  );
}
