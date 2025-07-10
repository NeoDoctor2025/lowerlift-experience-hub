import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown, Frown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Resultados cervicais efêmeros",
    description: "Técnicas superficiais que não oferecem a durabilidade esperada pelos pacientes"
  },
  {
    icon: AlertTriangle,
    title: "Insegurança técnica em casos complexos",
    description: "Falta de domínio em anatomia profunda limita a confiança em procedimentos desafiadores"
  },
  {
    icon: TrendingDown,
    title: "Subvalorização dos procedimentos",
    description: "Dificuldade em precificar adequadamente devido à falta de diferenciação técnica"
  },
  {
    icon: Frown,
    title: "Frustração com técnicas superficiais",
    description: "Resultados aquém das expectativas geram insatisfação profissional e dos pacientes"
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
            Desafios Enfrentados por{" "}
            <span className="text-primary">Cirurgiões Plásticos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identificamos os principais obstáculos que limitam o sucesso em rejuvenescimento cervical
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
          <div className="bg-gradient-primary text-primary-foreground p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Está Pronto para Superar Esses Desafios?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Nossa metodologia LowerLift® foi desenvolvida especificamente para resolver cada um desses problemas
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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