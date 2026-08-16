import { useScrollProgress } from "@/hooks/use-scroll-progress";

const words = [
  "Wiener Schnitzel",
  "Haxe",
  "Spätzle",
  "Kartoffelsalat",
  "Pilsner",
  "Draußen sitzen",
  "Vegetarisch",
];

/** Horizontal band that scrubs sideways as the page scrolls vertically. */
export function Marquee() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section ref={ref} className="relative h-[220vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <p className="mb-10 px-6 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Granseer Str. 6 · 10435 Berlin
        </p>
        <div
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${-progress * 60}%)` }}
        >
          {[...words, ...words].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className={`display px-8 text-[13vw] ${
                i % 3 === 1 ? "text-ember" : i % 3 === 2 ? "text-outline" : "text-cream"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
        <div
          className="mt-10 h-px bg-ember"
          style={{ width: `${20 + progress * 80}%` }}
          aria-hidden
        />
      </div>
    </section>
  );
}
