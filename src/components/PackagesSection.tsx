import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const packages = [
  {
    name: "Essentials",
    price: "R$ 6.900",
    duration: "3 dias",
    description: "Observação direta",
    icon: Star,
    popular: false,
    features: [
      "3 dias de observação direta",
      "Acompanhamento de 8-10 cirurgias",
      "Material didático exclusivo",
      "Certificado de participação",
      "Acesso ao grupo VIP (3 meses)",
      "1 sessão de mentoria online"
    ],
    highlights: [
      "Ideal para início da curva de aprendizado",
      "Foco na observação e compreensão"
    ]
  },
  {
    name: "Experience",
    price: "R$ 11.900",
    duration: "5 dias",
    description: "Imersão completa",
    icon: Crown,
    popular: true,
    features: [
      "5 dias de imersão total",
      "Participação ativa em 12-15 cirurgias",
      "Hands-on supervisionado",
      "Material didático + vídeos exclusivos",
      "Certificado internacional",
      "Acesso ao grupo VIP (6 meses)",
      "3 sessões de mentoria online",
      "Kit instrumental básico"
    ],
    highlights: [
      "Mais procurado pelos especialistas",
      "Hands-on com supervisão direta"
    ]
  },
  {
    name: "At Home",
    price: "R$ 49.900",
    duration: "Personalizado",
    description: "Mentoria personalizada in loco",
    icon: Zap,
    popular: false,
    features: [
      "Mentoria personalizada no seu consultório",
      "Duração customizada (3-7 dias)",
      "Análise completa da sua estrutura",
      "Implementação do protocolo LowerLift®",
      "Treinamento da equipe",
      "Suporte pós-mentoria (12 meses)",
      "Certificação para toda equipe",
      "Kit instrumental completo",
      "Marketing médico personalizado"
    ],
    highlights: [
      "Experiência completamente personalizada",
      "Implementação no seu ambiente"
    ]
  }
];

export function PackagesSection() {
  const handleWhatsApp = (packageName: string) => {
    const message = `Olá! Tenho interesse na modalidade ${packageName} da mentoria LowerLift®. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-muted/30" id="packages">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Modalidades de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mentoria
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha a experiência de aprendizado que melhor se adapta ao seu perfil e necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                    pkg.popular ? 'bg-gradient-primary' : 'bg-primary/10'
                  }`}>
                    <pkg.icon className={`w-8 h-8 ${
                      pkg.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">/ {pkg.duration}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 mb-6">
                    {pkg.highlights.map((highlight, hIndex) => (
                      <p key={hIndex} className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * fIndex }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsApp(pkg.name)}
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'bg-primary hover:bg-primary-dark'
                  } transition-all duration-300 text-lg py-6 h-auto group`}
                >
                  Solicitar Informações
                  <motion.div
                    className="ml-2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    📱
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card p-6 rounded-xl shadow-soft max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              ✨ Benefícios Exclusivos Inclusos em Todas as Modalidades
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Suporte pós-curso
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Material digital exclusivo
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Grupo VIP WhatsApp
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Certificado internacional
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}