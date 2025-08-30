import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
            Arquitetura de Interiores que 
            <span className="text-primary block mt-2">
              Transforma Espaços
            </span>
            e Inspira Vidas
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300 leading-relaxed">
            Projetos residenciais, comerciais e prediais que unem estética, 
            funcionalidade e exclusividade para criar ambientes únicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Button 
              variant="cta" 
              size="xl"
              onClick={openWhatsApp}
              className="w-full sm:w-auto"
            >
              Solicitar Orçamento
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto"
            >
              Conheça Meu Trabalho
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={32} 
            className="text-primary cursor-pointer hover:text-primary/80 transition-colors duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;