import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ana Carolina Silva",
      project: "Apartamento Residencial",
      text: "Dayane transformou completamente nosso apartamento! Ela conseguiu capturar exatamente nossa personalidade e criar um ambiente acolhedor e sofisticado. O resultado superou todas as expectativas.",
      rating: 5
    },
    {
      id: 2,
      name: "Roberto Mendes",
      project: "Escritório Comercial",
      text: "Profissionalismo excepcional do início ao fim. O projeto do nosso escritório ficou incrível e nossos clientes sempre elogiam o ambiente. Dayane entende muito de funcionalidade e estética.",
      rating: 5
    },
    {
      id: 3,
      name: "Marina & Carlos",
      project: "Casa Familiar",
      text: "Trabalhar com a Dayane foi uma experiência maravilhosa. Ela ouviu nossas necessidades, respeitou nosso orçamento e entregou um projeto que representa perfeitamente nossa família.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Confiança de
              <span className="text-primary block mt-2">Nossos Clientes</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Histórias reais de transformação e satisfação que nos motivam a sempre 
              buscar a excelência em cada projeto.
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border/50 text-center min-h-[300px] flex flex-col justify-center">
              <div className="mb-6">
                <Quote size={48} className="text-primary mx-auto opacity-50" />
              </div>
              
              <blockquote className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-body text-sm text-primary">
                  {testimonials[currentIndex].project}
                </p>
                
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-secondary/50"
              >
                <ChevronLeft size={20} />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-secondary/50"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="mt-16 text-center">
            <p className="font-body text-sm text-muted-foreground mb-8">
              Confiança de clientes em diversos segmentos
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-50">
              <div className="font-display text-lg font-semibold text-foreground">Empresa A</div>
              <div className="font-display text-lg font-semibold text-foreground">Empresa B</div>
              <div className="font-display text-lg font-semibold text-foreground">Empresa C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;