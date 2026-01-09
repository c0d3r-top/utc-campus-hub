import { Shield, CheckCircle, Users, GraduationCap, Heart, Globe } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";

const categoriiOportunitatiReduse = [
  {
    letter: "a",
    icon: GraduationCap,
    title: "Bursă socială",
    description: "Beneficiază de o bursă socială sau care se califică/întrunește condițiile pentru a beneficia de o bursă socială acordată de instituția de învățământ superior la care acesta este înmatriculat, conform prevederilor art. 10, alin. (9) din Ordinul ME 6463/2023."
  },
  {
    letter: "b",
    icon: Users,
    title: "Primul student din familie",
    description: "Intră în categoria \"primului student din familie\" (însemnând că nu deține deja o diplomă de licență, părinții săi nu au obținut o diplomă de studii universitare, dar poate avea frați/surori care sunt deja studenți la universitate / au absolvit deja o universitate)."
  },
  {
    letter: "c",
    icon: Heart,
    title: "Unic părinte",
    description: "Are calitatea de unic părinte (care își crește singur copilul minor din motive de deces, dispariție, încarcerare a celuilalt părinte sau nerecunoaștere prin certificatul de naștere)."
  },
  {
    letter: "d",
    icon: Globe,
    title: "Migrant sau refugiat",
    description: "Are statut de migrant sau refugiat."
  }
];

const Eligibilitate = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Shield className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">Criterii de Eligibilitate</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-6 leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Criterii de Eligibilitate privind Acordarea Burselor pentru <span className="text-[#BE1E2D]">Mobilitatea Studenților</span>
              </h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                Verifică dacă îndeplinești condițiile necesare pentru a beneficia de burse pentru mobilitatea studențească Erasmus+.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#BE1E2D]/5 rounded-xl p-6 border-l-4 border-[#BE1E2D]">
                <p className="text-[#444] leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Bursele pentru mobilitatea studenților se vor acorda studenților din grup țintă care îndeplinesc următoarele condiții:
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Condiția 1 */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#BE1E2D] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b] mb-2 text-lg">Vârstă și înmatriculare</h3>
                    <p className="text-[#444] leading-relaxed">
                      Sunt studenți cu vârsta cuprinsă între <strong className="text-[#BE1E2D]">18 și 29 ani</strong>, 
                      înmatriculați într-un program de studii nivel <strong>ISCED 5-8</strong>, cu domiciliul / rezidența 
                      în cazul studenților străini într-una dintre regiunile mai puțin dezvoltate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Condiția 2 */}
        <section className="py-8 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b] mb-2 text-lg">Student cu oportunități reduse</h3>
                    <p className="text-[#444] leading-relaxed">
                      Se încadrează în categoria <strong className="text-[#BE1E2D]">"student cu oportunități reduse"</strong>, 
                      conform definiției prezentului Ghid al Solicitantului Condiții Specifice, în cel puțin una dintre următoarele categorii:
                    </p>
                  </div>
                </div>
              </div>

              {/* Categorii */}
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-14">
                {categoriiOportunitatiReduse.map((categorie) => (
                  <div key={categorie.letter} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <categorie.icon className="w-4 h-4 text-[#BE1E2D]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {categorie.letter}
                          </span>
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

        {/* Condiția 3 */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-[#BE1E2D]/5 to-[#F5A623]/5 rounded-xl p-6 border border-[#BE1E2D]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#BE1E2D] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b] mb-2 text-lg">Limitare unică</h3>
                    <p className="text-[#444] leading-relaxed">
                      O persoană poate beneficia <strong className="text-[#BE1E2D]">o singură dată</strong> de bursa de mobilitate 
                      acordată din FSE+ pentru a participa la o mobilitate Erasmus+ pentru studenți.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#2b2b2b] mb-4">Îndeplinești criteriile?</h2>
              <p className="text-[#666] mb-6">Află cum poți aplica pentru bursa de mobilitate Erasmus+.</p>
              <a 
                href="/cum-aplic" 
                className="inline-flex items-center gap-2 bg-[#BE1E2D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a01825] transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                Cum aplic?
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
