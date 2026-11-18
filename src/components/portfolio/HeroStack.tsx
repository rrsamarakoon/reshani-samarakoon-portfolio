import { heroAI } from "@/content/portfolio";

/** Endless ticker of the AI tools Reshani works with; the list is doubled so the loop is seamless. */
export function HeroStack() {
  const items = [...heroAI.stack, ...heroAI.stack];
  return (
    <div className="relative border-y border-border bg-background/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 sm:px-8">
        <span className="eyebrow hidden shrink-0 sm:block">AI toolkit</span>
        <div className="mask-fade-x relative min-w-0 flex-1 overflow-hidden">
          <ul className="animate-marquee flex w-max">
            {items.map((s, i) => (
              <li
                key={i}
                aria-hidden={i >= heroAI.stack.length}
                className="flex items-center gap-8 pr-8 font-mono text-sm whitespace-nowrap text-foreground/75"
              >
                {s}
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
