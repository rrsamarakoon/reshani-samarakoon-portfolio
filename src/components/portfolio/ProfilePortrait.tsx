import { Sparkles } from "lucide-react";
import { profile } from "@/content/portfolio";

/** Shows the real photograph once profile.photoUrl is set; until then an on-brand monogram frame. */
export function ProfilePortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="bg-spot absolute -inset-10 blur-2xl" aria-hidden="true" />
      <div
        className="animate-spin-slow absolute -inset-4 rounded-[2.5rem] border border-dashed border-primary-ink/25"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary-ink/40 bg-surface shadow-glow">
        {profile.photoUrl ? (
          <>
            <img
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/90 to-transparent" />
          </>
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="bg-grid absolute inset-0 opacity-70" />
            <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {[
                [40, 60, 100, 40], [100, 40, 160, 70], [40, 60, 60, 140], [160, 70, 150, 150],
                [60, 140, 100, 200], [150, 150, 100, 200], [100, 40, 100, 120], [60, 140, 100, 120],
                [150, 150, 100, 120],
              ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-primary-ink/25" strokeWidth={0.6} />
              ))}
              {[[40, 60], [100, 40], [160, 70], [60, 140], [150, 150], [100, 200], [100, 120]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={2.4} className="fill-primary-ink" />
              ))}
            </svg>
            <span className="text-gold relative font-display text-[7.5rem] leading-none font-bold">RS</span>
            <span className="eyebrow relative mt-4 text-muted-foreground">Reshani Samarakoon</span>
          </div>
        )}
      </div>

      <div className="animate-float absolute -left-4 bottom-10 flex items-center gap-2 rounded-full border border-primary-ink/50 bg-background/90 px-4 py-2 text-sm font-semibold shadow-glow-sm backdrop-blur sm:-left-8">
        <Sparkles className="h-4 w-4 text-primary-ink" />
        AI Enthusiast
      </div>
      <div
        className="animate-float absolute -right-3 top-8 h-14 w-14 rounded-full border-2 border-primary-ink/70"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />
      <div className="absolute -right-6 top-24 h-4 w-4 rounded-full bg-primary" aria-hidden="true" />
    </div>
  );
}
