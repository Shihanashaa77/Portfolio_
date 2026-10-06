import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: "1.1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.35s, backdrop-filter 0.35s",
          background: scrolled ? (dark ? "rgba(2,8,23,0.9)" : "rgba(245,245,240,0.9)") : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${dark ? "rgba(56,189,248,0.1)" : "rgba(0,0,0,0.08)"}` : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{ fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.01em", color: dark ? "#38bdf8" : "#000", background: "none", border: "none", cursor: "pointer" }}
        >
          Shihana.
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/Shihana_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: `1px solid ${dark ? "rgba(56,189,248,0.3)" : "rgba(0,0,0,0.25)"}`,
              borderRadius: "9999px",
              padding: "0.4rem 1.1rem",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
              color: dark ? "#38bdf8" : "#000",
              textDecoration: "none",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              if (dark) {
                e.currentTarget.style.background = "rgba(56,189,248,0.15)";
                e.currentTarget.style.color = "#38bdf8";
              } else {
                e.currentTarget.style.background = "#000";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = dark ? "#38bdf8" : "#000";
            }}
          >
            View CV
          </a>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle theme"
            style={{
              background: dark ? "rgba(56,189,248,0.08)" : "rgba(0,0,0,0.07)",
              border: `1px solid ${dark ? "rgba(56,189,248,0.2)" : "rgba(0,0,0,0.12)"}`,
              borderRadius: "50%",
              width: "34px", height: "34px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              color: dark ? "#38bdf8" : "#000",
              fontSize: "1rem",
              transition: "background 0.3s, border 0.3s",
            }}
          >
            <motion.span
              key={dark ? "moon" : "sun"}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "flex" }}
            >
              {dark ? <BsSun size={15} /> : <BsMoon size={15} />}
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ background: "none", border: "none", color: dark ? "#fff" : "#000", cursor: "pointer", fontSize: "1.4rem" }}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "64px", left: 0, right: 0,
              zIndex: 99,
              background: "rgba(2,8,23,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(56,189,248,0.1)",
              padding: "1.5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
            }}
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setOpen(false); }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(56,189,248,0.6)", fontSize: "0.85rem",
                  letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "left",
                }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="/Shihana_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", width: "fit-content",
                border: "1px solid rgba(56,189,248,0.3)", borderRadius: "9999px",
                padding: "0.5rem 1.4rem", fontSize: "0.75rem",
                letterSpacing: "0.06em", color: "#38bdf8", textDecoration: "none",
              }}
            >
              View CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
