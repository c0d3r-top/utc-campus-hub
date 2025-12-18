import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const events = [
  {
    id: 1,
    title: "Hackathon UTCN 2025",
    description: "48 de ore de inovație și dezvoltare. Premii în valoare de 10,000 EUR.",
    date: "25-27 Ianuarie",
    time: "09:00",
    location: "Campus Buna Ziua",
    type: "Competiție",
    featured: true,
  },
  {
    id: 2,
    title: "Workshop: Introducere în AI",
    description: "Învață bazele inteligenței artificiale cu profesorii noștri.",
    date: "18 Ianuarie",
    time: "14:00",
    location: "Sala A101",
    type: "Workshop",
    featured: false,
  },
  {
    id: 3,
    title: "Prezentare Proiecte Finalizate",
    description: "Studenții prezintă rezultatele proiectelor din semestrul anterior.",
    date: "5 Februarie",
    time: "10:00",
    location: "Aula Magna",
    type: "Eveniment",
    featured: false,
  },
  {
    id: 4,
    title: "Career Fair Tech 2025",
    description: "Întâlnește reprezentanți de la peste 50 de companii tech.",
    date: "20 Februarie",
    time: "09:00",
    location: "Sala Polivalentă",
    type: "Career",
    featured: true,
  },
];

const UpcomingEvents = () => {
  return (
    <section id="calendar" className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Evenimente & Activități
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Calendar Evenimente
          </h2>
          <p className="text-muted-foreground text-lg">
            Nu rata oportunitățile de dezvoltare și networking
          </p>
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className={`group p-6 bg-card border transition-all duration-300 hover:shadow-card-hover cursor-pointer ${
                event.featured 
                  ? 'border-primary/30 hover:border-primary' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Date Block */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center ${
                  event.featured ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                }`}>
                  <span className="text-2xl font-display font-bold leading-none">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-sm font-medium opacity-80 mt-1">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          event.featured 
                            ? 'bg-accent/20 text-accent-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {event.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 hidden md:block" />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="font-display">
            <Calendar className="mr-2 w-5 h-5" />
            Vezi Calendarul Complet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
