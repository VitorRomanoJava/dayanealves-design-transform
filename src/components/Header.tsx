import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consultoria.', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Dayane Alves
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-body text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-body text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-body text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="font-body text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Portfólio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-body text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              size="lg"
              onClick={openWhatsApp}
              className="animate-elegant-float"
            >
              Agendar Consultoria
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-elegant">
            <nav className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="font-body text-foreground hover:text-primary transition-all duration-300 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-body text-foreground hover:text-primary transition-all duration-300 text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-body text-foreground hover:text-primary transition-all duration-300 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="font-body text-foreground hover:text-primary transition-all duration-300 text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-body text-foreground hover:text-primary transition-all duration-300 text-left"
              >
                Contato
              </button>
              <Button 
                variant="cta" 
                size="lg"
                onClick={openWhatsApp}
                className="mt-4"
              >
                Agendar Consultoria
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;