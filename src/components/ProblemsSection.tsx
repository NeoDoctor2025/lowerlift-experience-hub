import { motion } from "framer-motion";
import { Clock, Shield, TrendingUp, Frown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Resultados Efêmeros",
    description: "Resultados no pescoço que não perduram como esperado, gerando reoperações"
  },
  {
    icon: Shield,
    title: "Insegurança Técnica",
    description: "Hesitação ao abordar casos complexos de flacidez cervical acentuada"
  },
  {
    icon: TrendingUp,
    title: "Potencial Subaproveitado",
    description: "A percepção de que poderia cobrar mais se dominasse técnicas avançadas"
  },
  {
    icon: Frown,
    title: "Resultados Incompletos",
    description: "Frustração quando o rejuvenescimento facial não é acompanhado pelo cervical"
  }
];

export function ProblemsSection() {
  return (
    <section className="py-20 bg-muted/30" id="problems">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Uma{" "}
            <span className="text-accent">Reflexão Necessária</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como cirurgião, você já deve ter enfrentado estas situações:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-accent text-accent-foreground p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-primary-foreground/90 text-lg">
              Se você se identificou com pelo menos duas situações, há uma oportunidade significativa de evolução em sua prática.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Descobrir a Solução
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}