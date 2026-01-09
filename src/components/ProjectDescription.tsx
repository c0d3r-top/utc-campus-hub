import { CheckCircle } from "lucide-react";

const ProjectDescription = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2b2b2b] mb-8 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Despre Proiect
          </h2>

          <div className="space-y-6 text-[#444] leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p>
              Proiectul <strong className="text-[#BE1E2D]">IMPACT+UTCN</strong> urmărește sprijinirea studenților cu oportunități reduse 
              ai Universității Tehnice din Cluj-Napoca în vederea participării la mobilități studențești de tip Erasmus+, 
              prin acordarea unui suport financiar suplimentar și prin implementarea unor activități de informare, 
              promovare și valorificare a rezultatelor mobilităților.
            </p>

            <p>
              Prin măsurile propuse, proiectul contribuie la optimizarea sistemelor de educație și formare, 
              astfel încât acestea să răspundă mai eficient cerințelor actuale ale pieței muncii, 
              promovând totodată accesul egal la educație, incluziunea socială și învățarea pe tot parcursul vieții.
            </p>

            <p>
              Proiectul sprijină dezvoltarea unor programe educaționale de calitate, cu un accent puternic pe 
              internaționalizare și pe creșterea participării studenților cu oportunități reduse la mobilități educaționale.
            </p>

            <div className="bg-[#f9f9f9] rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-[#2b2b2b] mb-4">Beneficii pentru studenți:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>Sprijin financiar suplimentar pentru participarea la mobilități Erasmus+</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>Activități complementare programului de studii</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>Creșterea motivației și a ratei de finalizare a studiilor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                  <span>Îmbunătățirea capacității de integrare pe piața muncii</span>
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
