import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-secondary border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Links legais */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          <Link 
            to="/privacidade" 
            className="text-muted-foreground hover:text-coral transition-colors text-sm font-body"
          >
            Política de Privacidade
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <Link 
            to="/termos" 
            className="text-muted-foreground hover:text-coral transition-colors text-sm font-body"
          >
            Termos de Uso
          </Link>
        </div>

        {/* Informações de contato */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-xs md:text-sm font-body">
            <strong className="text-foreground">WhatsApp:</strong> (48) 98804-8880 | 
            <strong className="text-foreground ml-2">Localização:</strong> Grande Florianópolis, SC
          </p>
        </div>

        {/* Aviso de idade */}
        <div className="text-center mb-4">
          <p className="text-coral/80 text-xs font-body font-medium">
            🔞 Conteúdo destinado exclusivamente a maiores de 18 anos
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-muted-foreground text-xs font-body tracking-wide">
          © 2026 Cheiro de Rosa Lingerie | CNPJ: 36.312.574/0001-42
        </p>
      </div>
    </footer>
  );
};

export default Footer;
