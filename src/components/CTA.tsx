import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const CTA = () => {
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de agendar uma consultoria inicial para discutir meu projeto de interiores.";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos Criar Juntos o Ambiente
            <span className="text-primary block mt-2">
              que Você Sempre Sonhou?
            </span>
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Entre em contato para agendar sua consultoria inicial e descobrir como 
            podemos transformar seu espaço em algo extraordinário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={openWhatsApp}
              className="w-full sm:w-auto group"
            >
              <MessageCircle size={20} className="mr-2 group-hover:animate-bounce" />
              Quero um Orçamento Personalizado
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToContact}
              className="w-full sm:w-auto group"
            >
              <Calendar size={20} className="mr-2 group-hover:animate-pulse" />
              Agendar Consultoria Gratuita
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-lg">✓</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Consultoria inicial gratuita
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-lg">✓</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Orçamento sem compromisso
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-lg">✓</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Atendimento personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;