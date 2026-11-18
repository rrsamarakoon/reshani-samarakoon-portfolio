import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

/** Chat-style card that "streams" an answer word by word, like an LLM response. Layout is reserved up front. */
export function AIPromptCard({ prompt, answer }: { prompt: string; answer: string }) {
  const reduce = useReducedMotion();
  const words = useMemo(() => answer.split(" "), [answer]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCount(words.length);
      return;
    }
    let i = 0;
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= words.length) window.clearInterval(interval);
      }, 55);
    }, 1400);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [reduce, words.length]);

  const done = count >= words.length;

  return (
    <div className="card-surface mt-6 overflow-hidden bg-background/80 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 font-mono text-[0.7rem] text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-primary-ink" />
        reshani.ai
        <span className="ml-auto flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${done ? "bg-success" : "animate-pulse bg-primary"}`} />
          {done ? "ready" : count === 0 ? "thinking" : "streaming"}
        </span>
      </div>
      <div className="p-4">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary-ink">&gt;</span> {prompt}
        </p>
        <p className="sr-only">{answer}</p>
        <div className="relative mt-3 text-[0.92rem] leading-relaxed" aria-hidden="true">
          <p className="invisible">{answer}</p>
          <p className="absolute inset-0 text-foreground/80">
            {count === 0 ? (
              <span className="inline-flex gap-1 pt-2">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-ink"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </span>
            ) : (
              <>
                {words.slice(0, count).join(" ")}
                {!done && <span className="animate-caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-primary-ink" />}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
