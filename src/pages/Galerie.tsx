import { Images, Calendar, MapPin } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";

interface EventGallery {
  id: string;
  title: string;
  date: string;
  location: string;
  photos: string[];
}

const Galerie = () => {
  const { t } = useLanguage();

  const eventGalleries: EventGallery[] = [
    {
      id: "ev4",
      title: t("gallery.ev4Title"),
      date: "4 iunie 2026",
      location: "Sala P09 (fosta BT)",
      photos: [
        "/ev4-foto-1.jpg",
        "/ev4-foto-2.jpg",
        "/ev4-foto-3.jpg",
        "/ev4-foto-4.jpg",
        "/ev4-foto-5.jpg",
        "/ev4-foto-6.jpg",
        "/ev4-foto-7.jpg",
        "/ev4-foto-8.jpg",
        "/ev4-foto-9.jpg",
      ],
    },
    {
      id: "ev3",
      title: t("gallery.ev3Title"),
      date: "21 mai 2026",
      location: "Sala P09 (fosta BT)",
      photos: [
        "/ev3-foto-1.jpg",
        "/ev3-foto-2.jpg",
        "/ev3-foto-3.jpg",
        "/ev3-foto-4.jpg",
        "/ev3-foto-5.jpg",
        "/ev3-foto-6.jpg",
        "/ev3-foto-7.jpg",
      ],
    },
    {
      id: "ev2",
      title: t("gallery.ev2Title"),
      date: "21 aprilie 2026",
      location: "Sala P09 (fosta BT)",
      photos: [
        "/ev2-foto-1.jpg",
        "/ev2-foto-2.jpg",
        "/ev2-foto-3.jpg",
        "/ev2-foto-4.jpg",
        "/ev2-foto-5.jpg",
        "/ev2-foto-6.jpg",
        "/ev2-foto-7.jpg",
        "/ev2-foto-8.jpg",
        "/ev2-foto-9.jpg",
      ],
    },
    {
      id: "ev1",
      title: t("gallery.ev1Title"),
      date: "16 martie 2026",
      location: "Sala P09 (fosta BT)",
      photos: [
        "/ev1-foto-1.jpg",
        "/ev1-foto-2.jpg",
        "/ev1-foto-3.jpg",
        "/ev1-foto-4.jpg",
        "/ev1-foto-5.jpg",
        "/ev1-foto-6.jpg",
        "/ev1-foto-7.jpg",
        "/ev1-foto-8.jpg",
        "/ev1-foto-9.jpg",
        "/ev1-foto-10.jpg",
      ],
    },
  ];

  const totalPhotos = eventGalleries.reduce((sum, ev) => sum + ev.photos.length, 0);

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
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                {t("gallery.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Galleries by event */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {totalPhotos > 0 ? (
                eventGalleries.map((event) => (
                  <article key={event.id} id={event.id} className="scroll-mt-24">
                    <div className="mb-6 pb-4 border-b border-gray-200">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b] mb-3">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#666]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#BE1E2D]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#BE1E2D]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {event.photos.map((photo, index) => (
                        <div
                          key={photo}
                          className="aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <img
                            src={photo}
                            alt={`${event.title} - foto ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))
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
