import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpeg";

const Hero = () => {
  return (
    <section id="hem" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Industriellt fläktrum med ventilationsrör" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container-tight relative z-10 py-32 text-primary-foreground">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Specialister på ventilationsisolering
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            Professionell Ventilationsisolering och Installation i Hela Sverige
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
            NP Solution AB skapar energieffektiva och driftsäkra ventilationssystem. Våra erfarna montörer har över tio års kompetens och hjälper företag att optimera sitt inomhusklimat. Vi utgår från Farsta och utför uppdrag med högsta kvalitet över hela landet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="xl" variant="accent">
              <a href="#kontakt">
                Begär en kostnadsfri offert <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild size="xl" variant="outlineLight">
              <a href="#tjanster">Läs mer om våra tjänster</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;