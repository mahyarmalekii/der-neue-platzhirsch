import { useState, useEffect } from "react";
import { ShieldAlert, ExternalLink, Lock, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function GublyProtection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Console log protection notice for inspect tool viewers
    console.log(
      "%c⚠️ EXCLUSIVE DESIGN PROTOTYPE © GUBLY (https://gubly.xyz/) ⚠️\n\n" +
        "All visual concepts, UI structure, animations, and code architecture are proprietary.\n" +
        "Unauthorized commercial usage, cloning, scraping, or redistribution is strictly forbidden prior to commercial purchase.\n" +
        "Inquiries & Licensing: https://gubly.xyz/",
      "background: #1c140d; color: #f59e0b; font-size: 14px; font-weight: bold; padding: 12px 16px; border: 1px solid #f59e0b; border-radius: 6px;"
    );
  }, []);

  return (
    <>
      {/* Fixed Top Preview Banner */}
      <aside
        aria-label="Urheberrecht & Lizenzhinweis"
        className="relative z-40 w-full border-b border-ember/30 bg-soot/95 px-3 py-2 text-center text-xs backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-2">
          <div className="flex items-center gap-2 text-left">
            <Lock className="h-3.5 w-3.5 text-ember shrink-0" />
            <span className="font-medium text-cream/90">
              <span className="text-ember font-bold">Design Prototype</span> · All rights & structure reserved by{" "}
              <a
                href="https://gubly.xyz/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-ember underline hover:text-ember/80 transition-colors"
              >
                Gubly
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] text-muted-foreground">
              Commercial usage strictly forbidden until purchased
            </span>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-ember/50 bg-ember/15 px-3 py-1 text-[11px] font-semibold text-ember hover:bg-ember/25 transition-colors cursor-pointer"
                >
                  <ShieldAlert className="h-3 w-3" />
                  Lizenz & Schutz
                </button>
              </DialogTrigger>
              <DialogContent className="w-[92vw] sm:max-w-lg bg-card border-border text-foreground p-6 rounded-xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="text-left">
                  <div className="flex items-center gap-2 text-ember mb-1">
                    <ShieldAlert className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-widest font-bold">Intellectual Property Notice</span>
                  </div>
                  <DialogTitle className="display text-2xl sm:text-3xl text-cream">
                    Urheberrecht & Schutzrechte
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground pt-1">
                    Dieses Webdesign, alle Konzepte, visuellen Animationen und Code-Strukturen sind geistiges Eigentum von{" "}
                    <strong className="text-ember">Gubly</strong>.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 pt-2 text-sm text-cream/85">
                  <div className="rounded-lg border border-border bg-background/60 p-4 space-y-2.5">
                    <h4 className="font-semibold text-ember flex items-center gap-2 text-xs uppercase tracking-wider">
                      <Lock className="h-4 w-4" /> Kommerzielle Nutzung untersagt
                    </h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Jegliche gewerbliche Nutzung, Vervielfältigung, das Kopieren des Codes, die Extraktion des Designs
                      oder die Veröffentlichung auf Drittplattformen ohne vorherigen Kauf bzw. eine offizielle
                      Lizenzvereinbarung ist rechtlich strengstens untersagt.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Umfang der Schutzrechte:
                    </h4>
                    <ul className="space-y-2 text-xs text-cream/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                        <span>Visuelles Konzept, Typografie, Farbpalette & 3D-Präsentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                        <span>Responsive Architektur, Scroll-Effekte & interaktive Komponenten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                        <span>Quellcode, SSR-Setup und maßgeschneiderte Schnittstellen</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-ember/30 bg-ember/10 p-4 text-xs space-y-2">
                    <p className="font-semibold text-cream">Interesse am Erwerb oder individuellen Projekten?</p>
                    <p className="text-muted-foreground">
                      Besuchen Sie die offizielle Website für Lizenzerwerb, Kaufanfragen und Designprojekte:
                    </p>
                    <a
                      href="https://gubly.xyz/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-ember underline hover:text-ember/80 pt-1"
                    >
                      https://gubly.xyz/ <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-ember px-5 py-2 text-xs font-bold text-ember-foreground hover:bg-ember/90 transition-colors cursor-pointer"
                  >
                    Verstanden
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </aside>
    </>
  );
}
