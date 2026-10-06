import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)",
        transformOrigin: "left",
        margin: "0 2.5rem",
      }}
    />
  );
}
