import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  // O NÚMERO DEFINITIVO AQUI
  const myPhoneNumber = "5548988048880"; 
  const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=Olá!%20Vim%20pela%20página%20e%20gostaria%20de%20um%20atendimento%20discreto.`;

  const handleFloatingClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', { content_name: 'Botão Flutuante' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-coral/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>

      {/* Botão Flutuante - Agora com o número fixo direto no link */}
      <a 
        href={whatsappUrl}
        onClick={handleFloatingClick}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce-slow flex items-center justify-center border-none"
      >
        <MessageCircle size={30} />
      </a>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-10 md:py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="animate-float">
            <img src={logo} alt="Cheiro de Rosa" className="h-16 md:h-28 w-auto drop-shadow-2xl" />
          </div>

          <header className="space-y-4">
            <h1 className="font-display text-3xl md:text-7xl font-semibold text-foreground leading-tight">
              Sua Intimidade com <br /> <span className="text-coral">Máxima Discrição</span>
            </h1>
            <p className="text-base md:text-xl text-coral-light/90">
              Entrega em toda Grande Florianópolis. Receba hoje com total sigilo.
            </p>
          </header>

          <section className="w-full"><FeatureCards /></section>
          <section className="w-full"><Testimonials /></section>

          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            {/* PASSANDO O NÚMERO CORRETO PARA O COMPONENTE */}
            <WhatsAppButton phoneNumber={myPhoneNumber} label="QUERO ATENDIMENTO AGORA" />
            
            <div className="flex items-center justify-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-xs font-semibold uppercase tracking-wide">Consultores online</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
