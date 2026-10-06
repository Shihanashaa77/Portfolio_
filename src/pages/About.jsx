import { motion } from "framer-motion";

const CHIPS = ["MCA Graduate", "Data Science", "Python Developer", "AI Enthusiast"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section id="about" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p className="section-tag" {...fadeUp(0)} style={{ marginBottom: "3.5rem" }}>
          About Me
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Image */}
          <motion.div {...fadeUp(0.1)} style={{ position: "relative" }}>
            <motion.div
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                border: "1px solid rgba(56,189,248,0.15)",
                boxShadow: "0 0 40px rgba(56,189,248,0.08)",
              }}
            >
              <img
                src="/shihana2.jpg"
                alt="Shihana"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top center", display: "block" }}
              />
            </motion.div>
            {/* Glow */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "1.25rem",
              background: "radial-gradient(ellipse at 60% 40%, rgba(56,189,248,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          </motion.div>

          {/* Right: Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <motion.h2 {...fadeUp(0.15)} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, color: "#e2e8f0" }}>
              Hello, I'm Shihana.
            </motion.h2>

            <motion.p {...fadeUp(0.2)} style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(148,163,184,0.8)" }}>
              I'm an MCA graduate from Calicut University with a deep passion for Data Science, Artificial Intelligence, and Python development. I enjoy turning raw data into meaningful insights and building intelligent applications that solve real problems.
            </motion.p>

            <motion.p {...fadeUp(0.25)} style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(148,163,184,0.8)" }}>
              With hands-on experience in machine learning, full-stack web development, and AI integrations, I love working at the intersection of code and creativity — from intelligent farming advisors to real-time transit apps.
            </motion.p>

            {/* Chips */}
            <motion.div {...fadeUp(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.5rem" }}>
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="skill-pill"
                  style={{ cursor: "default" }}
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* Quick links */}
            <motion.div {...fadeUp(0.35)} style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
              <a
                href="/Shihana_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: "none", fontSize: "0.78rem" }}
              >
                Download Resume
              </a>
              <button
                className="btn-secondary"
                style={{ fontSize: "0.78rem" }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
