import { Search, Lightbulb, FileText, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Briefing e Imersão",
      description: "Conhecemos suas necessidades, estilo de vida e sonhos para criar a base do projeto ideal."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Estudo Preliminar",
      description: "Desenvolvemos conceitos e alternativas, apresentando ideias criativas alinhadas ao seu perfil."
    },
    {
      icon: FileText,
      number: "03",
      title: "Projeto Executivo",
      description: "Detalhamento técnico completo com plantas, especificações e cronograma de execução."
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Execução e Entrega",
      description: "Acompanhamento total da obra até a entrega do ambiente dos seus sonhos."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nosso Método:
              <span className="text-primary block mt-2">Do Sonho à Realidade</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Um processo estruturado e transparente que garante resultados excepcionais 
              em cada etapa do seu projeto.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Connector */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 border border-border/50 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 relative">
                          <step.icon size={28} className="text-primary" />
                          <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center font-body">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="font-body text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;