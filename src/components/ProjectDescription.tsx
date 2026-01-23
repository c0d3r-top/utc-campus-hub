import { CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import afisProiect from "@/assets/afis-proiect-impact.png";

const ProjectDescription = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2b2b2b] mb-8 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {t("projectDesc.title")}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Text content */}
            <div className="space-y-6 text-[#444] leading-relaxed text-center lg:text-left flex flex-col justify-center h-full" style={{ fontFamily: 'Roboto, sans-serif' }}>
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

            {/* Project Poster */}
            <div className="flex justify-center lg:sticky lg:top-8">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <img 
                  src={afisProiect} 
                  alt="Afiș IMPACT+UTCN - Incluziune, Mobilitate, Participare, Acces și Comunitate Erasmus+ pentru Tinerii din UTCN" 
                  className="w-full max-w-md rounded-lg"
                />
                <a 
                  href={afisProiect} 
                  download="Afis-IMPACT-UTCN.png"
                  className="block mt-4"
                >
                  <Button className="w-full bg-[#BE1E2D] hover:bg-[#a01825] text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Descarcă afișul (PNG)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
