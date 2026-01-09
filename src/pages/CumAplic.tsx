import { FileText, CheckCircle, ClipboardList, Upload, AlertCircle } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";

const conditiiObligatorii = [
  "Se înscriu în grupul țintă al proiectului",
  "Participă la o mobilitate ERASMUS+",
  "Participă la cel puțin o activitate a proiectului",
  "A semnat contractul pentru acordarea bursei de mobilitate"
];

const documenteInscriere = [
  "Cerere de înscriere în proiect – formular online",
  "Copie CI",
  "Adeverință student/masterand/doctorand",
  "Declarație privind evitarea dublei finanțări semnat în original de către student",
  "Declarație privind colectarea datelor cu caracter personal semnat în original de către student",
  "Formular de înregistrare grup țintă (offline/online) – semnat în original de către student și Responsabilul GȚ",
  "Dovadă că studentul intenționează să plece în mobilitate ERASMUS sau Learning Agreement",
  "Documente care dovedesc că se încadrează în categoria \"student cu oportunități reduse\""
];

const documenteOportunitatiReduse = [
  "Dosar medical sau documente medicale valide",
  "Certificat(e) de deces",
  "Documente care atestă apartenența la familie monoparentală (după caz, acte de stare civilă, dovadă de încarcerare, decizia instanței de menținere a stării de arest, raportul de anchetă socială în cazul părinților dispăruți etc.)",
  "Documente care atestă nivelul de venit (după caz, adeverință de venit pentru fiecare membru al familiei, raport de anchetă socială etc.)",
  "Declarație pe proprie răspundere a studentului care atestă faptul că membrul grupului țintă se încadrează în categoria persoanelor cu nivel educațional al părinților scăzut, însoțită de copie după actele de studii ale părinților",
  "Documente care atestă calitatea de unic părinte (după caz, certificat de naștere cu tată nedeterminat (natural), certificat de deces al celuilalt părinte, acte de stare civilă, dovadă de încarcerare, decizia instanței de menținere a stării de arest, raportul de anchetă socială în cazul părinților dispăruți etc.)",
  "Permis de ședere (sau alt document oficial eliberat de autoritățile competente) care atestă statutul de migrant sau refugiat"
];

const CumAplic = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <ClipboardList className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">Proces de Aplicare</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-6 leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Cum <span className="text-[#BE1E2D]">Aplic?</span>
              </h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                Descoperă condițiile obligatorii și documentele necesare pentru înscrierea în proiectul IMPACT+UTCN.
              </p>
            </div>
          </div>
        </section>

        {/* Condiții Obligatorii */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Condiții Obligatorii pentru Acordarea Bursei
                </h2>
              </div>
              
              <p className="text-[#666] mb-8">
                Bursele pentru mobilitatea studenților se vor acorda numai studenților care:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {conditiiObligatorii.map((conditie, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#BE1E2D]/5 to-transparent rounded-xl p-5 border-l-4 border-[#BE1E2D]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#BE1E2D] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-[#444] leading-relaxed">{conditie}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F5A623]/10 rounded-xl p-6 border border-[#F5A623]/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#F5A623] flex-shrink-0 mt-0.5" />
                  <p className="text-[#444] leading-relaxed">
                    În vederea acordării bursei pentru mobilitate, fiecare participant va semna un <strong>contract cu UTCN</strong>, 
                    în calitate de Beneficiar al proiectului prin care studentul își asumă respectarea condițiilor de acordare 
                    a bursei de mobilitate oferite prin proiect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documente pentru Înscriere */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F5A623] rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Documente pentru Înscrierea în Proiect
                </h2>
              </div>
              
              <p className="text-[#666] mb-8">
                Pentru înscrierea în grupul țintă a proiectului studenții interesați vor depune următoarele documente:
              </p>

              <div className="space-y-3">
                {documenteInscriere.map((document, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#BE1E2D] font-bold text-xs">{index + 1}</span>
                      </div>
                      <p className="text-[#444] text-sm leading-relaxed">{document}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documente Oportunități Reduse */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#BE1E2D] rounded-lg flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#2b2b2b]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Documente pentru Categoria "Student cu Oportunități Reduse"
                </h2>
              </div>
              
              <p className="text-[#666] mb-6 text-sm">
                Documente care dovedesc încadrarea în condițiile de acordare a burselor sociale stipulate în art. 10 alin. (9) lit. a) – c) 
                din Ordinul ministrului educației nr. 6463/2023:
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {documenteOportunitatiReduse.map((document, index) => (
                  <div key={index} className="bg-[#f9f9f9] rounded-lg p-4 border border-gray-200">
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

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-[#BE1E2D] to-[#a01825]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ai întrebări?</h2>
              <p className="text-white/80 mb-6">Contactează-ne pentru mai multe informații despre procesul de aplicare.</p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[#BE1E2D] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contactează-ne
              </a>
            </div>
          </div>
        </section>
      </main>

      <ProjectFooter />
    </div>
  );
};

export default CumAplic;
