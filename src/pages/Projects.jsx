import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ProjectModal from "../components/ProjectModal";

const PROJECTS = [
  {
    title: "Grow AI",
    tagline: "AI-Powered Sustainable Farming Advisor",
    desc: "An intelligent platform that leverages machine learning and OpenAI API to provide personalised, sustainable farming recommendations based on soil data, weather, and crop history.",
    tech: ["Python", "Django", "MySQL", "Machine Learning", "OpenAI API"],
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(5,150,105,0.4) 100%)",
    emoji: "🌱",
    github: "https://github.com/Shihanashaa77",
    live: "#",
    overview: "Grow AI is an intelligent sustainable farming advisor that combines machine learning models with OpenAI's GPT to give farmers personalised crop and resource management advice.",
    features: [
      "AI-driven crop recommendations based on soil & weather",
      "OpenAI API chatbot for real-time farming queries",
      "Predictive yield analytics dashboard",
      "Sustainability scoring for farming practices",
    ],
    role: "Sole developer — designed architecture, built ML pipeline, integrated OpenAI API, and developed the full Django backend with MySQL database.",
  },
  {
    title: "Where Is My Bus",
    tagline: "Real-Time Bus Tracking & Ticket Booking",
    desc: "A real-time transit application allowing passengers to track live bus locations, check schedules, and book tickets seamlessly through a clean web interface.",
    tech: ["Python", "Flask", "MySQL", "JavaScript"],
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(67,56,202,0.4) 100%)",
    emoji: "🚌",
    github: "https://github.com/Shihanashaa77",
    live: "#",
    overview: "Where Is My Bus delivers real-time bus location updates and an integrated ticket booking system, helping commuters plan their journeys efficiently.",
    features: [
      "Real-time GPS bus location tracking",
      "Online seat reservation and ticket booking",
      "Route and schedule management",
      "Mobile-responsive UI",
    ],
    role: "Full-stack developer — built Flask REST API, MySQL schema, real-time location update system, and interactive JavaScript frontend.",
  },
  {
    title: "MERN Job Portal",
    tagline: "Full-Stack Job Portal",
    desc: "A comprehensive job portal connecting employers and job seekers with powerful search, filtering, and application tracking features built on the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(217,119,6,0.35) 100%)",
    emoji: "💼",
    github: "https://github.com/Shihanashaa77",
    live: "#",
    overview: "A production-ready job portal with separate dashboards for recruiters and candidates, enabling end-to-end job posting, discovery, and application management.",
    features: [
      "JWT-authenticated recruiter and candidate dashboards",
      "Advanced job search with filters (location, salary, type)",
      "Resume upload and application tracking",
      "Real-time application status updates",
    ],
    role: "Full-stack developer — architected the MongoDB schema, built Express API with JWT auth, and developed the React frontend with state management.",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3.5rem", color: "#e2e8f0" }}
        >
          Featured Engineering Projects
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(p)}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "0.9fr 1.1fr" : "1.1fr 0.9fr",
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid rgba(56,189,248,0.1)",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.1)")}
            >
              {/* Visual — alternates sides */}
              {i % 2 === 0 ? (
                <>
                  <ProjectVisual p={p} />
                  <ProjectInfo p={p} onOpen={() => setActive(p)} />
                </>
              ) : (
                <>
                  <ProjectInfo p={p} onOpen={() => setActive(p)} />
                  <ProjectVisual p={p} />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />

      <style>{`
        @media (max-width: 700px) {
          #projects .proj-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectVisual({ p }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      style={{
        background: p.gradient,
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: "260px", fontSize: "5rem",
      }}
    >
      {p.emoji}
    </motion.div>
  );
}

function ProjectInfo({ p, onOpen }) {
  return (
    <div
      style={{
        background: "rgba(56,189,248,0.03)",
        padding: "2.5rem",
        display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem",
      }}
    >
      <p className="section-tag">{p.tagline}</p>
      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", color: "#e2e8f0" }}>{p.title}</h3>
      <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(148,163,184,0.7)" }}>{p.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {p.tech.map((t) => (
          <span key={t} className="skill-pill" style={{ fontSize: "0.72rem", padding: "0.3rem 0.85rem" }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button className="btn-primary" onClick={(e) => { e.stopPropagation(); onOpen(); }} style={{ fontSize: "0.75rem" }}>
          View Details
        </button>
        {/* GitHub button — temporarily hidden, add link when ready
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          onClick={(e) => e.stopPropagation()}
          style={{ textDecoration: "none", fontSize: "0.75rem", gap: "0.4rem" }}
        >
          <FiGithub size={13} /> GitHub
        </a>
        */}
      </div>
    </div>
  );
}
