import { motion } from "framer-motion";

export function FoundersSection() {
  return (
    <section className="py-20 bg-background" id="founders">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Palavras dos{" "}
            <span className="text-accent">
              Fundadores
            </span>
          </h2>
        </motion.div>

        {/* Letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-soft">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Estimado colega,
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Compreendemos profundamente os desafios que enfrenta. A inquietação diante de resultados efêmeros. A hesitação frente a casos complexos. A sensação de não alcançar seu pleno potencial.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Percorremos este caminho e desenvolvemos não apenas uma técnica, mas uma filosofia completa de rejuvenescimento cervical profundo.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                O LowerLift® Experience foi concebido para honrar sua realidade única, seus desafios específicos, suas aspirações profissionais.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Com estima e respeito,
              </p>
              
              <div className="border-t border-muted-foreground/20 pt-8">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary mb-2">
                    Drs. João Ilgenfritz e Daniel Nunes
                  </p>
                  <p className="text-muted-foreground">
                    Fundadores, Deep Neck Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-card p-6 rounded-xl shadow-soft">
            <h3 className="font-bold text-foreground mb-2">Dr. João Ilgenfritz</h3>
            <p className="text-sm text-muted-foreground">
              Membro Titular SBCP | Fellow Cleveland Clinic | 15 anos dedicados ao refinamento cervical
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-soft">
            <h3 className="font-bold text-foreground mb-2">Dr. Daniel Nunes</h3>
            <p className="text-sm text-muted-foreground">
              Membro Especialista SBCP | Mestrado USP | Coordenador Cirurgia Plástica HSL
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}