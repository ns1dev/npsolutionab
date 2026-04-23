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
          <div className="flex items-stretch gap-5 mb-8">
            <div className="w-[3px] bg-gradient-to-b from-accent via-steel to-transparent rounded-full" />
            <div className="flex flex-col justify-center">
              <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase">
                NP Solution AB
              </span>
              <span className="text-primary-foreground/80 text-sm font-medium tracking-wide mt-1">
                Specialister på ventilationsisolering i Stockholm
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            Professionell Ventilationsisolering och Installation i Stockholm
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
            NP Solution AB levererar energieffektiva och driftsäkra ventilationssystem för kommersiella fastigheter och industrier. Med över tio års branscherfarenhet utför vi uppdrag i hela Stockholmsregionen och resten av Sverige.
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