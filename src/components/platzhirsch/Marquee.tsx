import { useScrollProgress } from "@/hooks/use-scroll-progress";

const words = [
  "Wiener Schnitzel",
  "Design by Gubly",
  "Haxe",
  "gubly.xyz",
  "Spätzle",
  "Protected Prototype",
  "Kartoffelsalat",
  "Pilsner",
  "Draußen sitzen",
  "© Gubly",
  "Vegetarisch",
];

/** Horizontal band that scrubs sideways as the page scrolls vertically. */
export function Marquee() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section ref={ref} className="relative h-[220vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Granseer Str. 6 · 10435 Berlin
          </p>
          <a
            href="https://gubly.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.25em] text-ember hover:underline"
          >
            Design & Architecture © Gubly (gubly.xyz)
          </a>
        </div>
        <div
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${-progress * 60}%)` }}
        >
          {[...words, ...words].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className={`display px-8 text-[13vw] ${
                w.includes("Gubly") || w.includes("gubly")
                  ? "text-ember drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  : i % 3 === 1
                  ? "text-ember"
                  : i % 3 === 2
                  ? "text-outline"
                  : "text-cream"
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
