import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";

const STORAGE_KEY = "bipAnnouncementSeen";

const AnnouncementBanner = () => {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setShowPopup(false);
  };

  return (
    <>
      {/* Sticky top strip - always visible above the logo */}
      <div className="w-full bg-[#BE1E2D] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="mx-auto max-w-6xl text-center text-sm sm:text-base lg:text-lg leading-snug">
            <p className="font-semibold">{t("announce.title")}</p>
            <p className="text-white/90">{t("announce.body")}</p>
          </div>
        </div>

      </div>

      {/* Pop-up */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-lg rounded-xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              aria-label={t("announce.close")}
              className="absolute right-3 top-3 rounded-md p-1.5 text-[#666] hover:bg-[#f0f0f0] hover:text-[#BE1E2D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="mb-3 text-center text-lg sm:text-xl font-bold text-[#222] leading-snug">
              {t("announce.title")}
            </h2>
            <p className="text-center text-[#444] leading-relaxed">{t("announce.body")}</p>

            <button
              onClick={closePopup}
              className="mt-6 w-full rounded-md bg-[#BE1E2D] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[#a01825]"
            >
              {t("announce.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementBanner;
