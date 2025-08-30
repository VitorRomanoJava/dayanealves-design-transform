import { Home, Building, Users, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Projetos Residenciais",
      description: "Criação de ambientes únicos para sua casa, unindo conforto, funcionalidade e estilo pessoal em cada cômodo.",
      features: ["Salas de estar", "Quartos", "Cozinhas", "Banheiros", "Áreas externas"]
    },
    {
      icon: Building,
      title: "Design Comercial",
      description: "Projetos para escritórios, lojas e estabelecimentos comerciais que fortalecem sua marca e otimizam a experiência do cliente.",
      features: ["Escritórios", "Lojas", "Restaurantes", "Clínicas", "Hotéis"]
    },
    {
      icon: Users,
      title: "Acompanhamento de Obras",
      description: "Supervisão completa durante toda a execução do projeto, garantindo qualidade e fidelidade ao design aprovado.",
      features: ["Supervisão técnica", "Controle de qualidade", "Cronograma", "Fornecedores", "Entrega final"]
    },
    {
      icon: Palette,
      title: "Consultoria de Decoração",
      description: "Orientação especializada para renovar e harmonizar seus espaços com soluções práticas e acessíveis.",
      features: ["Análise de ambientes", "Paleta de cores", "Mobiliário", "Decoração", "Iluminação"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Soluções Completas para
              <span className="text-primary block mt-2">Seu Espaço</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transformamos ambientes através de projetos personalizados que refletem 
              sua essência e atendem suas necessidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 border border-border/50"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon size={32} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="font-body text-sm text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;