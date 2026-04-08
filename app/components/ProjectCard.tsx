import React from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  tagline: string;
  description: string;
  year: number;
  role: string;
  status: "live" | "coming-soon";
  liveUrl: string | null;
  repoUrl: string | null;
  achievements: string[];
  technologies: string[];
  details: string;
  index: number;
}

export default function ProjectCard({
  title,
  tagline,
  description,
  year,
  role,
  status,
  liveUrl,
  repoUrl,
  achievements,
  technologies,
  details,
  index,
}: ProjectCardProps) {
  const delay = 300 + index * 150;

  return (
    <article
      className="glass animate-in"
      style={{
        animationDelay: `${delay}ms`,
        padding: "var(--space-xl)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-lg)",
        transition: "var(--transition-base)",
      }}
    >
      {/* Header */}
      <header style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-sm)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-mono, monospace)",
                color: "var(--text-muted)",
              }}
            >
              {year}
            </span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {role}
            </span>
          </div>

          <span className={status === "live" ? "badge badge--live" : "badge badge--coming-soon"}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: status === "live" ? "var(--success)" : "var(--warning)",
                display: "inline-block",
                animation: status === "live" ? undefined : "pulse 2s infinite",
              }}
            />
            {status === "live" ? "Live" : "Coming Soon"}
          </span>
        </div>

        <h2
          className="gradient-text"
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "var(--text-md)",
            color: "var(--text-primary)",
            opacity: 0.9,
            fontWeight: 500,
            margin: 0,
          }}
        >
          {tagline}
        </p>
      </header>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--text-base)",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "65ch",
        }}
      >
        {description}
      </p>


      {/* Details */}
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--text-muted)",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "65ch",
          borderLeft: "2px solid var(--accent-glow)",
          paddingLeft: "var(--space-md)",
        }}
      >
        {details}
      </p>

      {/* Technologies */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-xs)" }}>
        {technologies.map((tech) => (
          <span className="pill" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap", marginTop: "auto" }}>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Source Code
          </a>
        )}
        {status === "coming-soon" && (
          <span
            className="btn-outline"
            style={{ cursor: "default", opacity: 0.6 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            In Progress
          </span>
        )}
      </div>
    </article>
  );
}
