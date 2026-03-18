import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <div className="noise-overlay" />
      <Header />
      
      <main 
        className="animate-in"
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingTop: "calc(var(--space-3xl) + 80px)",
          paddingBottom: "var(--space-4xl)",
          paddingInline: "var(--space-xl)",
        }}
      >
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <h1 
            style={{ 
              fontSize: "var(--text-3xl)", 
              fontWeight: 800, 
              color: "var(--text-primary)",
              marginBottom: "var(--space-sm)",
              letterSpacing: "-0.02em"
            }}
          >
            {title}
          </h1>
          <p 
            style={{ 
              fontSize: "var(--text-xs)", 
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600
            }}
          >
            Effective Date: {lastUpdated}
          </p>
        </div>

        <div className="legal-content">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
