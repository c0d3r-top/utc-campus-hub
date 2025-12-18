import { Clock, Users, ArrowUpRight, Tag } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "SmartCampus IoT",
    description: "Sistem inteligent de monitorizare a consumului energetic în campus folosind senzori IoT și machine learning pentru optimizare.",
    category: "Electronică & IoT",
    status: "În desfășurare",
    participants: 24,
    deadline: "15 Feb 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    faculty: "Automatică și Calculatoare",
  },
  {
    id: 2,
    title: "EcoTech Recycling",
    description: "Aplicație mobilă pentru identificarea și sortarea automată a deșeurilor reciclabile folosind viziune computerizată.",
    category: "Tehnologii Verzi",
    status: "Înscrieri deschise",
    participants: 12,
    deadline: "28 Ian 2025",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
    faculty: "Inginerie Electrică",
  },
  {
    id: 3,
    title: "MedBot Assistant",
    description: "Robot asistent pentru spitale cu navigare autonomă și funcții de livrare echipamente medicale.",
    category: "Robotică",
    status: "În desfășurare",
    participants: 18,
    deadline: "10 Mar 2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    faculty: "Automatică și Calculatoare",
  },
  {
    id: 4,
    title: "SolarTracker 2.0",
    description: "Sistem de urmărire solară cu algoritmi predictivi pentru maximizarea eficienței panourilor fotovoltaice.",
    category: "Energie Regenerabilă",
    status: "Înscrieri deschise",
    participants: 8,
    deadline: "05 Feb 2025",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    faculty: "Energetică",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="proiecte" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              Proiecte Recente
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
              Proiecte în Spotlight
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto font-display">
            Vezi toate proiectele
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-4 left-4 ${project.status === 'Înscrieri deschise' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}
                >
                  {project.status}
                </Badge>

                {/* Faculty Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground text-sm font-medium opacity-90">
                    {project.faculty}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.participants} participanți</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{project.deadline}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
