import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import GridBackground from "./components/GridBackground";
import GlowParticles from "./components/GlowParticles";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  const { dark } = useTheme();
  return (
    <div className={dark ? "theme-dark" : "theme-light"} style={{ minHeight: "100vh", position: "relative" }}>
      {dark && <GridBackground />}
      {dark && <GlowParticles />}
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && <Portfolio />}
    </ThemeProvider>
  );
}
