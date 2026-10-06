import { useTheme } from "../context/ThemeContext";

const orbs = [
  { size: 500, top: "5%",  left: "60%",  color: "rgba(99,102,241,0.07)",  blur: 120, delay: "0s" },
  { size: 400, top: "40%", left: "10%",  color: "rgba(16,185,129,0.06)",  blur: 100, delay: "2s" },
  { size: 350, top: "70%", left: "70%",  color: "rgba(245,158,11,0.06)",  blur: 90,  delay: "4s" },
  { size: 300, top: "20%", left: "30%",  color: "rgba(236,72,153,0.05)",  blur: 80,  delay: "1s" },
];

export default function FloatingOrbs() {
  const { dark } = useTheme();
  if (!dark) return null;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {orbs.map((o, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: o.top, left: o.left,
            width: o.size, height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: `blur(${o.blur}px)`,
            animation: `orbFloat 8s ease-in-out infinite`,
            animationDelay: o.delay,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translate(-50%,-50%) scale(1); }
          50% { transform: translate(-50%,-50%) scale(1.08) translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
