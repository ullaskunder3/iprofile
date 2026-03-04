import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import projects from "./data/projects.json";

export default function Home() {
  return (
    <>
      {/* Subtle noise overlay */}
      <div className="noise-overlay" />

      <Header />

      <main id="main-content">
        <Hero />

        {/* Projects Section */}
        <section
          id="projects"
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "var(--space-2xl) var(--space-xl) var(--space-3xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-xl)",
          }}
        >
          {/* Section header */}
          <div
            className="animate-in delay-200"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              What We&apos;re Building
            </span>
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Our Tools
            </h2>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--text-secondary)",
                margin: 0,
                maxWidth: "50ch",
              }}
            >
              Each project is crafted to solve a real problem — small, focused,
              and open source.
            </p>
          </div>

          {/* Project Cards */}
          <div
            style={{
              display: "grid",
              gap: "var(--space-xl)",
              gridTemplateColumns: "1fr",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                status={project.status as "live" | "coming-soon"}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
