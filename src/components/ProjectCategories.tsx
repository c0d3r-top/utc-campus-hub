import { Code, Cpu, Zap, Building2, Microscope, Rocket, Wifi, Leaf } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  {
    icon: Code,
    title: "Informatică & Software",
    description: "Dezvoltare aplicații, AI, machine learning și proiecte open-source",
    color: "primary",
    projects: 18,
  },
  {
    icon: Cpu,
    title: "Electronică & Automatizări",
    description: "IoT, robotică, sisteme embedded și automatizări industriale",
    color: "accent",
    projects: 12,
  },
  {
    icon: Zap,
    title: "Electrotehnică & Energie",
    description: "Sisteme energetice, energie regenerabilă și eficiență energetică",
    color: "primary",
    projects: 8,
  },
  {
    icon: Building2,
    title: "Construcții & Inginerie Civilă",
    description: "Proiecte de infrastructură, materiale inovatoare și design structural",
    color: "accent",
    projects: 6,
  },
  {
    icon: Microscope,
    title: "Materiale & Nanotehnologii",
    description: "Cercetare materiale avansate, nanotehnologii și biotehnologii",
    color: "primary",
    projects: 5,
  },
  {
    icon: Rocket,
    title: "Startup & Antreprenoriat",
    description: "Acceleratoare, mentorship și dezvoltare de startup-uri tehnologice",
    color: "accent",
    projects: 10,
  },
  {
    icon: Wifi,
    title: "Telecomunicații & Rețele",
    description: "5G, comunicații satelit, cybersecurity și rețele avansate",
    color: "primary",
    projects: 7,
  },
  {
    icon: Leaf,
    title: "Tehnologii Verzi",
    description: "Sustenabilitate, economie circulară și soluții eco-friendly",
    color: "accent",
    projects: 9,
  },
];

const ProjectCategories = () => {
  return (
    <section id="categorii" className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Domenii de Activitate
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Categorii de Proiecte
          </h2>
          <p className="text-muted-foreground text-lg">
            Explorează diverse domenii tehnice și găsește proiectul potrivit pentru tine
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isPrimary = category.color === "primary";
            
            return (
              <Card
                key={category.title}
                className="group relative p-6 bg-card hover:bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isPrimary ? 'bg-gradient-to-br from-primary/5 to-transparent' : 'bg-gradient-to-br from-accent/10 to-transparent'}`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${isPrimary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/20 group-hover:bg-accent/30'}`}>
                  <IconComponent className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-accent-foreground'}`} />
                </div>

                {/* Content */}
                <h3 className="relative font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="relative text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Projects Count */}
                <div className="relative flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-muted-foreground">
                    {category.projects} proiecte
                  </span>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Vezi toate →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
