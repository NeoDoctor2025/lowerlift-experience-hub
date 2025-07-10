import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Dr. Fernando Oliveira",
    designation: "SBCP - Salvador/BA",
    quote: "Os 3 dias em Campo Grande mudaram minha visão sobre cirurgia cervical. Ver 3 casos diferentes com os criadores do método não tem preço.",
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Dra. Patricia Mendes",
    designation: "SBCP - Curitiba/PR", 
    quote: "O diferencial foi o FaceDay®. Aprendi a vender o procedimento de forma ética e por valores justos. Triplicou meu faturamento em cervicoplastias.",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Dr. Ricardo Santos",
    designation: "SBCP - São Paulo/SP",
    quote: "Ter o Dr. João operando COMIGO, no MEU paciente, tirou todas as inseguranças. No dia seguinte já agendei mais 5 casos.",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Testemunhos de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transformação
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}