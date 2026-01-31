import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Olá! Vim do Instagram e gostaria de saber mais sobre os produtos.", 
  label = "Fale Conosco no WhatsApp" 
}: WhatsAppButtonProps) => {
  
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold 
                 bg-[#25D366] text-white rounded-full
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-[#20bd5a]
                 animate-pulse-glow
                 shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)]
                 cursor-pointer border-none w-full justify-center"
    >
      <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-body tracking-wide">{label}</span>
    </button>
  );
};

export default WhatsAppButton;
