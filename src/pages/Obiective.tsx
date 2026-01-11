import { Target, CheckCircle, GraduationCap, Globe, Users, Lightbulb, Heart, Briefcase } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";

const Obiective = () => {
  const { t } = useLanguage();

  const competenteList = [
    { icon: Globe, text: t("objectives.competence1") },
    { icon: Lightbulb, text: t("objectives.competence2") },
    { icon: GraduationCap, text: t("objectives.competence3") },
    { icon: Users, text: t("objectives.competence4") },
    { icon: Lightbulb, text: t("objectives.competence5") },
    { icon: Heart, text: t("objectives.competence6") },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Target className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">{t("objectives.badge")}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2b2b2b] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {t("objectives.title").split("IMPACT+UTCN")[0]}<span className="text-[#BE1E2D]">IMPACT+UTCN</span>
              </h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">{t("objectives.subtitle")}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]">{t("objectives.generalTitle")}</h2>
              </div>
              <div className="bg-gradient-to-r from-[#BE1E2D]/5 to-[#F5A623]/5 rounded-xl p-8 border-l-4 border-[#BE1E2D]">
                <p className="text-lg text-[#444] leading-relaxed">{t("objectives.generalDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#F5A623] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]">{t("objectives.specificTitle")}</h2>
              </div>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#BE1E2D] font-bold text-sm">{i}</span>
                      </div>
                      <p className="text-[#444] leading-relaxed">{t(`objectives.specific${i}`)}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#BE1E2D] font-bold text-sm">4</span>
                    </div>
                    <p className="text-[#444] leading-relaxed">{t("objectives.specific4")}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 ml-12">
                    {competenteList.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-[#f9f9f9] rounded-lg p-4">
                        <item.icon className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#444]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {[5,6].map(i => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {i === 6 ? <Briefcase className="w-4 h-4 text-[#BE1E2D]" /> : <span className="text-[#BE1E2D] font-bold text-sm">{i}</span>}
                      </div>
                      <p className="text-[#444] leading-relaxed">{t(`objectives.specific${i}`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProjectFooter />
    </div>
  );
};

export default Obiective;
