import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const CERTS = [
  {
    org: "be10x",
    title: "AI Tools Workshop",
    year: "August 2026",
    accent: "linear-gradient(90deg, rgba(56,189,248,0.8) 0%, rgba(56,189,248,0.8) 100%)",
    link: "/Certificate.pdf",
  },
  {
    org: "ICT Academy of Kerala",
    title: "Full Stack Development (MERN)",
    year: "Nov 2024",
    accent: "linear-gradient(90deg, rgba(56,189,248,0.8) 0%, rgba(56,189,248,0.8) 100%)",
    link: "/Full Stack Development MERN.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          Learning
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3.5rem", color: "#e2e8f0" }}
        >
          Certifications & Learning
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 360px))", gap: "1.25rem" }}>
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              style={{
                background: "rgba(56,189,248,0.03)",
                border: "1px solid rgba(56,189,248,0.1)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.1)")}
            >
              {/* Accent top line */}
              <div style={{ height: "3px", background: cert.accent }} />

              <div style={{ padding: "1.8rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(56,189,248,0.6)" }}>
                  {cert.org}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.3, color: "#e2e8f0" }}>
                  {cert.title}
                </h3>
                <span style={{ fontSize: "0.75rem", color: "rgba(148,163,184,0.5)" }}>{cert.year}</span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase",
                    color: "rgba(56,189,248,0.5)", textDecoration: "none",
                    marginTop: "auto", paddingTop: "0.75rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(56,189,248,0.5)")}
                >
                  View Certificate <FiExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #certifications > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1000px) and (min-width: 701px) {
          #certifications > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
