import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Acasă", href: "#acasa" },
    { name: "Proiecte", href: "#proiecte" },
    { name: "Categorii", href: "#categorii" },
    { name: "Calendar", href: "#calendar" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Ghid Înscriere", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Regulament", href: "#" },
    { name: "Resurse Studenți", href: "#" },
  ];

  const faculties = [
    { name: "Automatică și Calculatoare", href: "#" },
    { name: "Electronică și Telecomunicații", href: "#" },
    { name: "Construcții", href: "#" },
    { name: "Inginerie Electrică", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">UTCN Proiecte</p>
                <p className="text-sm text-primary-foreground/60">Studențești</p>
              </div>
            </a>
            <p className="text-sm text-primary-foreground/70 mb-6">
              Platforma oficială pentru proiectele studențești din cadrul Universității Tehnice din Cluj-Napoca.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Faculties */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Facultăți</h4>
            <ul className="space-y-3">
              {faculties.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Str. Memorandumului 28, Cluj-Napoca 400114
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                <a href="tel:+40264401200" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +40 264 401 200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                <a href="mailto:proiecte@utcluj.ro" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  proiecte@utcluj.ro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © 2025 Universitatea Tehnică din Cluj-Napoca. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termeni și Condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
