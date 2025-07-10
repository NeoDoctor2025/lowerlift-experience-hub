import { motion } from "framer-motion";
import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

const founders = [
  {
    name: "Dr. Marcus Vinícius Deep",
    title: "Criador do Método LowerLift®",
    specialty: "Cirurgião Plástico - CRM 123456/SP",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    description: "Pioneiro em rejuvenescimento cervical profundo com mais de 15 anos de experiência e criador da técnica LowerLift®. Responsável por treinar centenas de cirurgiões ao redor do mundo.",
    achievements: [
      "Criador da técnica LowerLift®",
      "2000+ procedimentos realizados",
      "500+ cirurgiões treinados",
      "Palestrante internacional"
    ]
  },
  {
    name: "Dra. Carolina Neck",
    title: "Co-fundadora Deep Neck Academy",
    specialty: "Cirurgiã Plástica - CRM 654321/RJ",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    description: "Especialista em anatomia cervical profunda e co-desenvolvedora dos protocolos de ensino da Deep Neck Academy. Referência em casos complexos de revisão cervical.",
    achievements: [
      "Co-desenvolvedora dos protocolos",
      "Especialista em casos complexos",
      "Coordenadora pedagógica",
      "Pesquisadora em anatomia cervical"
    ]
  }
];

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Anos de Experiência",
    description: "Desenvolvimento contínuo da técnica"
  },
  {
    icon: Users,
    number: "500+",
    label: "Cirurgiões Treinados",
    description: "Profissionais capacitados globalmente"
  },
  {
    icon: BookOpen,
    number: "2000+",
    label: "Procedimentos",
    description: "Cases de sucesso documentados"
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Satisfação",
    description: "Taxa de aprovação dos mentoreados"
  }
];

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
            Conheça os{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fundadores
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os criadores do método LowerLift® que revolucionaram o rejuvenescimento cervical
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 mx-auto md:mx-0 rounded-2xl object-cover shadow-medium"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {founder.title}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {founder.specialty}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {founder.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {founder.achievements.map((achievement, aIndex) => (
                      <motion.div
                        key={aIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * aIndex }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 justify-center md:justify-start"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary text-primary-foreground p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              "Democratizar o acesso ao conhecimento avançado em rejuvenescimento cervical, 
              elevando o padrão de excelência da cirurgia plástica brasileira através da 
              transferência de técnicas inovadoras e protocolos comprovados."
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                ✨ Inovação Constante
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                🎯 Resultados Excepcionais
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                🤝 Parceria Vitalícia
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}