import { useState, useEffect } from "react";
import { ShieldAlert, ExternalLink, Lock, CheckCircle2, Sparkles } from "lucide-react";
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
      {/* Background Watermark Pattern (Non-removable visual layer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden opacity-[0.025]"
      >
        <div className="flex flex-col gap-32 rotate-[-25deg] scale-125 translate-x-[-10%] translate-y-[-10%] whitespace-nowrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="flex gap-16 text-xl uppercase font-black tracking-[0.4em] text-cream">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j}>GUBLY.XYZ · DESIGN PROTOTYPE · COMMERCIAL USE FORBIDDEN</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Top Preview Banner */}
      <aside
        aria-label="Urheberrecht & Lizenzhinweis"
        className="relative z-40 w-full border-b border-ember/30 bg-soot/95 px-3 py-2 text-center text-xs backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-2">
          <div className="flex items-center gap-2 text-left">
            <Lock className="h-3.5 w-3.5 text-ember shrink-0" />
            <span className="font-medium text-cream/90">
              <span className="text-ember font-bold">Design Prototype</span> · All ideas, structure & design by{" "}
              <a
                href="https://gubly.xyz/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-ember underline hover:text-ember/80 transition-colors"
              >
                Gubly (gubly.xyz)
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[11px] text-muted-foreground">
              Commercial usage forbidden until purchased
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1 rounded-full border border-ember/50 bg-ember/15 px-3 py-1 text-[11px] font-semibold text-ember hover:bg-ember/25 transition-colors cursor-pointer"
            >
              <ShieldAlert className="h-3 w-3" />
              Lizenz & Schutz
            </button>
          </div>
        </div>
      </aside>

      {/* Floating Persistent Gubly Badge (Visible everywhere on page) */}
      <div className="fixed bottom-20 right-4 z-40 sm:bottom-24 sm:right-6 select-none pointer-events-auto">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-ember/60 bg-soot/95 px-3.5 py-2 text-xs font-semibold text-cream shadow-2xl backdrop-blur-md hover:border-ember hover:scale-105 transition-all cursor-pointer"
        >
          <span className="flex h-2 w-2 rounded-full bg-ember animate-pulse" />
          <span className="text-cream/90 group-hover:text-ember transition-colors">
            Designed by <strong className="text-ember">gubly.xyz</strong>
          </span>
          <ExternalLink className="h-3 w-3 text-ember opacity-70 group-hover:opacity-100" />
        </button>
      </div>

      {/* Intellectual Property & Licensing Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[92vw] sm:max-w-lg bg-card border-border text-foreground p-6 rounded-xl max-h-[90vh] overflow-y-auto z-50">
          <DialogHeader className="text-left">
            <div className="flex items-center gap-2 text-ember mb-1">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Intellectual Property & Licensing</span>
            </div>
            <DialogTitle className="display text-2xl sm:text-3xl text-cream">
              Design & Concept © Gubly
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground pt-1">
              This website layout, interactive architecture, 3D experience, and all visual assets were created exclusively by{" "}
              <strong className="text-ember">Gubly</strong>.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2 text-sm text-cream/85">
            <div className="rounded-lg border border-ember/30 bg-destructive/10 p-4 space-y-2">
              <h4 className="font-semibold text-ember flex items-center gap-2 text-xs uppercase tracking-wider">
                <Lock className="h-4 w-4" /> Commercial Exploitation Strictly Forbidden
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Any copying, cloning, redistribution, public deployment, commercial hosting, or extraction of code and design patterns prior to an official commercial purchase from Gubly is strictly prohibited under intellectual property and copyright laws.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Protected Creative Assets:
              </h4>
              <ul className="space-y-2 text-xs text-cream/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                  <span>Interactive 3D schnitzel scene & responsive camera scripting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                  <span>Cinematic video transitions, color palette & typography hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                  <span>SSR server architecture, interactive mailto reservation system</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-ember/40 bg-ember/10 p-4 text-xs space-y-2.5">
              <div className="flex items-center gap-2 text-ember font-bold">
                <Sparkles className="h-4 w-4" />
                <span>Acquisition & Custom Design Inquiries</span>
              </div>
              <p className="text-muted-foreground">
                To purchase this complete website package, acquire a commercial license, or commission custom web applications, visit:
              </p>
              <a
                href="https://gubly.xyz/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ember underline hover:text-ember/80 text-sm pt-1"
              >
                https://gubly.xyz/ <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border flex justify-between items-center">
            <a
              href="https://gubly.xyz/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-ember transition-colors"
            >
              gubly.xyz ↗
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ember px-5 py-2 text-xs font-bold text-ember-foreground hover:bg-ember/90 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
