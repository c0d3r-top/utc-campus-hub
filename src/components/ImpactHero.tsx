import { GraduationCap, Globe, Users } from "lucide-react";
import impactLogo from "@/assets/impact-utcn-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const ImpactHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Project Logo */}
          <img 
            src={impactLogo} 
            alt="IMPACT+UTCN Logo" 
            className="h-40 md:h-52 mx-auto mb-8"
          />

          {/* Project Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
            <Globe className="w-4 h-4 text-[#BE1E2D]" />
            <span className="text-sm font-medium text-[#BE1E2D]">{t("hero.badge")}</span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#666] mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {t("hero.subtitle")}
          </p>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-[#BE1E2D]" />
              </div>
              <h3 className="font-semibold text-[#2b2b2b] mb-2">{t("hero.financialSupport")}</h3>
              <p className="text-sm text-[#666]">{t("hero.financialSupportDesc")}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-[#2b2b2b] mb-2">{t("hero.socialInclusion")}</h3>
              <p className="text-sm text-[#666]">{t("hero.socialInclusionDesc")}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#BE1E2D]" />
              </div>
              <h3 className="font-semibold text-[#2b2b2b] mb-2">{t("hero.internationalization")}</h3>
              <p className="text-sm text-[#666]">{t("hero.internationalizationDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
