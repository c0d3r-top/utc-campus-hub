import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { Helmet } from "react-helmet-async";
import { Users, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const teamMembers = [
  { name: "Ș.l. dr. ing. Raluca-Diana NERIȘANU", role: "team.projectManager", email: "raluca.nerisanu@campus.utcluj.ro" },
  { name: "Ref. Adriana-Maria CERVINSCHI", role: "team.assistantManager", email: "" },
  { name: "Jur. Andreea Ioana POPA", role: "team.erasmusExpert", email: "" },
  { name: "Ildiko Renata PETZ", role: "team.targetGroupResponsible", email: "" },
  { name: "As. dr. ing. Laura Catinca LEȚIA", role: "team.disabilityFacilitator", email: "" },
  { name: "Adm. Patrim. SFS Gabriela-Victoria UNGUREAN", role: "team.financialResponsible", email: "" },
  { name: "Ing. Cristina Loredana PĂRĂUAN", role: "team.publicProcurement", email: "" },
  { name: "Jur. Liviu Alin CUIBUȘ", role: "team.gdprExpert", email: "" },
];

const Echipa = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Helmet>
        <title>{t("team.title")} | IMPACT+UTCN</title>
      </Helmet>
      <UTCNHeader />
      <section className="bg-gradient-to-br from-[#BE1E2D] to-[#8B1621] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">{t("team.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{t("team.title")}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{t("team.subtitle")}</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8 border border-[#e0e0e0]">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#BE1E2D] to-[#8B1621] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl md:text-2xl font-bold">{member.name.split(' ').slice(-2).map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#2b2b2b] mb-1">{member.name}</h3>
                      <p className="text-[#BE1E2D] font-semibold text-sm md:text-base mb-3">{t(member.role)}</p>
                      <div className="flex items-center gap-3">
                        <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1.5 text-sm text-[#444] hover:text-[#BE1E2D] transition-colors">
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8 border border-[#e0e0e0]">
              <h2 className="text-xl md:text-2xl font-bold text-[#2b2b2b] mb-4">{t("team.aboutTitle")}</h2>
              <p className="text-[#666] leading-relaxed mb-4">{t("team.aboutP1")}</p>
              <p className="text-[#666] leading-relaxed">{t("team.aboutP2")}</p>
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter />
    </div>
  );
};

export default Echipa;
