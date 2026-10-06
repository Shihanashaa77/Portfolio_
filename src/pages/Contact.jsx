import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowRight, FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

const LINKS = [
  { icon: <FiMail size={18} />, label: "shihanavp89@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=shihanavp89@gmail.com" },
  { icon: <FiLinkedin size={18} />, label: "linkedin.com/in/shihana-v-p", href: "https://www.linkedin.com/in/shihana-v-p-417633372" },
  { icon: <FiGithub size={18} />, label: "github.com/Shihanashaa77", href: "https://github.com/Shihanashaa77" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Big heading */}
        <div style={{ marginBottom: "4rem" }}>
          <motion.p className="section-tag" {...fadeUp()} style={{ marginBottom: "1.2rem" }}>Contact</motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#e2e8f0" }}
            >
              LET'S BUILD
            </motion.h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, color: "rgba(56,189,248,0.5)" }}
            >
              SOMETHING GREAT.
            </motion.h2>
          </div>
          <motion.p {...fadeUp(0.2)} style={{ fontSize: "0.95rem", color: "rgba(148,163,184,0.6)", marginTop: "1.2rem", maxWidth: "480px" }}>
            Open to freelance projects, collaborations, and full-time opportunities. Let's connect.
          </motion.p>
        </div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Left: links */}
          <motion.div {...fadeUp(0.15)} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1.4rem 0",
                  borderBottom: "1px solid rgba(56,189,248,0.1)",
                  textDecoration: "none", color: "rgba(148,163,184,0.6)",
                  fontSize: "0.9rem", gap: "1rem",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#38bdf8"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.6)"; }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  {link.icon}
                  {link.label}
                </span>
                <FiArrowRight size={15} style={{ opacity: 0.4 }} />
              </motion.a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            {...fadeUp(0.25)}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              className="glass-input"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              className="glass-input"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="glass-input"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              style={{ resize: "none" }}
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending" || status === "sent"}
              style={{ alignSelf: "flex-start", gap: "0.5rem", opacity: status === "sent" ? 0.6 : 1 }}
            >
              <FiSend size={14} />
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Try Again"}
            </button>
            {status === "error" && (
              <p style={{ fontSize: "0.8rem", color: "rgba(255,100,100,0.8)" }}>
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
