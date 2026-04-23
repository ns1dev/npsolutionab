import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container-tight">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="NP Solution AB" className="h-12 w-12 object-contain" />
              <span className="font-bold text-lg">NP Solution AB</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Specialister på ventilationsisolering och installation för kommersiella fastigheter och industrier i hela Sverige.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Navigering</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                { href: "#hem", label: "Hem" },
                { href: "#tjanster", label: "Tjänster" },
                { href: "#om-oss", label: "Om oss" },
                { href: "#projekt", label: "Projekt" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Företagsinfo</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>NP Solution AB</li>
              <li>Org.nr: 559441-2679</li>
              <li>Farsta, Stockholm</li>
              <li>info@npsolution.se</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-6 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 NP Solution AB. Alla rättigheter förbehållna.</span>
          <span>Org.nr 559441-2679</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;