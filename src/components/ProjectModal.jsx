import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <motion.div
          key="modal-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "1.5rem",
            maxWidth: "900px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: "1.2rem", right: "1.2rem", zIndex: 10,
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff", borderRadius: "50%", width: "36px", height: "36px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", fontSize: "1rem",
            }}
          >
            <FiX />
          </button>

          {/* Left: Visual */}
          <div style={{
            background: project.gradient,
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: "300px", padding: "2rem",
          }}>
            <span style={{ fontSize: "4rem" }}>{project.emoji}</span>
          </div>

          {/* Right: Details */}
          <div style={{ padding: "2.5rem 2.5rem 2.5rem 2rem", overflowY: "auto", maxHeight: "90vh" }}>
            <p className="section-tag" style={{ marginBottom: "0.6rem" }}>Project</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.2rem" }}>
              {project.title}
            </h2>

            <div style={{ marginBottom: "1.4rem" }}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.4, marginBottom: "0.5rem" }}>Overview</p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)" }}>{project.overview}</p>
            </div>

            <div style={{ marginBottom: "1.4rem" }}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.4, marginBottom: "0.5rem" }}>Key Features</p>
              <ul style={{ paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {project.features.map((f) => (
                  <li key={f} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{f}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "1.4rem" }}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.4, marginBottom: "0.5rem" }}>My Role</p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)" }}>{project.role}</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.8rem" }}>
              {project.tech.map((t) => (
                <span key={t} className="skill-pill" style={{ fontSize: "0.72rem", padding: "0.3rem 0.85rem" }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none", fontSize: "0.78rem", gap: "0.4rem" }}>
                <FiGithub size={14} /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: "none", fontSize: "0.78rem", gap: "0.4rem" }}>
                <FiExternalLink size={14} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
