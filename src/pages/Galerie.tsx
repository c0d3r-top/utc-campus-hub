import { Images, Calendar, MapPin } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";

const Galerie = () => {
  const { t } = useLanguage();

  // Placeholder - replace with real photos from the event
  const photos: string[] = [];

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Images className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">{t("gallery.badge")}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-4 leading-tight">
                {t("gallery.title")}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm text-[#666] mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>16 martie 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Sala P09 (fosta BT)</span>
                </div>
              </div>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                {t("gallery.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {photos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((photo, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <img src={photo} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl">
                  <Images className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-lg font-medium text-[#666] mb-2">{t("gallery.noPhotos")}</p>
                  <p className="text-sm text-[#999]">{t("gallery.comingSoon")}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <ProjectFooter />
    </div>
  );
};

export default Galerie;
