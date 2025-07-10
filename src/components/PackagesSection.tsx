import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const packages = [
  {
    name: "LowerLift® Essentials",
    badge: "🥉 FUNDAMENTOS",
    price: "R$ 6.900",
    subtitle: "Imersão Observacional em Campo Grande",
    icon: Star,
    popular: false,
    features: [
      "3 dias intensivos em Campo Grande/MS",
      "Acompanha 3 cirurgias completas",
      "Observação direta com os criadores",
      "Material didático exclusivo",
      "Certificado de Participação",
      "Grupo de discussão por 30 dias"
    ],
    bestFor: "Ideal para: Cirurgiões que querem conhecer profundamente o método",
    cta: "QUERO ESTA OPÇÃO"
  },
  {
    name: "LowerLift® Experience",
    badge: "🥈 MAIS ESCOLHIDO",
    price: "R$ 11.900",
    subtitle: "Jornada Completa com FaceDay® e FaceCare®",
    icon: Crown,
    popular: true,
    features: [
      "5 dias completos em Campo Grande/MS",
      "3 cirurgias + consultório + pós",
      "FaceDay®: dia completo de consultas",
      "FaceCare®: protocolos pós-operatório",
      "Scripts de consulta e precificação",
      "Certificado de Proficiência",
      "Suporte WhatsApp por 60 dias"
    ],
    bestFor: "Ideal para: Dominar TODO o processo, da consulta ao pós",
    cta: "ESCOLHER EXPERIENCE"
  },
  {
    name: "LowerLift® At Home",
    badge: "🥇 EXCLUSIVO",
    price: "R$ 49.900",
    subtitle: "Mentoria Personalizada em Seu Ambiente",
    priceTag: "por procedimento",
    icon: Zap,
    popular: false,
    features: [
      "Fundador vai ATÉ VOCÊ",
      "Mentoria hands-on com SEU paciente",
      "No SEU centro cirúrgico",
      "Análise completa da estrutura",
      "Certificação Gold LowerLift®",
      "Autorização para co-marketing",
      "Suporte VIP por 90 dias"
    ],
    bestFor: "Ideal para: Implementação imediata com máxima segurança",
    cta: "APLICAR PARA VIP"
  }
];

export function PackagesSection() {
  const handleWhatsApp = (packageName: string) => {
    const message = `Olá! Tenho interesse na modalidade ${packageName}. Gostaria de mais informações.`;
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
            Escolha o Percurso Ideal para Sua Evolução
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
              {/* Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`${pkg.popular ? 'bg-gradient-primary' : 'bg-primary/90'} text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold`}>
                  {pkg.badge}
                </div>
              </div>

              <div className="p-8 pt-12">
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
                  <p className="text-muted-foreground mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    {pkg.priceTag && <span className="text-muted-foreground text-sm ml-2">{pkg.priceTag}</span>}
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

                {/* Best For */}
                <div className="bg-primary/5 p-4 rounded-lg mb-6">
                  <p className="text-sm text-primary font-medium">{pkg.bestFor}</p>
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
                  {pkg.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card p-6 rounded-xl shadow-soft max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground font-medium">
              Pré-requisito: RQE em Cirurgia Plástica
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}