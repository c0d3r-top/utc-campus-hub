import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCategories from "@/components/ProjectCategories";
import UpcomingEvents from "@/components/UpcomingEvents";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Proiecte Studențești UTCN | Universitatea Tehnică din Cluj-Napoca</title>
        <meta 
          name="description" 
          content="Descoperă și participă la proiectele inovatoare ale studenților de la Universitatea Tehnică din Cluj-Napoca. Hackathoane, workshop-uri și oportunități de dezvoltare." 
        />
        <meta name="keywords" content="UTCN, proiecte studențești, universitatea tehnică, cluj-napoca, hackathon, workshop, inovație" />
        <link rel="canonical" href="https://proiecte.utcluj.ro" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeaturedProjects />
          <ProjectCategories />
          <UpcomingEvents />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
