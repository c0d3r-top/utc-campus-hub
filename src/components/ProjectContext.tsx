import { Target, TrendingUp, Briefcase } from "lucide-react";

const ProjectContext = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2b2b2b] mb-8 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Contextul Proiectului
          </h2>

          <div className="space-y-6 text-[#444] leading-relaxed mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p>
              Proiectul se înscrie în cadrul <strong>Programului Educație și Ocupare (PEO)</strong> și 
              contribuie la realizarea priorităților acestuia:
            </p>
          </div>

          {/* PEO Priorities */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border-l-4 border-[#BE1E2D]">
              <div className="w-10 h-10 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-[#BE1E2D]" />
              </div>
              <p className="text-[#444] text-sm">
                Optimizarea educației și formării pentru a răspunde cerințelor pieței muncii
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#F5A623]">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-[#F5A623]" />
              </div>
              <p className="text-[#444] text-sm">
                Consolidarea funcționării eficiente a pieței muncii
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#BE1E2D]">
              <div className="w-10 h-10 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5 text-[#BE1E2D]" />
              </div>
              <p className="text-[#444] text-sm">
                Facilitarea accesului egal și incluziv la ocupare de calitate și durabilă
              </p>
            </div>
          </div>

          {/* European Objectives */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-[#2b2b2b] mb-4 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Obiective Europene - "Europa în mișcare"
            </h3>
            <p className="text-[#666] text-sm mb-6">
              Proiectul răspunde Apelului PEO – Sprijin financiar suplimentar destinat studenților cu oportunități reduse 
              care participă la mobilități studențești Erasmus+, contribuind direct la atingerea obiectivelor stabilite 
              la nivel european prin Propunerea de Recomandare a Consiliului:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#BE1E2D]/5 rounded-lg p-5">
                <div className="text-3xl font-bold text-[#BE1E2D] mb-2">23%</div>
                <p className="text-sm text-[#666]">
                  Până în anul 2030, cel puțin 23% dintre absolvenții de învățământ superior 
                  să aibă o experiență de mobilitate educațională
                </p>
              </div>

              <div className="bg-[#F5A623]/5 rounded-lg p-5">
                <div className="text-3xl font-bold text-[#F5A623] mb-2">20%</div>
                <p className="text-sm text-[#666]">
                  Cel puțin 20% dintre beneficiarii mobilităților educaționale 
                  să fie persoane cu oportunități reduse
                </p>
              </div>
            </div>
          </div>

          {/* National Program */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#BE1E2D]/5 to-[#F5A623]/5 rounded-xl border border-[#BE1E2D]/10">
            <p className="text-[#444] text-sm leading-relaxed">
              Prin activitățile implementate, proiectul susține totodată <strong>Prioritatea 3.7 „Educație și competențe"</strong> din 
              Programul Național de Reformă 2024, contribuind la incluziunea socială, internaționalizarea educației 
              și creșterea calității formării profesionale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContext;
