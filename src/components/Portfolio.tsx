import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioOffice from "@/assets/portfolio-office.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Suíte Master Elegante",
      category: "residencial",
      image: portfolioBedroom,
      description: "Projeto de suíte master que combina conforto e sofisticação com paleta neutra e materiais nobres."
    },
    {
      id: 2,
      title: "Escritório Corporativo",
      category: "comercial",
      image: portfolioOffice,
      description: "Ambiente corporativo moderno que promove produtividade e bem-estar dos colaboradores."
    },
    {
      id: 3,
      title: "Cozinha Gourmet",
      category: "residencial",
      image: portfolioKitchen,
      description: "Cozinha gourmet funcional com design contemporâneo e acabamentos de alta qualidade."
    }
  ];

  const filters = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial", label: "Comercial" },
    { id: "predial", label: "Predial" }
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openWhatsApp = (projectTitle: string) => {
    const message = `Olá! Gostei do projeto "${projectTitle}" e gostaria de saber mais sobre seus serviços.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projetos que
              <span className="text-primary block mt-2">Inspiram</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada projeto é único e reflete a personalidade e necessidades específicas 
              de nossos clientes, sempre com excelência e atenção aos detalhes.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 border border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="cta" 
                      size="lg"
                      onClick={() => openWhatsApp(project.title)}
                      className="transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => openWhatsApp("ver mais projetos")}
            >
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;