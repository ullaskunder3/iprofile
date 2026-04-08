"use client";

import React, { useEffect, useState } from "react";

const START_DATE = new Date("2026-03-27T00:00:00Z");
const TARGET_DAYS = 14;
const REQUIRED_TESTERS = 12;

export default function PlayStoreStatus() {
  const [daysElapsed, setDaysElapsed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateProgress = () => {
      const now = new Date();
      const diffTime = now.getTime() - START_DATE.getTime();
      const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1);
      
      setDaysElapsed(diffDays);
      setProgress(Math.min(100, (diffDays / TARGET_DAYS) * 100));
    };

    calculateProgress();
    // Update every hour to be safe, though daily is enough
    const timer = setInterval(calculateProgress, 3600000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  const isComplete = daysElapsed >= TARGET_DAYS;

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
          background: isComplete ? "var(--success)" : "var(--accent)",
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
              background: isComplete ? "var(--success)" : "#fbbc04", // Play Store yellow
              boxShadow: isComplete ? "0 0 10px var(--success)" : "0 0 10px #fbbc04",
              display: "inline-block"
            }} />
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              Google Play Status: {isComplete ? "Ready for Production" : "Closed Testing"}
            </span>
          </div>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", fontWeight: 500 }}>
            {daysElapsed}/{TARGET_DAYS} Days
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ 
          height: "6px", 
          width: "100%", 
          background: "rgba(255, 255, 255, 0.05)", 
          borderRadius: "var(--radius-full)",
          overflow: "hidden"
        }}>
          <div style={{ 
            height: "100%", 
            width: `${progress}%`, 
            background: isComplete 
              ? "linear-gradient(90deg, var(--success), #e6a23c)" 
              : "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
            borderRadius: "var(--radius-full)",
            transition: "width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
          }} />
        </div>

        <div style={{ display: "flex", gap: "var(--space-md)", marginTop: "0.25rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Testers</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)", fontWeight: 600 }}>{REQUIRED_TESTERS}/12 Opted-in</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Timeline</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)", fontWeight: 600 }}>
              {isComplete ? "Requirements Met" : `${TARGET_DAYS - daysElapsed} ${TARGET_DAYS - daysElapsed === 1 ? 'day' : 'days'} remaining`}
            </span>
          </div>
        </div>

        <p style={{ 
          fontSize: "11px", 
          color: "var(--text-secondary)", 
          margin: 0, 
          lineHeight: 1.4,
          fontStyle: "italic",
          opacity: 0.8
        }}>
          Currently running a closed test to meet Google Play&apos;s production criteria. Access to the Play Store will be available once the 14-day testing period concludes.
        </p>
      </div>
    </div>
  );
}
