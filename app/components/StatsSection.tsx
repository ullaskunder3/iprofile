import React from "react";
import { getExtensionStats } from "../utils/statsParser";

export default function StatsSection() {
  const stats = getExtensionStats();

  if (stats.totalInstalls === 0) {
    return null;
  }

  // Calculate cumulative active users over time for the trend line
  let runningActive = 0;
  const growthHistory = stats.history.map(h => {
    runningActive += (h.installs - h.uninstalls);
    if (runningActive < 0) runningActive = 0;
    return runningActive;
  });

  const chartWidth = 300;
  const chartHeight = 40;
  const maxActive = Math.max(...growthHistory, 1);
  
  const points = growthHistory.map((val, i) => {
    const x = (i / (growthHistory.length - 1)) * chartWidth;
    const y = chartHeight - (val / maxActive) * (chartHeight - 4) - 2;
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  return (
    <section
      id="extension-telemetry"
      className="px-4 md:px-12 animate-in delay-200"
      style={{
        maxWidth: "56rem", // Tighter max-width to match hero alignment better
        margin: "0 auto var(--space-2xl) auto",
        width: "100%"
      }}
    >
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "var(--space-xl)",
        padding: "var(--space-xl) 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}>
        {/* Header for Trust */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px", 
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ 
              width: 8, 
              height: 8, 
              borderRadius: "50%", 
              background: "#10b981", 
              boxShadow: "0 0 12px rgba(16, 185, 129, 0.6)",
              display: "block"
            }} />
            <span style={{ 
              fontSize: "12px", 
              fontWeight: 800, 
              textTransform: "uppercase", 
              letterSpacing: "0.15em", 
              color: "var(--text-primary)" 
            }}>
              Pin-Tube Telemetry
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", marginLeft: "4px" }}>
              — Verified via Chrome Web Store
            </span>
          </div>
          
          {/* Subtle Sparkline at Header Level */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              30d Growth
            </span>
            <div style={{ width: "120px", height: "24px", position: "relative" }}>
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
              >
                <path
                  d={linePath}
                  fill="none"
                  stroke="rgba(16, 185, 129, 0.5)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Minimal Metrics Row (Flex to distribute space evenly and center align) */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-lg)",
        }}>
          {/* Metric 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", flex: "1 1 auto" }}>
            <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Active Users</span>
            <span style={{ fontSize: "40px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {stats.activeInstalls.toLocaleString()}
            </span>
          </div>

          {/* Metric 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", flex: "1 1 auto" }}>
            <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Downloads</span>
            <span style={{ fontSize: "40px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {stats.totalInstalls.toLocaleString()}
            </span>
          </div>

          {/* Metric 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", flex: "1 1 auto" }}>
            <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Retention</span>
            <span style={{ fontSize: "40px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {stats.retentionRate}%
            </span>
          </div>

          {/* Metric 4 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", flex: "1 1 auto" }}>
            <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Top Region</span>
            <span style={{ fontSize: "40px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {stats.regions[0]?.name || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
