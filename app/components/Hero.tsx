import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteData from "../data/site.json";
import projectsData from "../data/projects.json";

export default function Hero() {
  const journals = [
    {
      title: "Shipping PhysDaily: A Solo Engineer's Blueprint",
      description: "A technical deep dive into building a high-stakes physics challenge app using Flutter, Firebase, and AI.",
      url: "http://ullaskunder.com/blogs/shipping-physdaily-a-solo-engineer-s-blueprint-for-ai-powered-mobile-apps",
      imageUrl: "/img/phys-daily/image.png",
      date: "Apr 23, 2026"
    },
    {
      title: "Building Pin-Tube: How I Created a Chrome Extension to Pin YouTube Videos and Stop Doomscrolling",
      description: "A technical walkthrough of building a focus-oriented Chrome extension to pin YouTube videos and keep your feed clean.",
      url: "https://www.ullaskunder.com/blogs/building-pin-tube-how-i-created-a-chrome-extension-to-pin-youtube-videos-and-stop-doomscrolling",
      imageUrl: "/img/pin-tube/first.png",
      date: "Jun 1, 2026"
    }
  ];

  return (
    <div className="w-full bg-white text-black font-serif relative">
      <div className="texture-noise" />
      <div className="texture-lines" />

      {/* ═══ MINIMALIST MONOCHROME HERO ═══ */}
      <section id="hero" className="relative w-full min-h-[90vh] flex flex-col pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10">
        
        {/* Decorative Element: Thick rule with small bordered square */}
        <div className="w-full flex items-center gap-4 mb-16">
          <div className="h-1 w-full bg-black"></div>
          <div className="w-4 h-4 border-2 border-black flex-shrink-0"></div>
        </div>

        <div className="flex-1 flex flex-col justify-center">

          {/* ★ Featured Announcement */}
          <a
            href="/pin-tube"
            className="group inline-flex items-center gap-3 mb-10 self-start"
            style={{ textDecoration: "none" }}
          >
            <span className="flex items-center gap-2 bg-black text-white font-mono text-xs tracking-widest uppercase px-3 py-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Featured by Google
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-gray-500 border-b border-transparent group-hover:border-black transition-all duration-100">
              Pin-Tube · Chrome Web Store →
            </span>
          </a>

          {/* Oversized Typography */}
          <h1 className="font-display leading-[0.85] tracking-tighter uppercase mb-12 w-full">
            <div className="text-[clamp(2rem,6.5vw,5rem)] mb-2 md:mb-4">Simple software,</div>
            <div className="text-[clamp(2.5rem,11vw,9rem)]">Thoughtfully</div>
            <div className="text-[clamp(2.5rem,11vw,9rem)]">Crafted.</div>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr] gap-12 border-t-2 border-black pt-8">
            <div className="flex items-start">
              <span className="font-mono text-sm uppercase tracking-widest border border-black px-2 py-1">
                Portfolio 2026
              </span>
            </div>
            <div className="flex flex-col items-start gap-10">
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl font-serif text-pretty">
                {siteData.subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
                <Link href="#projects" className="btn-primary w-full sm:w-[240px] text-center justify-center">
                  Explore Projects
                </Link>
                <Link href="https://github.com/ullaskunder3" className="btn-outline w-full sm:w-[240px] text-center justify-center">
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INVERTED STATS SECTION ═══ */}
      <section className="w-full bg-black text-white py-16 px-6 md:px-12 relative overflow-hidden">
        {/* Inverted Vertical Line Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 1px, #fff 1px, #fff 2px)",
          backgroundSize: "4px 100%"
        }}></div>

        <div className="w-full z-10 relative grid grid-cols-1 md:grid-cols-3 border-t-4 border-white pt-10">
          <div className="flex flex-col gap-1 pr-8 md:pr-12 pb-8 md:pb-0">
            <span className="font-mono text-xs tracking-widest uppercase text-gray-400">Total Installs</span>
            <span className="font-display text-[clamp(4rem,6vw,5.5rem)] tracking-tighter leading-none mt-2">132</span>
            <span className="font-mono text-xs tracking-widest text-gray-600 mt-2">All-time · Chrome Web Store</span>
          </div>
          <div className="flex flex-col gap-1 px-8 md:px-12 border-t-2 md:border-t-0 md:border-l-2 border-white border-opacity-20 py-8 md:py-0">
            <span className="font-mono text-xs tracking-widest uppercase text-gray-400">Active Users</span>
            <span className="font-display text-[clamp(4rem,6vw,5.5rem)] tracking-tighter leading-none mt-2">29</span>
            <span className="font-mono text-xs tracking-widest text-gray-600 mt-2">Last 30 days · +383% MoM</span>
          </div>
          <div className="flex flex-col gap-1 pl-8 md:pl-12 border-t-2 md:border-t-0 md:border-l-2 border-white border-opacity-20 pt-8 md:pt-0">
            <span className="font-mono text-xs tracking-widest uppercase text-gray-400">New Installs</span>
            <span className="font-display text-[clamp(4rem,6vw,5.5rem)] tracking-tighter leading-none mt-2">44</span>
            <span className="font-mono text-xs tracking-widest text-gray-600 mt-2">Last 30 days · +29% vs prev</span>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS HIGHLIGHT ═══ */}
      <section id="projects" className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="w-full border-t-4 border-black mb-16 pt-4 flex justify-between items-end">
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase">Selected Works</h2>
          <span className="font-mono text-sm tracking-widest uppercase hidden md:block border-b-2 border-black pb-1">01 / 04</span>
        </div>

        <div className="flex flex-col gap-12">
          {projectsData.filter(p => ["mypropad", "kanade", "pin-tube", "phys-daily"].includes(p.id)).map((project, index) => (
            <Link 
              key={project.id}
              href={`/${project.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-stretch group cursor-pointer"
            >
              <div className="lg:col-span-8 border-2 border-black p-2 bg-white transition-colors duration-100 group-hover:bg-black overflow-hidden relative aspect-[4/3] md:aspect-video mb-4 lg:mb-0">
                <Image 
                  src={project.gallery && project.gallery.length > 0 ? project.gallery[0].src : "/img/placeholder.png"}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              
              <div className="lg:col-span-4 flex flex-col justify-between border-2 border-black p-8 transition-colors duration-100 group-hover:bg-black group-hover:text-white">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <span className="font-mono text-xs tracking-widest uppercase border border-current px-2 py-1 inline-block">
                      0{index + 1} // {project.technologies[0]}
                    </span>
                    {(project as any).stats && (
                      <span className="font-mono text-xs tracking-widest uppercase bg-black text-white px-2 py-1 inline-block border border-black group-hover:bg-white group-hover:text-black transition-colors duration-100">
                        {(project as any).stats}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl tracking-tighter uppercase mt-4 mb-6">{project.title}</h3>
                  <p className="font-serif text-lg leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-12 font-mono text-sm uppercase tracking-widest flex items-center justify-between border-t border-current pt-4">
                  <span>View Project</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-100">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ JOURNAL ═══ */}
      <section id="journal" className="w-full py-32 px-6 md:px-12 bg-white border-t-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="w-full border-b-2 border-black pb-4 mb-16 flex justify-between items-end">
            <h2 className="font-display text-5xl tracking-tighter uppercase">Journal</h2>
            <Link href="/blogs" className="font-mono text-sm tracking-widest uppercase hover:underline">All Entries →</Link>
          </div>

          <div className="grid grid-cols-1 gap-0">
            {journals.map((journal, i) => (
              <Link 
                key={i}
                href={journal.url}
                className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center py-12 border-b-2 border-black hover:bg-black hover:text-white transition-colors duration-100 px-4 md:px-8 -mx-4 md:-mx-8"
              >
                <div className="font-mono text-sm tracking-widest uppercase w-32 shrink-0">
                  {journal.date}
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl tracking-tighter leading-tight flex-1">
                  {journal.title}
                </h3>
                
                <div className="font-mono text-2xl group-hover:translate-x-4 transition-transform duration-100">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
