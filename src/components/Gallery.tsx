import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/project-1.jpeg";
import p2 from "@/assets/project-2.jpeg";
import p3 from "@/assets/project-3.jpeg";
import p4 from "@/assets/project-4.jpeg";
import p5 from "@/assets/project-5.jpeg";
import p6 from "@/assets/project-6.jpeg";
import p8 from "@/assets/project-8.jpeg";
import p9 from "@/assets/project-9.jpeg";
import p10 from "@/assets/project-10.jpeg";
import p12 from "@/assets/project-12.jpeg";

type Item = {
  src: string;
  alt: string;
  title: string;
  category: string;
  className: string;
};

// Bento grid: 6 columns × 4 rows on desktop, simplified on mobile.
// Layout sorted by visual impact: brightest/sharpest images on top.
const images: Item[] = [
  {
    src: p1,
    alt: "Stort fläktrum med isolerade ventilationsrör",
    title: "Centralt fläktrum",
    category: "Anläggning",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: p4,
    alt: "VoltAir aggregat installation",
    title: "VoltAir aggregat",
    category: "Installation",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: p9,
    alt: "Plåtkanaler i industriell anläggning",
    title: "Plåtkanaler",
    category: "Installation",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: p6,
    alt: "Komplex rörisolering på loft",
    title: "Rörisolering",
    category: "Isolering",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: p10,
    alt: "Isolerade aggregat med brandrör",
    title: "Brand- och isolering",
    category: "Isolering",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: p3,
    alt: "Ventilationsdragning i teknikrum",
    title: "Teknikrum",
    category: "Anläggning",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: p5,
    alt: "Isolerade ventilationsrör på vind",
    title: "Vindsdragning",
    category: "Isolering",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: p2,
    alt: "Stort isolerat ventilationsutrymme",
    title: "Isolerat utrymme",
    category: "Anläggning",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    src: p8,
    alt: "Isolerat ventilationssystem i kommersiell fastighet",
    title: "Kommersiell installation",
    category: "Installation",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    src: p12,
    alt: "Stora isolerade kanaler i industri",
    title: "Industrikanaler",
    category: "Anläggning",
    className: "md:col-span-2 md:row-span-1",
  },
];

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projekt" className="py-24 bg-surface">
      <div className="container-tight">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Projektgalleri</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-primary">Våra Senaste Projekt</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Ett urval av installationer och isoleringsarbeten från våra senaste uppdrag i Stockholm och övriga Sverige.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[160px] md:auto-rows-[180px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-accent mb-1">
                  {img.category}
                </span>
                <div className="text-primary-foreground font-semibold text-sm md:text-base">{img.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/10"
            onClick={() => setActive(null)}
            aria-label="Stäng"
          >
            <X size={32} />
          </button>
          <img src={active} alt="Förstorad projektbild" className="max-w-[95vw] max-h-[90vh] rounded-xl shadow-elegant" />
        </div>
      )}
    </section>
  );
};

export default Gallery;