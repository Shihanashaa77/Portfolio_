import { motion } from "framer-motion";

const GROUPS = [
  {
    label: "Programming",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow", "OpenAI API"],
  },
  {
    label: "Web Development",
    skills: ["React", "Django", "Flask", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", "Netlify", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#020817", padding: "var(--spacing-section) 2.5rem" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3.5rem", color: "#e2e8f0" }}
        >
          Technical Skills
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.8rem" }}>
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
            >
              <p className="section-tag" style={{ marginBottom: "1rem", opacity: 0.4 }}>{group.label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.06 + si * 0.04, duration: 0.35 }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
