import { ArrowRight } from "lucide-react";
import bg from "@/assets/project-1.jpeg";

const stats = [
  { value: "10+", label: "Års erfarenhet" },
  { value: "100%", label: "Certifierat hantverk" },
  { value: "24/7", label: "Stockholm & Sverige" },
];

const Specialists = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex gap-6">
              <div className="w-[2px] bg-steel/70 self-stretch flex-shrink-0" />
              <div>
                <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                  Specialister på ventilationsisolering
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mt-4 leading-[1.05]">
                  Arkitektonisk precision i varje meter rör
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mt-6 max-w-xl">
                  Vi kombinerar teknisk kompetens med hantverksmässig noggrannhet. Resultatet är system som sänker era driftkostnader, levererar bättre luft och håller certifierad kvalitet i decennier.
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Diskutera ert projekt <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-4 lg:mt-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-xl p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{s.value}</div>
                <div className="text-[11px] md:text-xs text-primary-foreground/70 uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;