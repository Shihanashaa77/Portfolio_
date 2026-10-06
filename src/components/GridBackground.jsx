export default function GridBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(56,189,248,0.12) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />
      {/* Top fade */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to bottom, #020817, transparent)" }} />
      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, #020817, transparent)" }} />
    </div>
  );
}
