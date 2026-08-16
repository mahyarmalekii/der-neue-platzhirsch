import { createFileRoute } from "@tanstack/react-router";

import terrace from "@/assets/terrace.jpg";
import spread from "@/assets/spread.jpg";
import { GublyProtection } from "@/components/platzhirsch/GublyProtection";
import { KitchenVideo } from "@/components/platzhirsch/KitchenVideo";
import { Marquee } from "@/components/platzhirsch/Marquee";
import { MenuSection } from "@/components/platzhirsch/MenuSection";
import { ReservationModal } from "@/components/platzhirsch/ReservationModal";
import { ReserveBar } from "@/components/platzhirsch/ReserveBar";
import { SchnitzelScene } from "@/components/platzhirsch/SchnitzelScene";
import { ScrollProgress } from "@/components/platzhirsch/ScrollProgress";
import { mapRange, useScrollProgress } from "@/hooks/use-scroll-progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Der Neue Platzhirsch — Schnitzel & Biergarten in Prenzlauer Berg" },
      {
        name: "description",
        content:
          "Der Neue Platzhirsch, Granseer Str. 6 in Berlin: handgeklopftes Schnitzel, deutsche Küche, vegetarische Gerichte und Draußensitzen. Tisch reservieren: 0172 5866773.",
      },
      {
        property: "og:title",
        content: "Der Neue Platzhirsch — Schnitzel & Biergarten in Berlin",
      },
      {
        property: "og:description",
        content:
          "Handgeklopftes Schnitzel, Haxe und Spätzle in der Granseer Str. 6, Prenzlauer Berg. Draußensitzen, vegetarische Optionen, Hochstühle.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <header ref={ref} className="relative h-[200vh] grain">
      <div className="sticky top-0 h-screen overflow-hidden bg-soot">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000"
          alt="Atmospheric dark restaurant interior with warm lighting"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(${mapRange(progress, 0, 1, 1, 1.2)}) translateY(${progress * -30}px)`,
            filter: `brightness(${mapRange(progress, 0, 1, 0.7, 0.3)}) contrast(1.1) saturate(0.9)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-soot/80 via-transparent to-soot" />
        
        {/* Decorative elements */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[1px] h-[30vh] bg-ember/30 hidden md:block" />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[1px] h-[30vh] bg-ember/30 hidden md:block" />

        <div className="relative flex h-full flex-col justify-between px-4 py-6 sm:px-8 sm:py-8 md:px-12">
          <nav className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] text-cream/70">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              <span className="truncate">Prenzlauer Berg</span>
            </span>
            <div className="flex items-center gap-3 sm:gap-6">
              <a href="#karte" className="transition-colors hover:text-ember py-1">Karte</a>
              <span className="opacity-30">/</span>
              <ReservationModal
                trigger={
                  <button type="button" className="transition-colors hover:text-ember cursor-pointer text-ember font-semibold py-1">
                    Reservieren
                  </button>
                }
              />
              <span className="opacity-30 hidden sm:inline">/</span>
              <a href="tel:+491725866773" className="transition-colors hover:text-ember hidden sm:inline py-1">Kontakt</a>
            </div>
          </nav>

          <div
            className="flex flex-col items-center text-center px-2"
            style={{
              transform: `translateY(${progress * -100}px)`,
              opacity: mapRange(progress, 0.5, 0.9, 1, 0),
            }}
          >
            <p className="mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.6em] text-ember drop-shadow-lg font-medium">
              Die Seele von Berlin
            </p>
            <h1 className="display relative text-[16vw] sm:text-[14vw] md:text-[12vw] leading-[0.8]">
              <span className="block text-ember drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Der Neue</span>
              <span className="block text-cream mix-blend-difference drop-shadow-2xl">Platzhirsch</span>
            </h1>

            <div className="mt-6 sm:mt-8 h-[2px] w-20 sm:w-24 bg-ember/60" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-14 sm:pb-8 md:pb-0">
            <div className="max-w-[280px]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ember mb-1 sm:mb-2">Granseer Str. 6</p>
              <p className="text-xs leading-relaxed text-cream/75 font-light italic">
                Wo Tradition auf Zeitgeist trifft. Handgeklopfte Schnitzel & kühles Bier in einer Atmosphäre, die Geschichten erzählt.
              </p>
            </div>
            <div className="flex items-center sm:flex-col sm:items-end gap-3 self-end sm:self-auto">
              <span className="text-[9px] uppercase tracking-[0.4em] text-cream/40 vertical-text hidden md:block mb-4">
                Scroll to explore
              </span>
              <div className="h-8 sm:h-12 w-[1px] bg-gradient-to-b from-ember to-transparent animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


function TableSection() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section ref={ref} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <img
          src={spread}
          alt="Gedeckter Tisch mit Haxe, Knödeln, Rotkohl, Brezel und Bier"
          width={1600}
          height={1104}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(${mapRange(progress, 0, 1, 1.25, 1)}) rotate(${(1 - progress) * 2}deg)`,
          }}
        />
        <div className="absolute inset-0 bg-soot/55" />
        <div className="relative w-full px-6 md:px-16">
          <div className="ml-auto max-w-lg">
            <h2
              className="display text-[11vw] leading-none md:text-[6vw]"
              style={{ transform: `translateX(${(1 - progress) * 80}px)` }}
            >
              Voller Tisch,
              <br />
              lange Abende
            </h2>
            <p className="mt-6 text-sm text-cream/80 md:text-base">
              Große Portionen für den ganzen Tisch. Rotkohl, Knödel, frisch gelaugte Brezeln und
              Bier vom Fass — serviert bis der Abend kippt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  const items = [
    { label: "Adresse", value: "Granseer Str. 6, 10435 Berlin" },
    { label: "Telefon", value: "0172 5866773", href: "tel:+491725866773" },
    { label: "E-Mail", value: "info@der-neue-platzhirsch.de", href: "mailto:info@der-neue-platzhirsch.de?subject=Reservierung" },
    { label: "Öffnungszeiten", value: "Täglich ab 12:00 Uhr" },
    {
      label: "Karte online",
      value: "der-neue-platzhirsch.eu-gb.mybluemix.net",
      href: "https://der-neue-platzhirsch.eu-gb.mybluemix.net",
    },
  ];

  return (
    <footer id="contact" className="border-t border-border bg-soot px-6 py-20 pb-36 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="display text-[12vw] leading-none md:text-[6vw]">Besuch uns</h2>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <ReservationModal 
                  trigger={
                    <button className="display group flex items-center gap-3 text-xl sm:text-2xl text-ember hover:text-ember/80 transition-colors cursor-pointer">
                      Jetzt reservieren
                      <div className="h-[2px] w-8 sm:w-12 bg-ember group-hover:w-16 sm:group-hover:w-20 transition-all" />
                    </button>
                  }
                />
                <a
                  href="mailto:info@der-neue-platzhirsch.de?subject=Tischreservierung"
                  className="rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-xs uppercase tracking-wider text-ember hover:bg-ember/20 transition-colors"
                >
                  Mailto Direkt
                </a>
              </div>

              <div className="flex w-full flex-wrap gap-2">
                {["Draußensitzen", "Vegetarische Optionen", "Hochstühle", "Hundefreundlich"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <dl className="divide-y divide-border">
            {items.map((i) => (
              <div key={i.label} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-4 sm:py-5">
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {i.label}
                </dt>
                <dd className="text-left sm:text-right text-sm text-cream font-medium">
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="hover:text-ember transition-colors break-all sm:break-normal"
                    >
                      {i.value}
                    </a>
                  ) : (
                    i.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-14 rounded-xl border border-ember/30 bg-card/80 p-5 sm:p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-ember" />
                <span className="text-xs uppercase tracking-widest font-bold text-ember">
                  Design & Concept Prototype © Gubly
                </span>
              </div>
              <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
                All visual ideas, layouts, typography, animations, and code structure of this website are the intellectual property of <strong>Gubly</strong>. Any commercial use, reproduction, distribution, or unauthorized copying is strictly forbidden prior to purchasing a valid commercial license.
              </p>
            </div>
            <a
              href="https://gubly.xyz/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-ember bg-ember/15 px-4 py-2 text-xs font-semibold text-ember hover:bg-ember hover:text-ember-foreground transition-all"
            >
              Visit Gubly.xyz ↗
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <p>Der Neue Platzhirsch · Berlin</p>
          <p className="text-[10px] tracking-widest text-muted-foreground/60">
            Protected Prototype · <a href="https://gubly.xyz/" target="_blank" rel="noreferrer" className="underline hover:text-ember">gubly.xyz</a>
          </p>
        </div>
      </div>
    </footer>
  );
}


function Index() {
  return (
    <main className="bg-background">
      <GublyProtection />
      <ScrollProgress />
      <Hero />
      <Marquee />
      <SchnitzelScene />
      <KitchenVideo />
      <TableSection />
      <MenuSection />
      <InfoSection />
      <ReserveBar />
    </main>
  );
}
