import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const PHONE = "076/556 25-90";
const PHONE_TEL = "+46765562590";

const links = [
  { href: "#hem", label: "Hem" },
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#projekt", label: "Projekt" },
  { href: "#kontakt", label: "Kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex items-center justify-between h-20">
        <a href="#hem" className="flex items-center gap-3">
          <img
            src={logo}
            alt="NP Solution AB logotyp"
            className="h-11 w-11 md:h-12 md:w-12 object-contain"
            loading="eager"
            decoding="async"
          />
          <span className={`font-bold text-base md:text-lg tracking-tight ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            NP Solution
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className={`text-sm font-medium flex items-center gap-2 transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}
          >
            <Phone size={16} /> {PHONE}
          </a>
          <Button asChild variant="accent" size="lg">
            <a href="#kontakt">Få offert</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-1.5 px-3 h-10 rounded-md bg-accent text-accent-foreground font-semibold text-sm shadow-card"
            aria-label="Ring NP Solution AB"
          >
            <Phone size={16} /> Ring oss
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            aria-label="Meny"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-card">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-foreground font-medium py-2 flex items-center gap-2"
            >
              <Phone size={16} className="text-accent" /> {PHONE}
            </a>
            <Button asChild variant="accent" size="lg" className="w-full">
              <a href="#kontakt" onClick={() => setOpen(false)}>Få offert</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;