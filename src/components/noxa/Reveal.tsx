import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  direction?: Direction;
  className?: string;
  threshold?: number;
  stagger?: boolean;
  id?: string;
}

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.15,
  stagger = false,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: HTMLElement[] = stagger
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-item]"))
      : [el];

    if (stagger) {
      targets.forEach((t, i) => {
        t.classList.add("reveal", `reveal-${direction}`);
        t.style.transitionDelay = `${Math.min(i, 8) * 70 + delay}ms`;
      });
    } else {
      el.style.transitionDelay = `${delay}ms`;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [delay, direction, threshold, stagger]);

  const baseClass = stagger ? "" : `reveal reveal-${direction}`;

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`${baseClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
