import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SOCIALS = [
  { icon: <FiGithub size={18} />, href: "https://github.com/Shihanashaa77", label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/shihana-v-p-417633372", label: "LinkedIn" },
  { icon: <FiMail size={18} />, href: "https://mail.google.com/mail/?view=cm&to=shihanavp89@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(56,189,248,0.1)",
      background: "#020817",
      padding: "3.5rem 2.5rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.2rem",
    }}>
      <p style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#38bdf8" }}>
        Shihana.
      </p>

      <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(56,189,248,0.4)" }}>
        Data Science&nbsp;•&nbsp;AI&nbsp;•&nbsp;Python Development
      </p>

      <div style={{ display: "flex", gap: "1.2rem", marginTop: "0.5rem" }}>
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{
              color: "rgba(56,189,248,0.35)",
              textDecoration: "none",
              transition: "color 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(56,189,248,0.35)")}
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p style={{ fontSize: "0.72rem", color: "rgba(56,189,248,0.2)", marginTop: "0.4rem" }}>
        © 2026 Shihana. All rights reserved.
      </p>
    </footer>
  );
}
