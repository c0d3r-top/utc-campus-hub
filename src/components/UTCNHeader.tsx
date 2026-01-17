import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSite from "@/assets/logo_site.png";
import eutLogo from "@/assets/eut_logo.png";

const UTCNHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t("header.aboutUs"), href: "/" },
    { label: t("header.howToApply"), href: "/cum-aplic" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar - Gray */}
      <div className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-xs">
            {/* Project Name */}
            <div className="flex items-center gap-1 text-[#666] font-semibold">
              <span>IMPACT+UTCN</span>
            </div>
            
            {/* Right side */}
            <div className="flex items-center gap-0">
              {/* Language switcher */}
              <button 
                onClick={() => setLanguage("ro")}
                className={`px-3 py-1 border-l border-[#ddd] transition-colors ${language === "ro" ? "text-[#BE1E2D] font-semibold" : "text-[#666] hover:text-[#BE1E2D]"}`}
              >
                RO
              </button>
              <button 
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 border-l border-[#ddd] transition-colors ${language === "en" ? "text-[#BE1E2D] font-semibold" : "text-[#666] hover:text-[#BE1E2D]"}`}
              >
                EN
              </button>
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
              <a href="/" className="flex items-center">
                <img 
                  src={logoSite} 
                  alt="Universitatea Tehnică din Cluj-Napoca" 
                  className="h-12 sm:h-14 w-auto"
                />
              </a>

              {/* Separator */}
              <div className="w-px h-10 bg-[#ddd] mx-2 hidden lg:block"></div>

              {/* EUT+ Logo */}
              <div className="hidden lg:block">
                <img 
                  src={eutLogo} 
                  alt="European University of Technology" 
                  className="h-12 w-auto"
                />
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
                <span>{t("header.login")}</span>
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
                <span>{t("header.login")}</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default UTCNHeader;
