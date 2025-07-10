import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const handleWhatsApp = () => {
    const message = "🚀 Olá! Quero garantir minha vaga na próxima turma da mentoria LowerLift®!";
    const whatsappUrl = `https://wa.me/5567999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-background text-foreground relative" id="final-cta">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            O Momento da Decisão
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground mb-12"
          >
            A distinção entre mediocridade e excelência raramente reside no talento. Encontra-se no conhecimento diferenciado e orientação precisa.
          </motion.p>

          {/* Scarcity Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted/50 backdrop-blur-sm p-8 rounded-2xl mb-8 max-w-2xl mx-auto border"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">
              ⚠️ APENAS 1 VAGA POR SEMANA
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa dedicação à excelência limita-nos a mentorar um único profissional por vez.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• 75% das próximas 8 semanas comprometidas</p>
              <p>• Lista de espera: 23 profissionais</p>
              <p>• Próxima disponibilidade: 12 dias</p>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-xl px-12 py-6 h-auto group shadow-lg hover:shadow-xl"
            >
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground">
              Ao clicar, você escolherá sua modalidade no formulário
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-xs text-muted-foreground">
              Proteção de Dados | WhatsApp: (67) 9XXXX-XXXX
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-muted/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-muted/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-20 w-16 h-16 bg-muted/20 rounded-full"
        />
      </div>
    </section>
  );
}