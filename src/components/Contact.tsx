import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  phone: z.string().trim().min(5, "Telefonnummer krävs").max(30),
  message: z.string().trim().min(5, "Meddelande för kort").max(1500),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Tack! Vi återkommer inom kort.");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Kontakt & Offert</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5 text-primary">
              Redo att optimera er ventilation?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Söker ni pålitlig hjälp med ventilationsisolering eller montering i Stockholm? Fyll i formuläret eller ring oss idag för rådgivning och en kostnadsfri offert.
            </p>

            <div className="space-y-5">
              {([
                { icon: Phone, label: "Telefon", value: "076/556 25-90", href: "tel:+46765562590" },
                { icon: Mail, label: "E-post", value: "npsolutionab@gmail.com", href: "mailto:npsolutionab@gmail.com" },
                { icon: MapPin, label: "Område", value: "Stockholm & hela Sverige", href: undefined },
              ] as const).map((item) => {
                const inner = (
                  <>
                    <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      <div className="text-foreground font-semibold">{item.value}</div>
                    </div>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border/60 hover:border-accent/40 transition-colors">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border/60">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/60"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Namn *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="company">Företag</Label>
                <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">E-post *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} required className="mt-2" />
              </div>
            </div>
            <div className="mt-5">
              <Label htmlFor="message">Meddelande *</Label>
              <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1500} required className="mt-2" />
            </div>
            <Button type="submit" variant="accent" size="xl" className="w-full mt-6" disabled={loading}>
              {loading ? "Skickar..." : <>Skicka förfrågan <Send className="ml-1" size={18} /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;