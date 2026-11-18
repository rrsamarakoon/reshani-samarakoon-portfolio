import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number; r: number };
type Pulse = { a: Point; b: Point; t: number; speed: number };

const LINK = 140;
const MOUSE = 190;

/**
 * Live neural-network canvas: drifting nodes, links that form by proximity, gold signals travelling
 * along links, and a cursor that pulls connections towards it. Pauses offscreen; static for reduced motion.
 */
export function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const css = getComputedStyle(document.documentElement);
    const gold = css.getPropertyValue("--primary").trim() || "gold";
    const ink = css.getPropertyValue("--primary-ink").trim() || "goldenrod";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let pts: Point[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.max(24, Math.round((w * h) / 15000)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.3 + 0.9,
      }));
      pulses = [];
      if (reduce) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE && d > 0.1) {
            const f = (1 - d / MOUSE) * 0.5;
            p.x += (dx / d) * f;
            p.y += (dy / d) * f;
          }
        }
      }

      ctx.lineWidth = 0.7;
      ctx.strokeStyle = ink;
      for (const [i, a] of pts.entries()) {
        for (const b of pts.slice(i + 1)) {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d >= LINK) continue;
          ctx.globalAlpha = (1 - d / LINK) * 0.2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          if (!reduce && pulses.length < 9 && Math.random() < 0.0008) {
            pulses.push({ a, b, t: 0, speed: 0.006 + Math.random() * 0.01 });
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < MOUSE) {
          ctx.globalAlpha = (1 - md / MOUSE) * 0.55;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = gold;
      for (const p of pts) {
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowColor = gold;
      ctx.shadowBlur = 10;
      pulses = pulses.filter((s) => {
        s.t += s.speed;
        if (s.t >= 1 || Math.hypot(s.a.x - s.b.x, s.a.y - s.b.y) > LINK) return false;
        ctx.globalAlpha = Math.sin(s.t * Math.PI);
        ctx.beginPath();
        ctx.arc(s.a.x + (s.b.x - s.a.x) * s.t, s.a.y + (s.b.y - s.a.y) * s.t, 2.2, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    io.observe(canvas);
    resize();

    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="animate-float absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
      <div
        className="animate-float absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-primary-deep/10 blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
