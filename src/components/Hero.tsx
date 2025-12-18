import { ArrowRight, Sparkles, Users, Calendar, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 hidden lg:block animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
          <Lightbulb className="w-8 h-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 hidden lg:block animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-500">
          <Users className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Universitatea Tehnică din Cluj-Napoca</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Descoperă{" "}
            <span className="text-primary relative">
              Proiectele
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Studenților UTCN
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Platforma ta pentru a descoperi, participa și contribui la proiectele inovatoare din cadrul facultăților tehnice. Fii parte din comunitatea care construiește viitorul.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="font-display font-semibold text-base px-8 group">
              Explorează Proiecte
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="font-display font-semibold text-base px-8">
              <Calendar className="mr-2 w-5 h-5" />
              Vezi Calendarul
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-16 md:mt-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary">50+</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">Proiecte Active</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary">1,200+</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">Studenți Implicați</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary">12</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">Facultăți Partenere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
