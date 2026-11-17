/** Deterministic neural-network constellation; pure SVG + CSS so it costs almost nothing. */
const NODES = Array.from({ length: 34 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12345.6789;
  return { x: (a - Math.floor(a)) * 100, y: (b - Math.floor(b)) * 100, d: (i % 7) * 0.45 };
});

type Node = (typeof NODES)[number];
const EDGES: [Node, Node][] = [];
NODES.forEach((n, i) => {
  NODES.forEach((m, j) => {
    if (j <= i) return;
    if (Math.hypot(n.x - m.x, n.y - m.y) < 17) EDGES.push([n, m]);
  });
});

export function NeuralBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        {EDGES.map(([a, b], k) => (
          <line
            key={k}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            className="stroke-primary/15"
            strokeWidth={0.08}
          />
        ))}
      </svg>
      {NODES.map((n, i) => (
        <span
          key={i}
          className="animate-pulse-dot absolute h-1 w-1 rounded-full bg-primary"
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${n.d}s` }}
        />
      ))}
    </div>
  );
}
