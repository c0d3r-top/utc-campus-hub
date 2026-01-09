import { GraduationCap, Globe, Users } from "lucide-react";
import impactLogo from "@/assets/impact-utcn-logo.png";

const ImpactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Project Logo */}
          <img 
            src={impactLogo} 
            alt="IMPACT+UTCN Logo" 
            className="h-40 md:h-52 mx-auto mb-8"
          />

          {/* Project Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
            <Globe className="w-4 h-4 text-[#BE1E2D]" />
            <span className="text-sm font-medium text-[#BE1E2D]">Program Erasmus+</span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#666] mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Sprijinirea studenților cu oportunități reduse ai Universității Tehnice din Cluj-Napoca 
            în vederea participării la mobilități studențești de tip Erasmus+
          </p>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-[#BE1E2D]" />
              </div>
              <h3 className="font-semibold text-[#2b2b2b] mb-2">Suport Financiar</h3>
              <p className="text-sm text-[#666]">Sprijin financiar suplimentar pentru participarea la mobilități Erasmus+</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-[#2b2b2b] mb-2">Incluziune Socială</h3>
              <p className="text-sm text-[#666]">Promovarea accesului egal la educație și învățarea pe tot parcursul vieții</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#BE1E2D]" />
              </div>
              <h3 className="font-semibold text-[#2b2b2b] mb-2">Internaționalizare</h3>
              <p className="text-sm text-[#666]">Creșterea participării studenților la mobilități educaționale internaționale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
