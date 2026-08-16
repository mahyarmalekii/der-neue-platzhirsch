import { useState } from "react";

import spread from "@/assets/spread.jpg";
import veggie from "@/assets/veggie.jpg";
import schnitzel from "@/assets/schnitzel.png";
import { useReveal } from "@/hooks/use-reveal";

const dishes = [
  {
    name: "Wiener Schnitzel",
    detail: "Vom Kalb, Bratkartoffeln, Zitrone",
    price: "19,50",
    image: schnitzel,
  },
  {
    name: "Schweinshaxe",
    detail: "Kartoffelknödel, Rotkohl, Biersoße",
    price: "18,00",
    image: spread,
  },
  {
    name: "Pilzragout & Spätzle",
    detail: "Vegetarisch, Kräuter, Schnittlauch",
    price: "15,50",
    image: veggie,
  },
  {
    name: "Berliner Bulette",
    detail: "Senf, Gurkensalat, Bauernbrot",
    price: "12,00",
    image: spread,
  },
  {
    name: "Brezel & Pilsner",
    detail: "Frisch gelaugt, 0,5 l vom Fass",
    price: "8,50",
    image: spread,
  },
];

export function MenuSection() {
  const [active, setActive] = useState(0);
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="karte" className="relative bg-background px-6 py-28 md:px-16">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <h2 className="display text-[14vw] leading-none md:text-[8vw]">Die Karte</h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            Täglich wechselnde Tageskarte, immer mit vegetarischer Option. Hochstühle für die
            Kleinen stehen bereit.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <ul className="divide-y divide-border">
            {dishes.map((d, i) => (
              <li key={d.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline justify-between gap-6 py-6 text-left transition-transform duration-500"
                  style={{
                    transform: shown
                      ? "translateY(0)"
                      : "translateY(28px)",
                    opacity: shown ? 1 : 0,
                    transitionDelay: `${i * 90}ms`,
                  }}
                >
                  <span className="flex-1">
                    <span
                      className={`display block text-2xl transition-colors md:text-4xl ${
                        active === i ? "text-ember" : "text-cream"
                      }`}
                    >
                      {d.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{d.detail}</span>
                  </span>
                  <span className="display text-xl text-muted-foreground md:text-2xl">
                    {d.price}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-[3/4] overflow-hidden rounded-sm border border-border md:block">
            {dishes.map((d, i) => (
              <img
                key={d.name + i}
                src={d.image}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scale(1)" : "scale(1.08)",
                }}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soot/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
