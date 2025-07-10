import { motion } from "framer-motion";
import { Brain, Target, Clock } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "I. Maestria Anatômica Profunda",
    subtitle: "Domínio de estruturas negligenciadas",
    description: "O domínio de estruturas negligenciadas por 95% dos profissionais - a chave para resultados verdadeiramente duradouros.",
    features: [
      "Mapeamento detalhado das camadas cervicais",
      "Identificação de pontos-chave anatômicos",
      "Técnicas de dissecção avançada",
      "Preservação de estruturas nobres"
    ]
  },
  {
    icon: Target,
    title: "II. Precisão Metodológica",
    subtitle: "15 anos, 2000+ procedimentos",
    description: "Um protocolo com 15 anos de evolução, refinado em mais de 2000 procedimentos, garantindo consistência e reprodutibilidade.",
    features: [
      "Sequência padronizada de procedimentos",
      "Técnicas de sutura específicas",
      "Protocolos de recuperação otimizados",
      "Gestão de complicações"
    ]
  },
  {
    icon: Clock,
    title: "III. Longevidade Comprovada",
    subtitle: "Satisfação que transcende",
    description: "Resultados duradouros com melhor definição cervical. Uma satisfação que transcende expectativas de pacientes e cirurgiões.",
    features: [
      "Durabilidade superior a 10 anos",
      "Taxa de satisfação > 95%",
      "Mínima taxa de revisão",
      "Resultados naturais e harmoniosos"
    ]
  }
];

export function MethodSection() {
  return (
    <section className="py-20 bg-background" id="method">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Filosofia{" "}
            <span className="text-accent">
              LowerLift®
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os Três Fundamentos que Redefinem a Excelência
          </p>
        </motion.div>

        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                      <pillar.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                      <p className="text-primary font-medium">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="w-80 h-80 bg-gradient-hero rounded-3xl flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)] opacity-10" />
                  <pillar.icon className="w-24 h-24 text-primary/30" />
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 w-4 h-4 bg-accent/20 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-12 left-12 w-6 h-6 bg-accent/15 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/2 left-8 w-3 h-3 bg-accent/25 rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-accent text-accent-foreground p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-primary-foreground/90 mb-4 italic">
              "Imagine a cirurgia cervical como a restauração de uma obra de arte. A abordagem superficial é como retocar apenas o verniz. O LowerLift® trabalha na estrutura, restaurando em essência."
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}