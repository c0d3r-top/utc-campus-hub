import { FileText, CheckCircle, ClipboardList, Upload, AlertCircle, ExternalLink } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import qrPreaplicatie from "@/assets/qr-preaplicatie.jpeg";

const CumAplic = () => {
  const { t } = useLanguage();

  const conditiiObligatorii = [t("howToApply.condition1"), t("howToApply.condition2"), t("howToApply.condition3"), t("howToApply.condition4")];
  const documenteInscriere = [t("howToApply.doc1"), t("howToApply.doc2"), t("howToApply.doc3"), t("howToApply.doc7"), t("howToApply.doc6"), t("howToApply.doc4"), t("howToApply.docRegulament"), t("howToApply.doc5"), t("howToApply.docNotariat"), t("howToApply.docContract"), t("howToApply.docExtrasCont"), t("howToApply.doc8")];
  const documenteOportunitatiReduseCategorii: { letter: string; docs: string[] }[] = [
    { letter: "a", docs: [t("howToApply.reducedDocA1"), t("howToApply.reducedDocA2")] },
    { letter: "b", docs: [t("howToApply.reducedDocB1"), t("howToApply.reducedDocB2"), t("howToApply.reducedDocB3")] },
    { letter: "c", docs: [t("howToApply.reducedDocC1"), t("howToApply.reducedDocC2")] },
    { letter: "d", docs: [t("howToApply.reducedDocD1"), t("howToApply.reducedDocD2"), t("howToApply.reducedDocD3"), t("howToApply.reducedDocD4")] },
  ];

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
              <a
                href="/regulament-acordare-burse-impact-utcn.pdf"
                download="regulament-acordare-burse-impact-utcn.pdf"
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg bg-[#BE1E2D] text-white font-medium hover:bg-[#a01825] transition-colors"
              >
                <FileText className="w-4 h-4" />
                {t("howToApply.regulamentBurse")}
              </a>
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
                    <p className="text-[#BE1E2D] font-medium text-lg">{t("howToApply.scanQRInstruction")}</p>
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
                      <div className="flex-1">
                        <p className="text-[#444] text-sm leading-relaxed">
                          {document}
                          {index === 0 && (
                            <a
                              href="/cerere-inscriere-impact-utcn.pdf"
                              download="cerere-inscriere-impact-utcn.pdf"
                              className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                            >
                              {t("howToApply.doc1Link")}
                            </a>
                          )}
                          {index === 4 && (
                            <a
                              href="/formular-inregistrare-fip-impact-utcn.pdf"
                              download="formular-inregistrare-fip-impact-utcn.pdf"
                              className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                            >
                              {t("howToApply.doc1Link")}
                            </a>
                          )}
                          {index === 5 && (
                            <a
                              href="/declaratie-evitare-dubla-finantare.pdf"
                              download="declaratie-evitare-dubla-finantare.pdf"
                              className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                            >
                              {t("howToApply.doc4Link")}
                            </a>
                          )}
                          {index === 6 && (
                            <a
                              href="/declaratie-asumare-regulament-impact-utcn.pdf"
                              download="declaratie-asumare-regulament-impact-utcn.pdf"
                              className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                            >
                              {t("howToApply.docRegulamentLink")}
                            </a>
                          )}
                          {index === 7 && (
                            <a
                              href="/acord-gdpr-impact-utcn.pdf"
                              download="acord-gdpr-impact-utcn.pdf"
                              className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                            >
                              {t("howToApply.doc5Link")}
                            </a>
                          )}
                          {index === 9 && (
                            <>
                              {" – "}
                              <a
                                href="/contract-acordare-burse-impact-utcn.pdf"
                                download="contract-acordare-burse-impact-utcn.pdf"
                                className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                              >
                                {t("howToApply.docRegulamentLink")}
                              </a>
                            </>
                          )}
                        </p>
                        {index === 11 && (
                          <div className="mt-4 bg-white rounded-lg p-4 border border-[#F5A623]/30">
                            <ul className="space-y-3">
                              {["a", "b", "c", "d"].map((letter) => (
                                <li key={letter} className="flex items-start gap-3 text-[#444] text-sm leading-relaxed">
                                  <span className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{letter}</span>
                                  <span className="flex-1 text-justify">{t(`howToApply.doc8${letter}`)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
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
              <div className="space-y-4">
                {documenteOportunitatiReduseCategorii.map(({ letter, docs }) => (
                  <div key={letter} className="bg-white rounded-lg p-5 border border-gray-200">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="w-7 h-7 bg-[#F5A623] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{letter}</span>
                      <p className="text-[#444] text-sm font-medium leading-relaxed flex-1 text-justify">{t(`howToApply.doc8${letter}Short`)}</p>
                    </div>
                    {docs.length > 0 ? (
                      <ul className="ml-10 space-y-1 list-disc list-inside text-[#555] text-sm">
                        {docs.map((d, i) => (
                          <li key={i}>
                            {d}
                            {letter === "b" && i === 1 && (
                              <>
                                {" – "}
                                <a
                                  href="/declaratie-nivel-educational-parinti-impact-utcn.pdf"
                                  download="declaratie-nivel-educational-parinti-impact-utcn.pdf"
                                  className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                                >
                                  {t("howToApply.docRegulamentLink")}
                                </a>
                              </>
                            )}
                            {letter === "b" && i === 2 && (
                              <>
                                {" – "}
                                <a
                                  href="/acord-gdpr-membru-familie-impact-utcn.pdf"
                                  download="acord-gdpr-membru-familie-impact-utcn.pdf"
                                  className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                                >
                                  {t("howToApply.docRegulamentLink")}
                                </a>
                              </>
                            )}
                            {letter === "d" && i === 3 && (
                              <>
                                {" – "}
                                <a
                                  href="/declaratie-migrant-refugiat-impact-utcn.pdf"
                                  download="declaratie-migrant-refugiat-impact-utcn.pdf"
                                  className="text-[#BE1E2D] font-medium underline hover:text-[#a01825] transition-colors"
                                >
                                  {t("howToApply.docRegulamentLink")}
                                </a>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="ml-10 text-xs text-[#999] italic">{t("howToApply.docsToBeAdded")}</p>
                    )}
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
