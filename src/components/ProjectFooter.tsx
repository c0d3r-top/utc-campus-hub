import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectFooter = () => {
  const { t } = useLanguage();

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
                {t("footer.description")}
              </p>
              <div className="flex items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
                  alt="EU Flag" 
                  className="h-8"
                />
                <span className="text-xs text-gray-400">{t("footer.cofinanced")}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {t("footer.usefulLinks")}
              </h3>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="/obiective" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.objectives")}
                </a>
                <a href="/eligibilitate" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.eligibility")}
                </a>
                <a href="/echipa" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.team")}
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.contact")}
                </a>
                <a href="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.gdpr")}
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {t("footer.contact")}
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
            <p>© {new Date().getFullYear()} Universitatea Tehnică din Cluj-Napoca. {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
