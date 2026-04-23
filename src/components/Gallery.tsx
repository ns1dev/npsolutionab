import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/project-1.jpeg";
import p2 from "@/assets/project-2.jpeg";
import p3 from "@/assets/project-3.jpeg";
import p4 from "@/assets/project-4.jpeg";
import p5 from "@/assets/project-5.jpeg";
import p6 from "@/assets/project-6.jpeg";
import p8 from "@/assets/project-8.jpeg";

const images = [
  { src: p3, alt: "Ventilationsdragning i teknikrum", span: "row-span-2" },
  { src: p1, alt: "Isolerade ventilationsaggregat" },
  { src: p2, alt: "Stort isolerat ventilationsutrymme" },
  { src: p5, alt: "Isolerade rör på vind" },
  { src: p6, alt: "Komplex rörisolering på loft", span: "row-span-2" },
  { src: p4, alt: "VoltAir aggregat installation" },
  { src: p8, alt: "Isolerat ventilationssystem" },
];

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projekt" className="py-24 bg-surface">
      <div className="container-tight">
        <div className="max-w-2xl mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Projektgalleri</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-primary">Våra Senaste Projekt</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Ett urval av installationer och isoleringsarbeten från våra senaste uppdrag.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
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