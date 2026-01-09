import { MapPin, Facebook, Instagram, Youtube, Linkedin, Menu, X, User } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { label: "Despre noi", href: "/" },
  { label: "Obiective", href: "/obiective" },
  { label: "Eligibilitate", href: "/eligibilitate" },
  { label: "Cum aplic?", href: "#aplicare" },
  { label: "Contact", href: "#contact" },
];

const UTCNHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar - Gray */}
      <div className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-xs">
            {/* Address */}
            <div className="flex items-center gap-1 text-[#666]">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">Strada Memorandumului 28, Cluj-Napoca 400114</span>
              <span className="sm:hidden">Cluj-Napoca</span>
            </div>
            
            {/* Right side */}
            <div className="flex items-center gap-0">
              {/* Language switcher */}
              <a href="#" target="_blank" className="px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">EN</a>
              <a href="#" target="_blank" className="hidden md:block px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">FR</a>
              <a href="#" target="_blank" className="hidden md:block px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">DE</a>
              <a href="#" target="_blank" className="hidden lg:block px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">Intranet</a>
              <a href="#" target="_blank" className="hidden lg:block px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">Telefoane</a>
              
              {/* Social Icons */}
              <a href="#" target="_blank" className="px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" target="_blank" className="hidden sm:block px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" target="_blank" className="hidden sm:block px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" target="_blank" className="hidden sm:block px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-r border-[#ddd]">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White with logos */}
      <div className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left - UTCN Logo + EUT+ */}
            <div className="flex items-center gap-4">
              {/* UTCN Logo */}
              <div className="flex items-center gap-2">
                {/* Shield */}
                <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
                  <path d="M2 2 L2 35 C2 45 12 52 22.5 52 C33 52 43 45 43 35 L43 2 L2 2 Z" fill="#BE1E2D"/>
                  <path d="M6 6 L6 34 C6 42 14 48 22.5 48 C31 48 39 42 39 34 L39 6 L6 6 Z" fill="#FFFFFF"/>
                  <rect x="9" y="6" width="5" height="40" fill="#BE1E2D"/>
                  <rect x="17" y="6" width="5" height="42" fill="#BE1E2D"/>
                  <rect x="25" y="6" width="5" height="42" fill="#BE1E2D"/>
                  <rect x="33" y="6" width="5" height="40" fill="#BE1E2D"/>
                  <rect x="10" y="16" width="25" height="6" fill="#FFFFFF"/>
                  <rect x="19" y="16" width="7" height="24" fill="#FFFFFF"/>
                </svg>
                <div className="leading-tight hidden sm:block">
                  <p className="text-[11px] font-semibold text-[#2b2b2b] tracking-tight">UNIVERSITATEA TEHNICĂ</p>
                  <p className="text-[9px] text-[#666] tracking-tight">DIN CLUJ-NAPOCA</p>
                </div>
              </div>

              {/* Separator */}
              <div className="w-px h-10 bg-[#ddd] mx-2 hidden lg:block"></div>

              {/* EUT+ Logo */}
              <div className="hidden lg:flex items-center gap-2">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                  <text x="0" y="28" fontFamily="Arial" fontWeight="300" fontSize="24" fill="#00A0D2">—e</text>
                  <text x="28" y="28" fontFamily="Arial" fontWeight="700" fontSize="24" fill="#00A0D2">UT</text>
                  <text x="60" y="28" fontFamily="Arial" fontWeight="700" fontSize="24" fill="#F5A623">+</text>
                </svg>
                <div className="leading-tight">
                  <p className="text-[8px] text-[#666] uppercase tracking-wider">European University</p>
                  <p className="text-[8px] text-[#666] uppercase tracking-wider">of Technology</p>
                </div>
              </div>
            </div>

            {/* Right side - Navigation Menu */}
            <div className="flex items-center gap-2">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-sm text-[#444] hover:text-[#BE1E2D] hover:bg-[#BE1E2D]/5 rounded-md transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Auth Button */}
              <a
                href="#autentificare"
                className="hidden md:flex items-center gap-2 bg-[#BE1E2D] text-white px-4 py-2 text-sm font-medium hover:bg-[#a01825] transition-colors rounded-md"
              >
                <User className="w-4 h-4" />
                <span>Autentificare</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#444] hover:text-[#BE1E2D] hover:bg-[#BE1E2D]/5 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e0e0e0] shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#444] hover:text-[#BE1E2D] hover:bg-[#BE1E2D]/5 rounded-md transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#autentificare"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 mt-2 bg-[#BE1E2D] text-white px-4 py-3 text-sm font-medium hover:bg-[#a01825] transition-colors rounded-md justify-center"
              >
                <User className="w-4 h-4" />
                <span>Autentificare</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default UTCNHeader;
