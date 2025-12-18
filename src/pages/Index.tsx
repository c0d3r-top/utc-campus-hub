import { Clock, Mail } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Official UTCN Header */}
      <UTCNHeader />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="relative z-10 text-center max-w-xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/30 mb-6">
            <Clock className="w-4 h-4 text-[#996515]" />
            <span className="text-sm font-medium text-[#996515]">În curând</span>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-4xl md:text-5xl text-[#2b2b2b] mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Proiecte Studențești
            <span className="block text-[#BE1E2D]">UTCN</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[#666] mb-8 max-w-md mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Pagina este în curs de dezvoltare. Platforma pentru proiectele studenților de la Universitatea Tehnică din Cluj-Napoca va fi disponibilă în curând.
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-[#BE1E2D]/30 rounded-full mx-auto mb-8" />

          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-[#666]">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:proiecte@utcluj.ro" 
              className="hover:text-[#BE1E2D] transition-colors"
            >
              proiecte@utcluj.ro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
