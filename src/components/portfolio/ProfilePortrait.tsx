import { profile } from "@/content/portfolio";

/** Shows the real photograph once profile.photoUrl is set; until then an on-brand monogram frame. */
export function ProfilePortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="bg-spot absolute -inset-10 blur-2xl" aria-hidden="true" />
      <div
        className="animate-spin-slow absolute -inset-4 rounded-full border border-dashed border-primary-ink/25"
        aria-hidden="true"
      />
      <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary bg-surface shadow-glow">
        {profile.photoUrl ? (
          <>
            <img
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
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

    </div>
  );
}

