import { Mail, MapPin, Phone } from "lucide-react";

const ProjectFooter = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                IMPACT<span className="text-[#BE1E2D]">+</span>UTCN
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Proiect finanțat prin Programul Educație și Ocupare (PEO) pentru sprijinirea 
                studenților cu oportunități reduse în participarea la mobilități Erasmus+.
              </p>
              <div className="flex items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
                  alt="EU Flag" 
                  className="h-8"
                />
                <span className="text-xs text-gray-400">Cofinanțat de Uniunea Europeană</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Link-uri Utile
              </h3>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="/obiective" className="text-gray-400 hover:text-white transition-colors">
                  Obiective
                </a>
                <a href="/eligibilitate" className="text-gray-400 hover:text-white transition-colors">
                  Eligibilitate
                </a>
                <a href="/echipa" className="text-gray-400 hover:text-white transition-colors">
                  Echipa
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Contact
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Str. Memorandumului nr. 28, Cluj-Napoca, România</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+40 264 401 200</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:erasmus@utcluj.ro" className="hover:text-white transition-colors">
                    erasmus@utcluj.ro
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Universitatea Tehnică din Cluj-Napoca. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
