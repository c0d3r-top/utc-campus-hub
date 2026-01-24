import { Link } from "react-router-dom";
import { QrCode } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ImpactHero from "@/components/ImpactHero";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectContext from "@/components/ProjectContext";
import ProjectFooter from "@/components/ProjectFooter";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Official UTCN Header */}
      <UTCNHeader />

      {/* Main Content */}
      <main className="flex-1">
        <ImpactHero />
        <ProjectDescription />
        <ProjectContext />
        
        {/* QR Code Button - Fixed position */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link to="/qr-evenimente">
            <Button 
              className="bg-[#BE1E2D] hover:bg-[#a01825] text-white shadow-lg rounded-full w-14 h-14 p-0"
              title="Generează QR Code Evenimente"
            >
              <QrCode className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <ProjectFooter />
    </div>
  );
};

export default Index;
