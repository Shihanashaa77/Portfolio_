import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "SHIHANA".split("");
const LINES = [
  "import { DataScience } from 'skills';",
  "import { AI, MachineLearning } from 'expertise';",
  "const portfolio = new Shihana();",
  "portfolio.init();",
];

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lineIdx, setLineIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIdx((v) => Math.min(v + 1, LINES.length));
    }, 500);
    return () => clearInterval(lineTimer);
  }, []);

  useEffect(() => {
    const step = 2500 / 100;
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => setVisible(false), 400);
          setTimeout(() => onComplete(), 900);
          return 100;
        }
        return prev + 1;
      });
    }, step);
    return () => clearInterval(intervalRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#020817",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Grid bg */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(56,189,248,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px", opacity: 0.4,
          }} />

          {/* Center glow */}
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(56,189,248,0.06)", filter: "blur(100px)" }} />

          {/* Letters */}
          <div style={{ display: "flex", gap: "0.15em", marginBottom: "1.2rem", position: "relative", zIndex: 2 }}>
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "clamp(3rem, 10vw, 6.5rem)",
                  fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1,
                  color: "#e2e8f0",
                  textShadow: "0 0 40px rgba(56,189,248,0.4)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ fontFamily: "monospace", fontSize: "0.68rem", letterSpacing: "0.2em", color: "rgba(56,189,248,0.6)", marginBottom: "2rem", position: "relative", zIndex: 2 }}
          >
            MCA Graduate · Data Science · Python Developer
          </motion.p>

          {/* Code lines */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            style={{
              background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.12)",
              borderRadius: "10px", padding: "1rem 1.4rem", minWidth: "320px",
              fontFamily: "monospace", fontSize: "0.7rem", position: "relative", zIndex: 2,
              marginBottom: "2.5rem",
            }}
          >
            {LINES.slice(0, lineIdx).map((line, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: i < 2 ? "rgba(134,239,172,0.7)" : "#38bdf8", lineHeight: 1.8 }}
              >
                {line}
              </motion.p>
            ))}
            {lineIdx < LINES.length && (
              <span style={{ color: "rgba(56,189,248,0.5)", animation: "blink 1s step-end infinite" }}>▌</span>
            )}
          </motion.div>

          {/* Progress */}
          <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem", zIndex: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: "0.55rem", color: "rgba(56,189,248,0.4)", letterSpacing: "0.15em" }}>LOADING EXPERIENCE...</span>
              <span style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "rgba(56,189,248,0.6)" }}>{count}%</span>
            </div>
            <div style={{ height: "2px", background: "rgba(56,189,248,0.1)", borderRadius: "2px", overflow: "hidden" }}>
              <motion.div style={{ height: "100%", borderRadius: "2px", width: `${count}%`, background: "linear-gradient(to right, rgba(56,189,248,0.5), #38bdf8)", boxShadow: "0 0 8px rgba(56,189,248,0.8)", transition: "width 0.08s linear" }} />
            </div>
          </div>

          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
