import { motion } from "framer-motion";

const TIMELINE = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "Calicut University",
    period: "2023 – 2025",
    note: "Specialisation in Data Science & AI",
  },
  {
    degree: "B.Sc Computer Science",
    university: "Calicut University",
    period: "2020 – 2023",
    note: "Core programming, algorithms, and systems",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3.5rem", color: "#e2e8f0" }}
        >
          Education
        </motion.h2>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="timeline-line"
            style={{ position: "absolute", left: 0, top: "8px", bottom: 0 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "-2.4rem", top: "6px",
                  width: "9px", height: "9px",
                  background: "#38bdf8", borderRadius: "50%",
                  boxShadow: "0 0 0 3px rgba(56,189,248,0.15)",
                }} />

                {/* Year tag */}
                <span style={{
                  display: "inline-block",
                  fontSize: "0.7rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "rgba(56,189,248,0.6)",
                  marginBottom: "0.6rem",
                }}>
                  {item.period}
                </span>

                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.3rem", color: "#e2e8f0" }}>
                  {item.degree}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(148,163,184,0.6)", marginBottom: "0.25rem" }}>{item.university}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(148,163,184,0.4)" }}>{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
