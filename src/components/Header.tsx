import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

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
          <img src={logo} alt="NP Solution AB logotyp" className="h-12 w-12 object-contain" />
          <span className={`font-bold text-lg tracking-tight ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
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

        <div className="hidden md:block">
          <Button asChild variant="accent" size="lg">
            <a href="#kontakt">Få offert</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Meny"
        >
          {open ? <X /> : <Menu />}
        </button>
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