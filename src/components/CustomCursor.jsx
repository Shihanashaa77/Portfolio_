import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const { dark } = useTheme();

  useEffect(() => {
    let ringX = 0, ringY = 0, dotX = 0, dotY = 0, raf;

    const onMove = (e) => { dotX = e.clientX; dotY = e.clientY; };

    const animate = () => {
      ringX += (dotX - ringX) * 0.1;
      ringY += (dotY - ringY) * 0.1;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotX - 4}px,${dotY - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX - 20}px,${ringY - 20}px)`;
      raf = requestAnimationFrame(animate);
    };

    const grow = () => { if (ringRef.current) { ringRef.current.style.width = "52px"; ringRef.current.style.height = "52px"; ringRef.current.style.opacity = "0.4"; } };
    const shrink = () => { if (ringRef.current) { ringRef.current.style.width = "40px"; ringRef.current.style.height = "40px"; ringRef.current.style.opacity = "1"; } };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", (e) => { if (e.target.closest("a,button")) grow(); else shrink(); });
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const c = dark ? "255,255,255" : "0,0,0";
  return (
    <>
      <div ref={dotRef} style={{ position: "fixed", top: 0, left: 0, width: 8, height: 8, borderRadius: "50%", background: `rgb(${c})`, pointerEvents: "none", zIndex: 99999, mixBlendMode: "difference", willChange: "transform" }} />
      <div ref={ringRef} style={{ position: "fixed", top: 0, left: 0, width: 40, height: 40, borderRadius: "50%", border: `1.5px solid rgba(${c},0.6)`, pointerEvents: "none", zIndex: 99998, willChange: "transform", transition: "width 0.25s, height 0.25s, opacity 0.25s" }} />
    </>
  );
}
