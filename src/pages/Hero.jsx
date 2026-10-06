import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import TypeWriter from "../components/TypeWriter";

const ROLES = ["Data Scientist", "AI Developer", "Python Engineer", "ML Enthusiast", "Full-Stack Dev"];

function MagneticBtn({ children, className, onClick, href, download }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });
  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  const Tag = href ? "a" : "button";
  return (
    <motion.div ref={ref} style={{ x, y, display: "inline-block" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <Tag href={href} download={download} onClick={onClick} className={`magnetic ${className}`} style={{ textDecoration: "none" }}>
        {children}
      </Tag>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{
      position: "relative", minHeight: "100vh", background: "#020817",
      overflow: "hidden", display: "flex", alignItems: "center",
    }}>
      {/* Animated background glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "rgba(56,189,248,0.07)", filter: "blur(120px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "5%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(56,189,248,0.05)", filter: "blur(100px)" }}
        />
      </div>

      {/* Main grid */}
      <div style={{
        position: "relative", zIndex: 3,
        width: "100%", maxWidth: "1200px",
        margin: "0 auto", padding: "6rem 2.5rem 4rem",
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr",
        alignItems: "center", gap: "4rem",
      }}>

        {/* ── LEFT ── */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem",
              background: "rgba(56,189,248,0.07)", border: "1px solid rgba(56,189,248,0.2)",
              borderRadius: "9999px", padding: "0.4rem 1rem",
            }}
          >
            <span className="pulse-dot" />
            <span style={{ fontFamily: "monospace", fontSize: "0.68rem", letterSpacing: "0.1em", color: "rgba(56,189,248,0.85)" }}>
              &lt;Available for Hire /&gt;
            </span>
          </motion.div>

          {/* Name */}
          <div style={{ overflow: "hidden", marginBottom: "0.3rem" }}>
            <motion.p
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "rgba(56,189,248,0.6)", letterSpacing: "0.15em", marginBottom: "0.4rem" }}
            >
              // shihana.v.p
            </motion.p>
          </div>

          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#e2e8f0", margin: 0 }}
            >
              SHIHANA
            </motion.h1>
          </div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ marginTop: "1rem", marginBottom: "1.5rem", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 600, color: "#38bdf8", fontFamily: "monospace", letterSpacing: "-0.02em" }}
          >
            <TypeWriter words={ROLES} speed={70} pause={1600} />
          </motion.div>

          {/* Code-style description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{
              background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.1)",
              borderRadius: "10px", padding: "1rem 1.2rem", maxWidth: "460px", marginBottom: "2rem",
            }}
          >
            <p style={{ fontFamily: "monospace", fontSize: "0.75rem", lineHeight: 1.8, color: "rgba(148,163,184,0.8)" }}>
              <span style={{ color: "rgba(56,189,248,0.5)" }}>const</span>{" "}
              <span style={{ color: "#7dd3fc" }}>profile</span>{" "}
              <span style={{ color: "rgba(56,189,248,0.5)" }}>=</span>{" "}{"{"}<br />
              &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>degree</span>:{" "}
              <span style={{ color: "rgba(134,239,172,0.8)" }}>"MCA Graduate"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>passion</span>:{" "}
              <span style={{ color: "rgba(134,239,172,0.8)" }}>"Data Science & AI"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>stack</span>:{" "}
              <span style={{ color: "rgba(134,239,172,0.8)" }}>"Python, ML, Django"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>status</span>:{" "}
              <span style={{ color: "#38bdf8" }}>"open_to_work"</span><br />
              {"}"}<span style={{ color: "rgba(56,189,248,0.4)" }}>;</span>
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <MagneticBtn className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work
            </MagneticBtn>
            <MagneticBtn className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </MagneticBtn>
            <MagneticBtn className="btn-secondary" href="/Shihana_Resume.pdf" download>
              ↓ Resume
            </MagneticBtn>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(56,189,248,0.1)" }}
          >
            {[["3+", "Projects"], ["15+", "Technologies"], ["2025", "MCA"]].map(([val, label]) => (
              <div key={label}>
                <p style={{ fontSize: "1.6rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#38bdf8", lineHeight: 1 }}>{val}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(148,163,184,0.5)", marginTop: "0.25rem" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Photo ── */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", width: "clamp(220px, 26vw, 340px)" }}
          >
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: -16, borderRadius: "20px",
                border: "1px dashed rgba(56,189,248,0.2)",
                pointerEvents: "none", zIndex: 0,
              }}
            />
            {/* Glow aura */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: -30, borderRadius: "22px",
                background: "radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, transparent 70%)",
                filter: "blur(15px)", pointerEvents: "none", zIndex: 0,
              }}
            />

            {/* IDE card */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(56,189,248,0.25), 0 40px 80px rgba(0,0,0,0.8)" }}
              transition={{ duration: 0.4 }}
              style={{
                position: "relative", zIndex: 2, borderRadius: "14px", overflow: "hidden",
                border: "1px solid rgba(56,189,248,0.25)",
                boxShadow: "0 0 40px rgba(56,189,248,0.12), 0 30px 60px rgba(0,0,0,0.7)",
              }}
            >
              {/* Title bar */}
              <div style={{ background: "rgba(5,12,30,0.98)", borderBottom: "1px solid rgba(56,189,248,0.15)", padding: "0.5rem 0.9rem", display: "flex", alignItems: "center", gap: "0.45rem" }}>
                {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.3 }} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.85, cursor: "pointer" }} />
                ))}
                <span style={{ marginLeft: "0.5rem", fontFamily: "monospace", fontSize: "0.56rem", letterSpacing: "0.1em", color: "rgba(56,189,248,0.55)" }}>
                  shihana.profile.tsx
                </span>
                <motion.span animate={{ opacity: [1,0,1] }} transition={{ duration: 1, repeat: Infinity }}
                  style={{ fontFamily: "monospace", fontSize: "0.58rem", color: "rgba(56,189,248,0.55)" }}>▌</motion.span>
              </div>

              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "3/4" }}>
                <img src="/shihana image.jpg" alt="Shihana"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                {/* Blue scanlines */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(56,189,248,0.015) 3px, rgba(56,189,248,0.015) 4px)" }} />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(56,189,248,0.02) 0%, transparent 35%, rgba(2,8,23,0.8) 100%)" }} />

                {/* Animated corner brackets */}
                {[
                  { style: { top: 8, left: 8 }, d: "M0 14 L0 0 L14 0" },
                  { style: { top: 8, right: 8 }, d: "M14 0 L0 0 M14 0 L14 14", transform: "scale(-1,1)" },
                  { style: { bottom: 8, left: 8 }, d: "M0 0 L0 14 L14 14" },
                  { style: { bottom: 8, right: 8 }, d: "M14 14 L14 0 M14 14 L0 14" },
                ].map((b, i) => (
                  <svg key={i} style={{ position: "absolute", ...b.style }} width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <motion.path d={b.d} stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                    />
                  </svg>
                ))}

                {/* Bottom info */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.85rem 1rem", zIndex: 3 }}>
                  <p style={{ fontFamily: "monospace", fontSize: "0.48rem", letterSpacing: "0.2em", color: "rgba(56,189,248,0.5)", marginBottom: "0.15rem" }}>// profile.tsx</p>
                  <p style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.02em", color: "#e2e8f0" }}>Shihana V P</p>
                  <p style={{ fontFamily: "monospace", fontSize: "0.54rem", color: "rgba(56,189,248,0.45)", marginTop: "0.1rem" }}>&lt;DataScience /&gt; &lt;AI /&gt;</p>
                </div>
              </div>

              {/* Status bar */}
              <div style={{ background: "rgba(5,12,30,0.98)", borderTop: "1px solid rgba(56,189,248,0.1)", padding: "0.38rem 0.9rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "monospace", fontSize: "0.5rem", color: "rgba(56,189,248,0.5)" }}>
                  <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>●</motion.span>
                  {" "}MCA Graduate
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "0.5rem", color: "rgba(56,189,248,0.3)" }}>Python · ML · AI</span>
              </div>
            </motion.div>

            {/* Floating tags */}
            <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{
                position: "absolute", top: "-4%", left: "50%", transform: "translateX(-50%)",
                background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)",
                borderRadius: "999px", padding: "0.28rem 0.8rem",
                fontFamily: "monospace", fontSize: "0.56rem", color: "#38bdf8",
                whiteSpace: "nowrap", boxShadow: "0 0 14px rgba(56,189,248,0.2)",
                animation: "badgeFloat 3.5s ease-in-out infinite",
              }}
            >
              &lt;Available for Hire /&gt;
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
              style={{
                position: "absolute", top: "28%", right: "-34%",
                background: "rgba(5,12,30,0.95)", border: "1px solid rgba(56,189,248,0.2)",
                boxShadow: "0 0 16px rgba(56,189,248,0.1)", borderRadius: "10px",
                padding: "0.6rem 0.85rem", minWidth: "88px",
                animation: "badgeFloat 4s ease-in-out infinite",
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: "0.48rem", color: "rgba(56,189,248,0.5)", letterSpacing: "0.1em", marginBottom: "0.18rem" }}>PROJECTS</p>
              <p style={{ fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.04em", color: "#38bdf8", lineHeight: 1 }}>3+</p>
              <p style={{ fontSize: "0.54rem", color: "rgba(148,163,184,0.4)", marginTop: "0.12rem" }}>Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              style={{
                position: "absolute", bottom: "24%", left: "-34%",
                background: "rgba(5,12,30,0.95)", border: "1px solid rgba(56,189,248,0.2)",
                boxShadow: "0 0 16px rgba(56,189,248,0.1)", borderRadius: "10px",
                padding: "0.6rem 0.85rem", minWidth: "88px",
                animation: "badgeFloat 4s ease-in-out infinite",
                animationDelay: "1.2s",
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: "0.48rem", color: "rgba(56,189,248,0.5)", letterSpacing: "0.1em", marginBottom: "0.18rem" }}>SKILLS</p>
              <p style={{ fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.04em", color: "#38bdf8", lineHeight: 1 }}>15+</p>
              <p style={{ fontSize: "0.54rem", color: "rgba(148,163,184,0.4)", marginTop: "0.12rem" }}>Technologies</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", cursor: "pointer" }}
      >
        <span style={{ fontFamily: "monospace", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(56,189,248,0.4)" }}>scroll_down()</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 28, background: "linear-gradient(to bottom, rgba(56,189,248,0.6), transparent)" }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #home > div:nth-child(3) { grid-template-columns: 1fr !important; padding-top: 5rem !important; }
          #home > div:nth-child(3) > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
