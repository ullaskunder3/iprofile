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
        gap: "var(--space-lg)",
        padding: "var(--space-md) 0",
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

        {/* Funnel Metrics Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "var(--space-md)",
          width: "100%",
        }}>
          {[
            { label: "Impressions", value: stats.totalImpressions.toLocaleString(), desc: "Store Discovery" },
            { label: "Page Views", value: stats.totalPageViews.toLocaleString(), desc: "Listing Visits" },
            { label: "Conversion", value: `${stats.conversionRate}%`, desc: "View to Install" },
            { label: "Downloads", value: stats.totalInstalls.toLocaleString(), desc: "Total Installs" }
          ].map((metric, i) => (
            <div key={`funnel-${i}`} style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "6px", 
              padding: "var(--space-lg)",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              alignItems: "flex-start",
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.02)"
            }}>
              <span style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {metric.label}
              </span>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {metric.value}
              </span>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "auto", paddingTop: "8px" }}>
                {metric.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Health Metrics Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--space-md)",
          width: "100%",
        }}>
          {[
            { label: "Active Users", value: stats.activeInstalls.toLocaleString(), color: "#10b981", desc: "Currently Installed" },
            { label: "Retention", value: `${stats.retentionRate}%`, color: "#3b82f6", desc: "Active / Total Downloads" },
            { label: "Top Region", value: stats.regions[0]?.name || "N/A", color: "#8b5cf6", desc: "Largest Market" }
          ].map((metric, i) => (
            <div key={`health-${i}`} style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "6px", 
              padding: "var(--space-lg)",
              background: "linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              alignItems: "flex-start",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: metric.color,
                opacity: 0.9
              }} />
              <span style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {metric.label}
              </span>
              <span style={{ fontSize: "36px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {metric.value}
              </span>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "auto", paddingTop: "8px" }}>
                {metric.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
