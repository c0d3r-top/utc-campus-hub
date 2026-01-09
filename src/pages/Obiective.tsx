import { Target, CheckCircle, GraduationCap, Globe, Users, Lightbulb, Heart, Briefcase } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";

const competenteList = [
  { icon: Globe, text: "Competențe de comunicare într-o limbă străină și înțelegere interculturală" },
  { icon: Lightbulb, text: "Competențe digitale și utilizarea responsabilă a tehnologiei" },
  { icon: GraduationCap, text: "Competențe de învățare pe tot parcursul vieții" },
  { icon: Users, text: "Competențe civice, sociale și interculturale" },
  { icon: Lightbulb, text: "Spirit de inițiativă, antreprenoriat și gândire critică" },
  { icon: Heart, text: "Abilități interpersonale, emoționale și de lucru în echipă" },
];

const Obiective = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Target className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">Obiectivele Proiectului</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2b2b2b] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Obiective <span className="text-[#BE1E2D]">IMPACT+UTCN</span>
              </h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                Descoperă obiectivele generale și specifice ale proiectului nostru pentru sprijinirea studenților.
              </p>
            </div>
          </div>
        </section>

        {/* Obiectiv General */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Obiectiv General
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-[#BE1E2D]/5 to-[#F5A623]/5 rounded-xl p-8 border-l-4 border-[#BE1E2D]">
                <p className="text-lg text-[#444] leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Creșterea accesului și participării studenților cu oportunități reduse ai UTCN la mobilități educaționale Erasmus+, 
                  în vederea îmbunătățirii competențelor profesionale, a șanselor de integrare pe piața muncii și a adaptării 
                  la schimbările socio-economice viitoare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Obiective Specifice */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#F5A623] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Obiective Specifice
                </h2>
              </div>

              <div className="space-y-4">
                {/* Obiectiv 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#BE1E2D] font-bold text-sm">1</span>
                    </div>
                    <p className="text-[#444] leading-relaxed">
                      Sprijinirea participării a <strong className="text-[#BE1E2D]">91 de studenți</strong> cu oportunități reduse 
                      la mobilități studențești Erasmus+, prin acordarea unui suport financiar suplimentar.
                    </p>
                  </div>
                </div>

                {/* Obiectiv 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#BE1E2D] font-bold text-sm">2</span>
                    </div>
                    <p className="text-[#444] leading-relaxed">
                      Creșterea gradului de informare și conștientizare privind beneficiile mobilităților internaționale.
                    </p>
                  </div>
                </div>

                {/* Obiectiv 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#BE1E2D] font-bold text-sm">3</span>
                    </div>
                    <p className="text-[#444] leading-relaxed">
                      Promovarea incluziunii sociale și a egalității de șanse în educație.
                    </p>
                  </div>
                </div>

                {/* Obiectiv 4 - Competențe */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#BE1E2D] font-bold text-sm">4</span>
                    </div>
                    <p className="text-[#444] leading-relaxed">
                      Dezvoltarea competențelor cheie necesare integrării pe piața muncii:
                    </p>
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

                {/* Obiectiv 5 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#BE1E2D] font-bold text-sm">5</span>
                    </div>
                    <p className="text-[#444] leading-relaxed">
                      Creșterea calității și relevanței educației prin internaționalizare și schimb de bune practici.
                    </p>
                  </div>
                </div>

                {/* Obiectiv 6 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="w-4 h-4 text-[#BE1E2D]" />
                    </div>
                    <p className="text-[#444] leading-relaxed">
                      Susținerea finalizării studiilor și facilitarea tranziției absolvenților către piața muncii.
                    </p>
                  </div>
                </div>
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
