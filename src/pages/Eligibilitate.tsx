import { Shield, CheckCircle, Users, GraduationCap, Heart, Globe } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";

const Eligibilitate = () => {
  const { t } = useLanguage();

  const categoriiOportunitatiReduse = [
    { letter: "a", icon: GraduationCap, title: t("eligibility.categoryA"), description: t("eligibility.categoryADesc") },
    { letter: "b", icon: Users, title: t("eligibility.categoryB"), description: t("eligibility.categoryBDesc") },
    { letter: "c", icon: Heart, title: t("eligibility.categoryC"), description: t("eligibility.categoryCDesc") },
    { letter: "d", icon: Globe, title: t("eligibility.categoryD"), description: t("eligibility.categoryDDesc") },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Shield className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">{t("eligibility.badge")}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-6 leading-tight">{t("eligibility.title")}</h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">{t("eligibility.subtitle")}</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#BE1E2D]/5 rounded-xl p-6 border-l-4 border-[#BE1E2D]">
                <p className="text-[#444] leading-relaxed">{t("eligibility.intro")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#BE1E2D] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b] mb-2 text-lg">{t("eligibility.condition1Title")}</h3>
                    <p className="text-[#444] leading-relaxed">{t("eligibility.condition1Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b] mb-2 text-lg">{t("eligibility.condition2Title")}</h3>
                    <p className="text-[#444] leading-relaxed">{t("eligibility.condition2Desc")}</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-14">
                {categoriiOportunitatiReduse.map((categorie) => (
                  <div key={categorie.letter} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <categorie.icon className="w-4 h-4 text-[#BE1E2D]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center text-white text-xs font-bold">{categorie.letter}</span>
                          <h4 className="font-semibold text-[#2b2b2b] text-sm">{categorie.title}</h4>
                        </div>
                        <p className="text-sm text-[#666] leading-relaxed">{categorie.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-[#BE1E2D]/5 to-[#F5A623]/5 rounded-xl p-6 border border-[#BE1E2D]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#BE1E2D] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b] mb-2 text-lg">{t("eligibility.condition3Title")}</h3>
                    <p className="text-[#444] leading-relaxed">{t("eligibility.condition3Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#2b2b2b] mb-4">{t("eligibility.ctaTitle")}</h2>
              <p className="text-[#666] mb-6">{t("eligibility.ctaDesc")}</p>
              <a href="/cum-aplic" className="inline-flex items-center gap-2 bg-[#BE1E2D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a01825] transition-colors">
                <CheckCircle className="w-5 h-5" />
                {t("eligibility.ctaButton")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <ProjectFooter />
    </div>
  );
};

export default Eligibilitate;
