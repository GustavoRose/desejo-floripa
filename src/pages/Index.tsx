import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <main className="flex-1 relative flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Elegância e sofisticação"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Cheiro de Rosa" 
            className="h-16 md:h-20 w-auto animate-float"
          />

          {/* Decorative element */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent" />

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight tracking-wide">
            <span className="text-coral">Desejo</span>, Prazer e{" "}
            <span className="text-coral">Discrição</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-xl md:text-2xl text-coral-light font-light tracking-widest uppercase">
            Seu Sex Shop na Grande Florianópolis
          </p>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
            Entrega rápida, atendimento sigiloso e sem julgamentos. 
            Sua intimidade merece o melhor.
          </p>

          {/* Decorative element */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent" />

          {/* Feature Cards */}
          <div className="pt-4">
            <FeatureCards />
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <WhatsAppButton phoneNumber="5548999999999" />
          </div>

          {/* Trust text */}
          <p className="text-muted-foreground/70 text-sm font-body italic">
            Atendimento 100% discreto • Resposta imediata
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
