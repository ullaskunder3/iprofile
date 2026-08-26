"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  PenLine,
  PanelLeft,
  X,
  Sparkles,
  Zap,
  Pin,
  Calendar,
  MousePointer,
} from "lucide-react";
import siteData from "../data/site.json";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const homeSections = [
  { label: "Hero", id: "hero", icon: Sparkles },
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "Journal", id: "journal", icon: PenLine },
];

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "MyProPad", href: "/mypropad", icon: MousePointer },
  { label: "Kanade", href: "/kanade", icon: Sparkles },
  { label: "Pin-Tube", href: "/pin-tube", icon: Pin },
  { label: "PhysDaily", href: "/phys-daily", icon: Zap },
];

const socialItems = [
  { label: "GitHub", href: siteData.githubUrl, icon: GithubIcon },
  { label: "Book a Call", href: "https://cal.com/ullaskunder", icon: Calendar },
];

const SIDEBAR_COLLAPSED_WIDTH = 64;
const SIDEBAR_EXPANDED_WIDTH = 230;

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Scrollspy for home page sections
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = homeSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-10% 0px -40% 0px" }
    );

    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isHomePage]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileOpen(false);
  };

  const sidebarWidth = isExpanded
    ? SIDEBAR_EXPANDED_WIDTH
    : SIDEBAR_COLLAPSED_WIDTH;

  const SidebarLogo = ({ size = 26 }: { size?: number }) => (
    <Image
      src="/favicon.svg"
      alt="xforbes"
      width={size}
      height={size}
      className="rounded-lg shrink-0"
      priority
    />
  );

  const HomeSectionNav = ({ expanded }: { expanded: boolean }) => {
    if (!isHomePage) return null;

    return (
      <div className={expanded ? "pl-4 mt-0.5 mb-1" : "mt-0.5 mb-1"}>
        {homeSections.map((section) => {
          const Icon = section.icon;
          const isSectionActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              title={!expanded ? section.label : undefined}
              className={`w-full flex items-center gap-2.5 rounded-lg transition-all duration-200 text-left ${
                expanded ? "px-2.5 py-[6px]" : "px-0 py-[6px] justify-center"
              } ${
                isSectionActive
                  ? "text-black bg-black/10 font-semibold"
                  : "text-[#6b7280] hover:text-black hover:bg-black/5"
              }`}
            >
              <Icon
                size={13}
                strokeWidth={isSectionActive ? 2.2 : 1.6}
                className="shrink-0"
              />
              {expanded && (
                <span
                  className={`text-[0.7rem] whitespace-nowrap ${
                    isSectionActive ? "font-semibold text-black" : "font-medium"
                  }`}
                >
                  {section.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  // ── Mobile: FAB + Slide-over ──
  if (isMobile) {
    return (
      <>
        {!isMobileOpen && (
          <motion.button
            onClick={() => setIsMobileOpen(true)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileTap={{ scale: 0.94 }}
            className="fixed top-4 left-4 z-[180] flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 pointer-events-auto"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              WebkitBackdropFilter: "saturate(180%) blur(16px)",
              backdropFilter: "saturate(180%) blur(16px)",
            }}
            aria-label="Open menu"
          >
            <SidebarLogo size={20} />
            <PanelLeft size={16} className="text-[#374151]" />
            <span className="text-[0.78rem] font-semibold text-[#111111] tracking-tight pr-0.5 font-mono">
              Menu
            </span>
          </motion.button>
        )}

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-[201] bg-black/40 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 z-[202] w-[270px] bg-white/95 backdrop-blur-xl border-r border-black/10 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <div className="flex items-center gap-2.5">
                  <SidebarLogo size={24} />
                  <span className="text-sm font-semibold text-[#111111] font-mono">
                    xforbes.com
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} className="text-[#6b7280]" />
                </button>
              </div>

              <nav className="flex-1 px-3 py-2 overflow-y-auto no-scrollbar">
                <ul className="space-y-0.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-3 py-[10px] rounded-xl text-sm font-medium transition-all duration-200 ${
                            active
                              ? "bg-black/10 text-black font-semibold"
                              : "text-[#374151] hover:bg-black/5 hover:text-[#111111]"
                          }`}
                        >
                          <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                          {item.label}
                        </Link>

                        {item.href === "/" && isHomePage && (
                          <HomeSectionNav expanded={true} />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mx-5 border-t border-black/10" />

              <div className="px-3 py-4">
                <span className="block px-3 mb-2 text-[0.6rem] uppercase tracking-[2px] font-bold text-[#9aa2af] select-none font-mono">
                  Connect
                </span>
                <ul className="space-y-0.5">
                  {socialItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-[10px] rounded-xl text-sm font-medium text-[#374151] hover:bg-black/5 hover:text-[#111111] transition-all duration-200"
                        >
                          <Icon size={18} />
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </>
    );
  }

  // ── Desktop: Collapsible Sidebar ──
  return (
    <motion.aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      animate={{ width: sidebarWidth }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="fixed left-0 top-0 bottom-0 z-[150] flex flex-col border-r border-black/10 select-none hidden md:flex"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      {/* Logo Area */}
      <div className="flex items-center h-[56px] px-[16px] shrink-0">
        <Link
          href="/"
          className="flex items-center gap-2.5 min-w-0"
          title="Home"
        >
          <SidebarLogo />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15 }}
                className="text-sm font-semibold text-[#111111] whitespace-nowrap truncate font-mono"
              >
                xforbes.com
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-[10px] py-2 overflow-y-auto overflow-x-hidden no-scrollbar">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={!isExpanded ? item.label : undefined}
                  className={`group relative flex items-center gap-3 rounded-xl transition-all duration-200 ${
                    isExpanded
                      ? "px-3 py-[10px]"
                      : "px-0 py-[10px] justify-center"
                  } ${
                    active
                      ? "bg-black/10 text-black font-semibold"
                      : "text-[#4b5563] hover:bg-black/5 hover:text-[#111111]"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={active ? 2.2 : 1.8}
                    className="shrink-0"
                  />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.12 }}
                        className="text-[0.82rem] font-medium whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active indicator bar */}
                  {active && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute -left-[10px] top-[9px] w-[3.5px] h-[20px] rounded-r-full bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>

                {item.href === "/" && isHomePage && (
                  <HomeSectionNav expanded={isExpanded} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section: Socials */}
      <div className="px-[10px] pb-3 pt-2 border-t border-black/10 space-y-0.5">
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="block px-3 mb-1 text-[0.55rem] uppercase tracking-[2px] font-bold text-[#9aa2af] select-none font-mono"
            >
              Connect
            </motion.span>
          )}
        </AnimatePresence>

        {socialItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={!isExpanded ? item.label : undefined}
              className={`flex items-center gap-3 rounded-xl text-[#4b5563] hover:bg-black/5 hover:text-[#111111] transition-all duration-200 ${
                isExpanded ? "px-3 py-[8px]" : "px-0 py-[8px] justify-center"
              }`}
            >
              <Icon size={16} />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.12 }}
                    className="text-[0.78rem] font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          );
        })}
      </div>
    </motion.aside>
  );
}
