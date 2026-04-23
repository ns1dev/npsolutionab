import { Flame, Wrench, Building2, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Isolering av Ventilationskanaler",
    text: "Rätt teknisk isolering är ett absolut måste för att maximera energieffektivitet och säkerställa ett korrekt brandskydd. Vi är specialister på ventilationsisolering och ser till att era rör och kanaler håller exakt rätt temperatur. Ett välisolerat system sänker era driftkostnader och skapar en stabil inomhusmiljö.",
  },
  {
    icon: Wrench,
    title: "Installation av Ventilationssystem",
    text: "Vi hanterar stora och komplexa ventilationsinstallationer med total precision. Våra montörer installerar moderna aggregat och bygger rörsystem som lever upp till de allra strängaste branschkraven för kommersiella fastigheter och industrier.",
  },
  {
    icon: Building2,
    title: "Nyproduktion och Renovering",
    text: "När ni bygger nytt eller genomför en större renovering är vi er trygga partner för allt ventilationsarbete. Vi installerar kompletta lösningar som integreras smidigt i byggprocessen och garanterar en modern standard från första dagen.",
  },
  {
    icon: ShieldCheck,
    title: "Service och Underhåll av Ventilation",
    text: "Ett hälsosamt ventilationssystem kräver regelbunden tillsyn för att fungera optimalt. Vi utför noggrann ventilationsservice och reparationer som förlänger livslängden på er anläggning. Genom förebyggande underhåll minimerar vi dyra driftstopp och garanterar ren luft dygnet runt.",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-24 bg-surface">
      <div className="container-tight">
        <div className="max-w-2xl mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Våra tjänster</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-primary">
            Heltäckande lösningar för moderna ventilationssystem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/60 hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-lg gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                <s.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;