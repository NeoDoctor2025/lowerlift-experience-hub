import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Zap, Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "🚀 Olá! Quero garantir minha vaga na próxima turma da mentoria LowerLift® antes que as vagas se esgotem!";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground" id="final-cta">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 animate-pulse" />
            Últimas Vagas Disponíveis - Turma Limitada
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Não Perca Esta Oportunidade Única
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8"
          >
            Transforme sua prática e multiplique seus resultados com o método mais avançado de rejuvenescimento cervical
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8 max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Oferta Expira Em:</span>
            </div>
            
            <div className="flex justify-center gap-4">
              {[
                { label: "Dias", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Seg", value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold">{String(item.value).padStart(2, '0')}</span>
                  </div>
                  <div className="text-xs opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Método Exclusivo</h3>
              <p className="text-sm opacity-90">Única técnica com 15 anos de desenvolvimento</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Zap className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">ROI Garantido</h3>
              <p className="text-sm opacity-90">Aumento médio de 300% nos honorários</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Suporte Vitalício</h3>
              <p className="text-sm opacity-90">Acompanhamento contínuo pós-mentoria</p>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-xl px-12 py-6 h-auto group shadow-strong hover:shadow-glow"
            >
              Garantir Minha Vaga Agora
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-primary-foreground/80">
              📱 Resposta imediata via WhatsApp • 🔒 Vagas limitadas • ⚡ Condições especiais
            </p>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                500+ cirurgiões treinados
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                98% taxa de satisfação
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                15 anos de experiência
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                Certificação internacional
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-20 w-16 h-16 bg-white/5 rounded-full"
        />
      </div>
    </section>
  );
}