import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5519992755050?text=Olá! Gostaria de mais informações sobre seus serviços.', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/dayanealves_design', '_blank');
  };

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Dayane Alves
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Criando ambientes únicos que refletem sua personalidade e transformam 
              a forma como você vive e se relaciona com seus espaços.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={openWhatsApp}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={18} />
              </button>
              <button 
                onClick={openInstagram}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">
                    (19) 99275-5050
                  </p>
                  <p className="font-body text-xs text-muted-foreground/70">
                    WhatsApp disponível
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  dayanealvesdesigner44@gmail.com
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  Campinas, SP<br />
                  Atendimento em toda região metropolitana
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Navegação
            </h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Portfólio
              </button>
            </nav>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Serviços
            </h4>
            <div className="space-y-2">
              <p className="font-body text-sm text-muted-foreground">
                Projetos Residenciais
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Design Comercial
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Acompanhamento de Obras
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Consultoria de Decoração
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm text-muted-foreground">
              © {currentYear} Dayane Alves - Designer de Interiores. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <button className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </button>
              <button className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;