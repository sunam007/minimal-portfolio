export default function AnimatedGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Subtle geometric circles */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, transparent 70%, rgba(255,255,255,0.01) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-white/5 rounded-full translate-x-1/2 translate-y-1/2"
        style={{
          background: "radial-gradient(circle, transparent 70%, rgba(255,255,255,0.01) 100%)",
        }}
      />
    </div>
  );
}
