import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react"; // Sugestão: use lucide para o ícone flutuante

const Index = () => {
  // Link personalizado para saber que veio da LP
  const whatsappUrl = "https://wa.me/5548999999999?text=Olá!%20Vim%20pela%20página%20e%20gostaria%20de%20um%20atendimento%20discreto.";

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      
      {/* 1. BOTÃO FLUTUANTE (Essencial para Mobile) */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce-slow"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      <main className="flex-1 relative flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Elegância e sofisticação"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <img 
            src={logo} 
            alt="Cheiro de Rosa" 
            className="h-16 md:h-24 w-auto animate-float"
          />

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent" />

          {/* Headline mais agressiva para Conversão */}
          <h1 className="font-display text-4xl md:text-7xl font-semibold text-foreground leading-tight tracking-wide">
            Sua Intimidade com <br />
            <span className="text-coral">Máxima Discrição</span>
          </h1>

          {/* Subheadline com Gatilho de Localidade e Rapidez */}
          <p className="font-body text-lg md:text-xl text-coral-light font-medium tracking-wide">
            Entrega Expressa em toda Grande Florianópolis. <br className="hidden md:block" />
            Receba hoje mesmo, em embalagem 100% discreta.
          </p>

          {/* Cards de Benefícios */}
          <div className="pt-4 w-full">
            <FeatureCards />
          </div>

          {/* Seção de Avaliações */}
          <Testimonials />

          {/* CTA Principal Reforçado */}
          <div className="pt-8 flex flex-col items-center gap-4">
            <WhatsAppButton phoneNumber="5548999999999" label="CHAMAR NO WHATSAPP AGORA" />
            
            {/* Elemento de Confiança abaixo do botão */}
            <div className="flex items-center gap-2 text-muted-foreground/80 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Especialistas online agora para te ajudar
            </div>
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
