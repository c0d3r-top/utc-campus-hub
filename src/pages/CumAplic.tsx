import { FileText, CheckCircle, ClipboardList, Upload, AlertCircle, ExternalLink } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import qrPreaplicatie from "@/assets/qr-preaplicatie.jpeg";

const CumAplic = () => {
  const { t } = useLanguage();

  const conditiiObligatorii = [t("howToApply.condition1"), t("howToApply.condition2"), t("howToApply.condition3"), t("howToApply.condition4")];
  const documenteInscriere = [t("howToApply.doc1"), t("howToApply.doc2"), t("howToApply.doc3"), t("howToApply.doc4"), t("howToApply.doc5"), t("howToApply.doc6"), t("howToApply.doc7"), t("howToApply.doc8")];
  const documenteOportunitatiReduse = [t("howToApply.reducedDoc1"), t("howToApply.reducedDoc2"), t("howToApply.reducedDoc3"), t("howToApply.reducedDoc4"), t("howToApply.reducedDoc5"), t("howToApply.reducedDoc6"), t("howToApply.reducedDoc7")];

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <ClipboardList className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">{t("howToApply.badge")}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-6 leading-tight">{t("howToApply.title")}</h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">{t("howToApply.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Pre-Application Form Section - at top for visibility */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b] mb-4">{t("howToApply.preApplicationTitle")}</h2>
                    <p className="text-[#666] mb-6">{t("howToApply.preApplicationDesc")}</p>
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfExample/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#BE1E2D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a01825] transition-colors shadow-md"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {t("howToApply.preApplicationButton")}
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                      <img 
                        src={qrPreaplicatie} 
                        alt="QR Code - Chestionar pre-aplicație" 
                        className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-lg"
                      />
                      <p className="text-center text-sm text-[#666] mt-2">{t("howToApply.scanQR")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center"><CheckCircle className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]">{t("howToApply.conditionsTitle")}</h2>
              </div>
              <p className="text-[#666] mb-8">{t("howToApply.conditionsIntro")}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {conditiiObligatorii.map((conditie, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#BE1E2D]/5 to-transparent rounded-xl p-5 border-l-4 border-[#BE1E2D]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#BE1E2D] rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-sm">{index + 1}</span></div>
                      <p className="text-[#444] leading-relaxed">{conditie}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#F5A623]/10 rounded-xl p-6 border border-[#F5A623]/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#F5A623] flex-shrink-0 mt-0.5" />
                  <p className="text-[#444] leading-relaxed">{t("howToApply.contractNote")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F5A623] rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]">{t("howToApply.documentsTitle")}</h2>
              </div>
              <p className="text-[#666] mb-8">{t("howToApply.documentsIntro")}</p>
              <div className="space-y-3">
                {documenteInscriere.map((document, index) => (
                  <div key={index} className="bg-[#f9f9f9] rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-[#BE1E2D] font-bold text-xs">{index + 1}</span></div>
                      <p className="text-[#444] text-sm leading-relaxed">{document}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center"><Upload className="w-6 h-6 text-white" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-[#2b2b2b]">{t("howToApply.reducedOpportunitiesTitle")}</h2>
              </div>
              <p className="text-[#666] mb-6 text-sm">{t("howToApply.reducedOpportunitiesIntro")}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {documenteOportunitatiReduse.map((document, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-1" />
                      <p className="text-[#444] text-sm leading-relaxed">{document}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-[#BE1E2D] to-[#a01825]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">{t("howToApply.ctaTitle")}</h2>
              <p className="text-white/80 mb-6">{t("howToApply.ctaDesc")}</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#BE1E2D] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">{t("howToApply.ctaButton")}</a>
            </div>
          </div>
        </section>
      </main>
      <ProjectFooter />
    </div>
  );
};

export default CumAplic;
