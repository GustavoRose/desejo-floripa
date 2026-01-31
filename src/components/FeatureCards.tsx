import { Lock, Truck, Smile } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega no Mesmo Dia",
    description: "Na Grande Florianópolis",
  },
  {
    icon: Lock,
    title: "100% Sigiloso",
    description: "Embalagem discreta e sem identificação",
  },
  {
    icon: Smile,
    title: "Sem Julgamentos",
    description: "Atendimento especializado e acolhedor",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group flex flex-col items-center p-6 rounded-2xl
                     bg-secondary/50 backdrop-blur-sm border border-border/30
                     transition-all duration-300 hover:bg-secondary/70 hover:border-coral/30
                     hover:shadow-[0_0_30px_hsl(14_90%_58%/0.15)]"
        >
          <div className="p-3 rounded-full bg-primary/20 mb-4 
                          transition-all duration-300 group-hover:bg-primary/30">
            <feature.icon className="w-6 h-6 text-coral" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-sm text-center font-body">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
