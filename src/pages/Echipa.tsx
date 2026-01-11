import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { Helmet } from "react-helmet-async";
import { Users, Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Prof. Dr. Ing. Exemplu Nume",
    role: "Director Proiect",
    email: "exemplu@utcluj.ro",
    description: "Responsabil pentru coordonarea generală a proiectului IMPACT+UTCN.",
  },
  {
    name: "Conf. Dr. Ing. Exemplu Nume",
    role: "Responsabil Grup Țintă",
    email: "exemplu2@utcluj.ro",
    description: "Coordonează activitățile de recrutare și monitorizare a studenților din grupul țintă.",
  },
  {
    name: "Lect. Dr. Exemplu Nume",
    role: "Responsabil Financiar",
    email: "exemplu3@utcluj.ro",
    description: "Gestionează aspectele financiare și administrative ale proiectului.",
  },
  {
    name: "Ing. Exemplu Nume",
    role: "Responsabil Comunicare",
    email: "exemplu4@utcluj.ro",
    description: "Coordonează activitățile de comunicare și promovare a proiectului.",
  },
];

const Echipa = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Helmet>
        <title>Echipa | IMPACT+UTCN</title>
        <meta name="description" content="Echipa proiectului IMPACT+UTCN - persoanele responsabile pentru implementarea și coordonarea proiectului." />
      </Helmet>

      <UTCNHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#BE1E2D] to-[#8B1621] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Echipa Proiectului</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              ECHIPA IMPACT+UTCN
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Cunoaște echipa dedicată care coordonează și implementează proiectul pentru sprijinirea studenților cu oportunități reduse.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8 border border-[#e0e0e0]"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#BE1E2D] to-[#8B1621] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl md:text-2xl font-bold">
                        {member.name.split(' ').slice(-2).map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#2b2b2b] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#BE1E2D] font-semibold text-sm md:text-base mb-3">
                        {member.role}
                      </p>
                      <p className="text-[#666] text-sm mb-4">
                        {member.description}
                      </p>
                      
                      {/* Contact Links */}
                      <div className="flex items-center gap-3">
                        <a 
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-1.5 text-sm text-[#444] hover:text-[#BE1E2D] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8 border border-[#e0e0e0]">
              <h2 className="text-xl md:text-2xl font-bold text-[#2b2b2b] mb-4">
                Despre Echipa Noastră
              </h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Echipa proiectului IMPACT+UTCN este formată din cadre didactice și personal administrativ al 
                Universității Tehnice din Cluj-Napoca, dedicați sprijinirii studenților cu oportunități reduse 
                în accesarea mobilităților Erasmus+.
              </p>
              <p className="text-[#666] leading-relaxed">
                Fiecare membru al echipei are responsabilități specifice pentru a asigura implementarea 
                eficientă a proiectului și pentru a oferi suport personalizat studenților eligibili.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectFooter />
    </div>
  );
};

export default Echipa;
