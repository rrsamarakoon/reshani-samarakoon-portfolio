import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Types, holds, then deletes each word in turn. Starts fully typed so SSR and hydration match. */
export function useTypewriter(words: readonly string[], { type = 70, erase = 35, hold = 1800 } = {}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const word = words[index] ?? "";
    let delay = deleting ? erase : type;
    if (!deleting && text === word) delay = hold;

    const id = window.setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => window.clearTimeout(id);
  }, [text, deleting, index, words, reduce, type, erase, hold]);

  return text;
}
