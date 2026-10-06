import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CounterStat({ value, label, suffix = "+" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>
        {count}{suffix}
      </p>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.4, marginTop: "0.4rem" }}>
        {label}
      </p>
    </div>
  );
}
