import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-10 bg-primary/60" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
