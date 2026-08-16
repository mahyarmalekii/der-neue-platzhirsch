import schnitzel from "@/assets/schnitzel.png";
import { mapRange, useScrollProgress } from "@/hooks/use-scroll-progress";

const beats = [
  { label: "Panade", note: "Handgeklopft, dreifach paniert, in Butterschmalz gebraten." },
  { label: "Zitrone", note: "Frische Zitrone aus der Markthalle, immer daneben." },
  { label: "Beilage", note: "Bratkartoffeln, Kartoffelsalat oder Gurkensalat." },
  { label: "Am Tisch", note: "Draußen sitzen, Granseer Straße, Prenzlauer Berg." },
];

export function SchnitzelScene() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  const rotateY = progress * 900;
  const rotateX = Math.sin(progress * Math.PI * 2) * 16;
  const scale = mapRange(progress, 0, 0.55, 0.62, 1.08);
  const lift = mapRange(progress, 0, 1, 40, -40);
  const activeIndex = Math.min(beats.length - 1, Math.floor(progress * beats.length));
  const beat = beats[activeIndex]!;

  return (
    <section ref={ref} className="relative h-[400vh] bg-soot" aria-label="Das Schnitzel">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute h-[70vmin] w-[70vmin] rounded-full opacity-40 blur-3xl"
          style={{
            background: "var(--gradient-ember)",
            transform: `scale(${0.6 + progress * 0.7})`,
          }}
        />

        <h2 className="display pointer-events-none absolute inset-x-0 text-center text-[18vw] text-outline opacity-30">
          Schnitzel
        </h2>

        <div className="relative" style={{ perspective: "1200px" }}>
          <img
            src={schnitzel}
            alt="Wiener Schnitzel mit Zitrone und Petersilie"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-[58vmin] w-[58vmin] object-contain"
            style={{
              transform: `translateY(${lift}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
              filter: `drop-shadow(0 30px 50px oklch(0.05 0.01 55 / 0.8)) saturate(1.2) contrast(1.1)`,
              transformStyle: "preserve-3d",
            }}

          />
          <div
            className="mx-auto h-6 rounded-[50%] bg-soot/80 blur-xl"
            style={{ width: `${30 + progress * 14}vmin`, opacity: 0.5 + progress * 0.3 }}
          />
        </div>

        <div className="absolute bottom-20 sm:bottom-14 left-0 right-0 px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
            <span className="display text-3xl text-ember md:text-5xl">
              {beat.label}
            </span>
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              {beat.note}
            </p>
            <div className="mt-2 flex gap-2">
              {beats.map((b, i) => (
                <span
                  key={b.label}
                  className={`h-[3px] w-10 rounded-full ${
                    i === activeIndex ? "bg-ember" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
