import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { ReservationModal } from "./ReservationModal";

export function ReserveBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-label="Reservierungsleiste"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-4 transition-all duration-500 ease-out pointer-events-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-2 sm:gap-4 rounded-full border border-border/80 bg-soot/90 p-2 sm:px-4 sm:py-2.5 shadow-2xl backdrop-blur-lg pointer-events-auto">
        <div className="flex items-center gap-2 pl-2 sm:pl-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-cream uppercase">
              Tisch frei?
            </span>
            <span className="text-[10px] text-muted-foreground">
              <span className="hidden sm:inline">Täglich ab 12:00 · </span>
              <a href="https://gubly.xyz/" target="_blank" rel="noreferrer" className="text-ember hover:underline">
                gubly.xyz
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="mailto:info@der-neue-platzhirsch.de?subject=Reservierungsanfrage%20Platzhirsch"
            className="flex h-9 w-9 sm:w-auto sm:px-3.5 items-center justify-center gap-1.5 rounded-full border border-border bg-card/60 text-xs text-cream hover:text-ember hover:border-ember/50 transition-colors"
            title="E-Mail schreiben"
            aria-label="E-Mail schreiben"
          >
            <Mail className="h-4 w-4 text-ember shrink-0" />
            <span className="hidden md:inline font-medium">Mailto</span>
          </a>

          <a
            href="tel:+491725866773"
            className="hidden xs:flex h-9 w-9 sm:w-auto sm:px-3.5 items-center justify-center gap-1.5 rounded-full border border-border bg-card/60 text-xs text-cream hover:text-ember hover:border-ember/50 transition-colors"
            title="Anrufen"
            aria-label="Anrufen: 0172 5866773"
          >
            <Phone className="h-3.5 w-3.5 text-ember shrink-0" />
            <span className="hidden md:inline font-medium">Anrufen</span>
          </a>

          <ReservationModal
            trigger={
              <button
                type="button"
                className="flex h-9 sm:h-9 items-center justify-center rounded-full px-4 sm:px-5 text-xs sm:text-sm font-bold text-ember-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                style={{ background: "var(--gradient-ember)" }}
              >
                Reservieren
              </button>
            }
          />
        </div>
      </div>
    </aside>
  );
}

