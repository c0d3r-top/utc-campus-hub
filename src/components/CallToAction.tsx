import { ArrowRight, Mail, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <Bell className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Fii la curent cu proiectele noi
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Abonează-te la newsletter-ul nostru și primește notificări despre noile proiecte și evenimente.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adresa@student.utcluj.ro"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold group"
            >
              Abonează-te
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-primary-foreground/60 mt-4">
            Datele tale sunt în siguranță. Nu trimitem spam, doar informații utile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
