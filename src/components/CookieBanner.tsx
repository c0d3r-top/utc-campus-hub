import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setHasAccepted(true);
      return;
    }

    // Show banner initially
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      // Hide banner and mark as accepted when scrolled more than 50%
      if (scrollPercentage > 50) {
        setIsVisible(false);
        setHasAccepted(true);
        localStorage.setItem("cookiesAccepted", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    setHasAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
  };

  if (hasAccepted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2b2b2b] text-white py-4 px-4 z-50 shadow-lg border-t border-[#444]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="w-6 h-6 text-[#BE1E2D] flex-shrink-0" />
          <p className="text-sm text-center sm:text-left">
            {t("cookies.message")}{" "}
            <a href="/gdpr" className="text-[#BE1E2D] hover:underline">
              {t("cookies.learnMore")}
            </a>
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="bg-[#BE1E2D] hover:bg-[#a01825] text-white px-6 py-2 text-sm font-medium rounded-md transition-colors flex-shrink-0"
        >
          {t("cookies.accept")}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
