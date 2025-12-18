import { Clock, Mail } from "lucide-react";
import UTCNLogo from "@/components/UTCNLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 p-6">
        <UTCNLogo className="h-12 w-auto" />
      </header>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative z-10 text-center max-w-xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <Clock className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">În curând</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Proiecte Studențești
            <span className="block text-primary">UTCN</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Pagina este în curs de dezvoltare. Platforma pentru proiectele studenților de la Universitatea Tehnică din Cluj-Napoca va fi disponibilă în curând.
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mb-8" />

          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:proiecte@utcluj.ro" 
              className="hover:text-primary transition-colors"
            >
              proiecte@utcluj.ro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
