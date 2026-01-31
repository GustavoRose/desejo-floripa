import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const whatsappUrl = "https://wa.me/5548999999999?text=Olá!%20Vim%20pela%20página%20e%20gostaria%20de%20um%20atendimento%20discreto.";

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-coral/30">
      <link rel="preload" as="image" href="/assets/hero-bg.jpg">
      {/* Background Otimizado - Fixed para não quebrar no scroll do mobile */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradiente mais profundo para garantir leitura em telas de OLED (comuns em smartphones) */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>

      {/* Botão Flutuante Responsivo */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-10 md:py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Logo com respiro maior */}
          <div className="animate-float">
            <img 
              src={logo} 
              alt="Cheiro de Rosa" 
              className="h-16 md:h-28 w-auto drop-shadow-2xl"
            />
          </div>

          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent opacity-60" />

          {/* Headline: Impacto imediato em 3 segundos */}
          <header className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
              Sua Intimidade com <br />
              <span className="text-coral drop-shadow-sm">Máxima Discrição</span>
            </h1>
            <p className="font-body text-base md:text-xl text-coral-light/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Atendimento especializado na Grande Florianópolis. <br className="hidden sm:block" />
              Receba hoje com embalagem 100% descaracterizada.
            </p>
          </header>

          {/* Grid de Diferenciais */}
          <section className="w-full">
            <FeatureCards />
          </section>

          {/* Prova Social: O gatilho que faltava para clicar */}
          <section className="w-full py-4 border-y border-coral/10 bg-white/5 backdrop-blur-sm rounded-2xl">
            <Testimonials />
          </section>

          {/* CTA Final com Prova de Atividade */}
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <div className="w-full transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <WhatsAppButton phoneNumber="5548999999999" label="QUERO ATENDIMENTO AGORA" />
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-xs md:text-sm font-semibold tracking-wide uppercase">
                Consultores disponíveis agora
              </span>
            </div>
          </div>

          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-coral/40 to-transparent" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
