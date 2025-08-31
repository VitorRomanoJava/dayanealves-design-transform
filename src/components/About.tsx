import dayaneProfile from "@/assets/logo.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Essência por Trás de 
              <span className="text-primary block mt-2">Cada Projeto</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-hero">
                <img 
                  src={dayaneProfile}
                  alt="Dayane Alves - Designer de Interiores"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-elegant-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-elegant-float delay-1000"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Paixão pela Transformação
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Acredito que design de interiores vai além da estética — é sobre criar 
                  ambientes que contam histórias e proporcionam bem-estar. Cada projeto 
                  é uma oportunidade de transformar não apenas espaços, mas a forma como 
                  as pessoas vivem e se conectam com seus ambientes.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Expertise & Dedicação
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Com anos de experiência em projetos residenciais, comerciais e prediais, 
                  desenvolvi uma abordagem única que equilibra funcionalidade, elegância 
                  e sustentabilidade. Cada detalhe é pensado para criar ambientes que 
                  refletem a personalidade e necessidades dos meus clientes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">50+</h4>
                  <p className="font-body text-sm text-muted-foreground">Projetos Concluídos</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">5+</h4>
                  <p className="font-body text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
