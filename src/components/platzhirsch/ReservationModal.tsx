import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ReservationModalProps {
  trigger: React.ReactNode;
}

export function ReservationModal({ trigger }: ReservationModalProps) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const generateMailto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const guests = formData.get("guests") as string;
    const time = formData.get("time") as string;
    const requests = formData.get("requests") as string;
    const formattedDate = date ? format(date, "EEEE, dd. MMMM yyyy") : "Datum noch offen";

    const subject = `Reservierungsanfrage: ${name} (${guests} Personen - ${formattedDate})`;
    const body = `Hallo Team vom Neuen Platzhirsch,

ich möchte gerne einen Tisch bei Ihnen reservieren:

• Name: ${name}
• Datum: ${formattedDate}
• Uhrzeit: ${time || "Nach Absprache"}
• Anzahl Gäste: ${guests}
• Besondere Wünsche / Hinweise: ${requests || "Keine"}

Ich freue mich über Ihre Bestätigung.

Mit freundlichen Grüßen,
${name}`;

    const mailtoUrl = `mailto:info@der-neue-platzhirsch.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    toast.success("E-Mail-Programm wird geöffnet", {
      description: "Bitte überprüfen Sie die Angaben und senden Sie die E-Mail ab.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[92vw] sm:max-w-[440px] max-h-[90vh] overflow-y-auto bg-card border-border text-foreground p-5 sm:p-6 rounded-xl">
        <DialogHeader className="text-left">
          <DialogTitle className="display text-2xl sm:text-3xl text-ember">Tisch reservieren</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Senden Sie uns Ihre Reservierungsanfrage bequem per E-Mail oder rufen Sie uns direkt an.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={generateMailto} className="grid gap-4 py-2">
          <div className="grid gap-1.5">
            <Label htmlFor="res-name" className="text-xs uppercase tracking-wider text-muted-foreground">Name *</Label>
            <Input
              id="res-name"
              name="name"
              placeholder="Vor- und Nachname"
              required
              className="bg-background border-border h-10 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Datum *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background border-border h-10 text-sm",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-ember shrink-0" />
                    <span className="truncate">{date ? format(date, "dd.MM.yyyy") : "Datum wählen"}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="res-time" className="text-xs uppercase tracking-wider text-muted-foreground">Uhrzeit *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="res-time"
                  name="time"
                  type="time"
                  defaultValue="18:30"
                  required
                  className="pl-9 bg-background border-border h-10 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="res-guests" className="text-xs uppercase tracking-wider text-muted-foreground">Personenanzahl *</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="res-guests"
                name="guests"
                type="number"
                min="1"
                max="30"
                defaultValue="2"
                placeholder="Anzahl Gäste"
                required
                className="pl-9 bg-background border-border h-10 text-sm"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="res-requests" className="text-xs uppercase tracking-wider text-muted-foreground">Besondere Wünsche (optional)</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="res-requests"
                name="requests"
                placeholder="z.B. Draußen sitzen, Hochstuhl für Kind, Allergien..."
                className="pl-9 min-h-[75px] bg-background border-border text-sm resize-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-ember hover:bg-ember/90 text-ember-foreground font-bold text-sm h-11 transition-all mt-1 cursor-pointer shadow-lg"
          >
            Reservierung per E-Mail senden
          </Button>
        </form>

        <div className="mt-1 pt-3 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <a
            href="mailto:info@der-neue-platzhirsch.de?subject=Tischreservierung%20Platzhirsch"
            className="hover:text-ember transition-colors underline underline-offset-4"
          >
            Direkt leere Mail öffnen
          </a>
          <span className="hidden sm:inline text-border">•</span>
          <a
            href="tel:+491725866773"
            className="hover:text-ember transition-colors"
          >
            Telefon: 0172 5866773
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
