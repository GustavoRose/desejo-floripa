import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Chegou tudo certinho ❤️ Já passei o contato de vocês para várias amigas!",
    author: "Cliente Satisfeita",
  },
  {
    text: "Amei! Muito obrigado. Atendimento nota 10, produtos de qualidade.",
    author: "Cliente Verificado",
  },
  {
    text: "Eu que lhe agradeço pelo seu atendimento. Muito obrigada! 👏",
    author: "Cliente Fiel",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
          O Que Nossas Clientes Dizem
        </h2>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-coral text-coral" />
          ))}
        </div>
        <p className="text-muted-foreground font-body">
          Avaliações reais de clientes satisfeitas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-secondary/50 backdrop-blur-sm 
                       border border-border/30 transition-all duration-300
                       hover:bg-secondary/70 hover:border-coral/30
                       hover:shadow-[0_0_30px_hsl(14_90%_58%/0.15)]"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-coral/20" />
            <p className="font-body text-foreground mb-4 relative z-10">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-coral/20 flex items-center justify-center">
                <span className="text-coral text-sm font-semibold">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-muted-foreground font-body">
                {testimonial.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
