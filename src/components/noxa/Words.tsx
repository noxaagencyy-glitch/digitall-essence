import { useEffect, useRef, type ReactNode } from "react";

interface WordsProps {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  highlight?: string[];
  as?: "p" | "span" | "h2" | "h3";
}

export function Words({
  text,
  className = "",
  delay = 0,
  step = 55,
  highlight = [],
  as: Tag = "p",
}: WordsProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".word-reveal"));
    items.forEach((w, i) => {
      w.style.transitionDelay = `${delay + i * step}ms`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((w) => w.classList.add("in-view"));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, step, text]);

  const words = text.split(/(\s+)/);
  const hl = new Set(highlight.map((h) => h.toLowerCase()));

  const content: ReactNode[] = words.map((w, i) => {
    if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
    const clean = w.replace(/[.,!?;:—()"]/g, "").toLowerCase();
    const isHighlight = hl.has(clean);
    return (
      <span
        key={i}
        className={`word-reveal ${isHighlight ? "word-reveal-highlight" : ""}`}
      >
        {w}
      </span>
    );
  });

  return (
    <Tag ref={ref as never} className={className}>
      {content}
    </Tag>
  );
}
