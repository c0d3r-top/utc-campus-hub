import { useLanguage } from "@/contexts/LanguageContext";

const ProjectFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2b2b2b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                IMPACT<span className="text-[#BE1E2D]">+</span>UTCN
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t("footer.description")}
              </p>
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
          </div>

          {/* MFE Link */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>
              {t("footer.mfeInfo")}{" "}
              <a 
                href="https://mfe.gov.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#BE1E2D] underline transition-colors"
              >
                https://mfe.gov.ro/
              </a>
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Universitatea Tehnică din Cluj-Napoca. {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
