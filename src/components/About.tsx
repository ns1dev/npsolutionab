import { CheckCircle2 } from "lucide-react";
import about from "@/assets/project-7.jpeg";

const points = [
  "Över ett decennium av branscherfarenhet",
  "Specialister på ventilationsisolering",
  "Hela Sverige – från Farsta till norr och söder",
  "Skräddarsydda lösningar för kommersiella fastigheter",
];

const About = () => {
  return (
    <section id="om-oss" className="py-24 bg-background">
      <div className="container-tight grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-xl gradient-accent opacity-30 blur-2xl" />
          <img
            src={about}
            alt="Färdigställt ventilationsprojekt med isolerade rör"
            className="relative rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
          />
        </div>

        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Om NP Solution AB</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-primary">
            Erfarna Ventilationsmontörer Ni Kan Lita På
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            NP Solution AB drivs av en passion för perfekt inomhusklimat och hög teknisk standard. Med vår bas i Farsta och med över ett decennium av branscherfarenhet levererar vi skräddarsydda och hållbara ventilationslösningar. Vårt fokus ligger på professionellt hantverk och nöjda kunder i hela Sverige.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;