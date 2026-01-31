import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Olá! Vim do Instagram e gostaria de saber mais sobre os produtos.", label = "Fale Conosco no WhatsApp" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold 
                 bg-[hsl(142_70%_40%)] text-foreground rounded-full
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-[hsl(142_70%_35%)]
                 animate-pulse-glow
                 shadow-[0_10px_40px_-10px_hsl(142_70%_40%/0.5)]"
    >
      <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-body tracking-wide">{label}</span>
    </button>
  );
};

export default WhatsAppButton;
