import { Calendar, MapPin, Clock, Users, ChevronRight, Video, QrCode } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const EVENTS_PAGE_URL = "https://utc-campus-hub.lovable.app/evenimente";

const Evenimente = () => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Sample upcoming events - these can be replaced with real data
  const upcomingEvents = [
    {
      id: 1,
      titleKey: "events.event1Title",
      descKey: "events.event1Desc",
      date: "2026-01-28",
      time: "11:00",
      locationKey: "events.event1Location",
      type: "info",
      meetingLink: "https://teams.microsoft.com/meet/31560641977205?p=W5CkLN4VxGYSUXTuOo"
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-500";
      case "workshop":
        return "bg-[#F5A623]";
      case "deadline":
        return "bg-[#BE1E2D]";
      default:
        return "bg-gray-500";
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ro-RO", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Calendar className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">{t("events.badge")}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-6 leading-tight">
                {t("events.title")}
              </h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                {t("events.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid with Calendar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Events List */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]">
                      {t("events.upcomingTitle")}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          {/* Date Badge */}
                          <div className="flex-shrink-0 text-center">
                            <div className="w-16 h-16 bg-[#BE1E2D]/10 rounded-lg flex flex-col items-center justify-center">
                              <span className="text-2xl font-bold text-[#BE1E2D]">
                                {new Date(event.date).getDate()}
                              </span>
                              <span className="text-xs text-[#BE1E2D] uppercase">
                                {new Date(event.date).toLocaleDateString("ro-RO", { month: "short" })}
                              </span>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`w-2 h-2 rounded-full ${getEventTypeColor(event.type)}`}></span>
                              <span className="text-xs font-medium text-[#666] uppercase">
                                {t(`events.type.${event.type}`)}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2b2b2b] mb-2 group-hover:text-[#BE1E2D] transition-colors">
                              {t(event.titleKey)}
                            </h3>
                            <p className="text-sm text-[#666] mb-3">
                              {t(event.descKey)}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#888]">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{t(event.locationKey)}</span>
                              </div>
                            </div>
                            {event.meetingLink && (
                              <a
                                href={event.meetingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#5059C9] text-white text-sm font-medium rounded-lg hover:bg-[#4048b8] transition-colors"
                              >
                                <Video className="w-4 h-4" />
                                {t("events.joinMeeting")}
                              </a>
                            )}
                          </div>

                          {/* Arrow */}
                          <ChevronRight className="w-5 h-5 text-[#ccc] group-hover:text-[#BE1E2D] transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* No events message */}
                  {upcomingEvents.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-[#666]">{t("events.noEvents")}</p>
                    </div>
                  )}
                </div>

                {/* Calendar Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-[#2b2b2b] mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#BE1E2D]" />
                        {t("events.calendarTitle")}
                      </h3>
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border pointer-events-auto"
                      />
                    </div>

                    {/* Legend */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-4">
                      <h3 className="text-sm font-semibold text-[#2b2b2b] mb-3">
                        {t("events.legend")}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                          <span className="text-[#666]">{t("events.type.info")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="w-3 h-3 rounded-full bg-[#F5A623]"></span>
                          <span className="text-[#666]">{t("events.type.workshop")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="w-3 h-3 rounded-full bg-[#BE1E2D]"></span>
                          <span className="text-[#666]">{t("events.type.deadline")}</span>
                        </div>
                      </div>
                    </div>

                    {/* QR Code */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-4">
                      <h3 className="text-sm font-semibold text-[#2b2b2b] mb-3 flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-[#BE1E2D]" />
                        {t("events.qrTitle")}
                      </h3>
                      <div className="flex justify-center p-4 bg-white rounded-lg">
                        <QRCodeSVG 
                          value={EVENTS_PAGE_URL}
                          size={140}
                          level="M"
                          fgColor="#2b2b2b"
                          bgColor="#ffffff"
                        />
                      </div>
                      <p className="text-xs text-center text-[#888] mt-3">
                        {t("events.qrDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-[#BE1E2D] to-[#a01825]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("events.ctaTitle")}
              </h2>
              <p className="text-white/80 mb-6">
                {t("events.ctaDesc")}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#BE1E2D] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t("events.ctaButton")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <ProjectFooter />
    </div>
  );
};

export default Evenimente;
