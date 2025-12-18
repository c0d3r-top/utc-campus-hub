import { MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const UTCNHeader = () => {
  return (
    <header className="w-full">
      {/* Top Bar - Gray */}
      <div className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-xs">
            {/* Address */}
            <div className="flex items-center gap-1 text-[#666]">
              <MapPin className="w-3 h-3" />
              <span>Strada Memorandumului 28, Cluj-Napoca 400114</span>
            </div>
            
            {/* Right side */}
            <div className="flex items-center gap-0">
              {/* Language switcher */}
              <a href="#" className="px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">EN</a>
              <a href="#" className="px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">FR</a>
              <a href="#" className="px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">DE</a>
              <a href="#" className="px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">Intranet</a>
              <a href="#" className="px-3 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">Telefoane</a>
              
              {/* Social Icons */}
              <a href="#" className="px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-[#ddd]">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="px-2 py-1 text-[#666] hover:text-[#BE1E2D] border-l border-r border-[#ddd]">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White with logos */}
      <div className="bg-white py-3">
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
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-[#2b2b2b] tracking-tight">UNIVERSITATEA TEHNICĂ</p>
                  <p className="text-[9px] text-[#666] tracking-tight">DIN CLUJ-NAPOCA</p>
                </div>
              </div>

              {/* Separator */}
              <div className="w-px h-10 bg-[#ddd] mx-2"></div>

              {/* EUT+ Logo */}
              <div className="flex items-center gap-2">
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

            {/* Right side - badges and button */}
            <div className="flex items-center gap-4">
              {/* HR Badge */}
              <div className="text-[#F5A623] text-2xl font-bold">hr</div>
              
              {/* QS Stars */}
              <div className="text-xs text-[#666]">
                <span className="font-semibold">QS</span> STARS
              </div>

              {/* Admitere Button */}
              <a 
                href="#" 
                className="bg-[#BE1E2D] text-white px-6 py-3 text-sm font-medium hover:bg-[#a01825] transition-colors"
              >
                <div className="text-center">
                  <div className="font-semibold">Admitere Online</div>
                  <div className="text-xs opacity-80">Website</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default UTCNHeader;
