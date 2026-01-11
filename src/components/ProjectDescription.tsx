import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectDescription = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2b2b2b] mb-8 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {t("projectDesc.title")}
          </h2>

          <div className="space-y-6 text-[#444] leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p>
              {t("projectDesc.p1").split("IMPACT+UTCN").map((part, i, arr) => 
                i < arr.length - 1 ? (
                  <span key={i}>{part}<strong className="text-[#BE1E2D]">IMPACT+UTCN</strong></span>
                ) : part
              )}
            </p>

            <p>{t("projectDesc.p2")}</p>

            <p>{t("projectDesc.p3")}</p>

            <div className="bg-[#f9f9f9] rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-[#2b2b2b] mb-4">{t("projectDesc.benefitsTitle")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>{t("projectDesc.benefit1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>{t("projectDesc.benefit2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>{t("projectDesc.benefit3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>{t("projectDesc.benefit4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
