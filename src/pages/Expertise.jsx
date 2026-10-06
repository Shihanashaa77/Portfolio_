import { motion } from "framer-motion";
import { FiBarChart2, FiCpu, FiCode, FiLayers } from "react-icons/fi";

const CARDS = [
  {
    icon: <FiBarChart2 size={26} />,
    title: "Data Science",
    desc: "Transforming raw data into actionable insights using statistical analysis, data visualisation, and predictive modelling.",
    color: "rgba(56,189,248,0.12)",
  },
  {
    icon: <FiCpu size={26} />,
    title: "Artificial Intelligence",
    desc: "Building intelligent systems and ML models — from supervised learning to OpenAI API integrations.",
    color: "rgba(56,189,248,0.12)",
  },
  {
    icon: <FiCode size={26} />,
    title: "Python Development",
    desc: "Clean, scalable Python code for automation, data pipelines, APIs, and backend services using Django & Flask.",
    color: "rgba(56,189,248,0.12)",
  },
  {
    icon: <FiLayers size={26} />,
    title: "Full-Stack Development",
    desc: "End-to-end web applications using the MERN stack and Python backends with responsive, polished frontends.",
    color: "rgba(56,189,248,0.12)",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          What I Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3.5rem", color: "#e2e8f0" }}
        >
          Areas of Expertise
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              style={{
                background: "rgba(56,189,248,0.03)",
                border: "1px solid rgba(56,189,248,0.1)",
                borderRadius: "1.25rem",
                padding: "2.2rem",
                cursor: "default",
                transition: "border-color 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.1)")}
            >
              {/* Glow blob */}
              <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: card.color, borderRadius: "50%", filter: "blur(40px)", opacity: 0.7, pointerEvents: "none" }} />

              {/* Icon */}
              <div style={{ marginBottom: "1.4rem", color: "#38bdf8" }}>{card.icon}</div>

              {/* Title */}
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#e2e8f0" }}>{card.title}</h3>

              {/* Desc */}
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(148,163,184,0.7)", flex: 1 }}>{card.desc}</p>

              {/* Arrow */}
              <motion.span
                whileHover={{ x: 4 }}
                style={{ display: "block", marginTop: "1.5rem", fontSize: "1rem", color: "rgba(56,189,248,0.4)", transition: "color 0.25s", cursor: "default" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(56,189,248,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(56,189,248,0.4)")}
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #expertise > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
