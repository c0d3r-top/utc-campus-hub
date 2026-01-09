import UTCNHeader from "@/components/UTCNHeader";
import ImpactHero from "@/components/ImpactHero";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectContext from "@/components/ProjectContext";
import ProjectFooter from "@/components/ProjectFooter";

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
      </main>

      {/* Footer */}
      <ProjectFooter />
    </div>
  );
};

export default Index;
