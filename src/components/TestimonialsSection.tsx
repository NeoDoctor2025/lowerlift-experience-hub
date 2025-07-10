import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Os 3 dias em Campo Grande mudaram minha visão sobre cirurgia cervical. Ver 3 casos diferentes com os criadores do método não tem preço.",
    name: "Dr. Fernando Oliveira",
    designation: "SBCP - Salvador/BA",
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "O diferencial foi o FaceDay®. Aprendi a vender o procedimento de forma ética e por valores justos. Triplicou meu faturamento em cervicoplastias.",
    name: "Dra. Patricia Mendes",
    designation: "SBCP - Curitiba/PR",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Ter o Dr. João operando COMIGO, no MEU paciente, tirou todas as inseguranças. No dia seguinte já agendei mais 5 casos.",
    name: "Dr. Ricardo Santos",
    designation: "SBCP - São Paulo/SP",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "A metodologia LowerLift® revolucionou minha prática. Resultados consistentes e duradouros que impressionam pacientes e colegas.",
    name: "Dra. Ana Carolina",
    designation: "SBCP - Rio de Janeiro/RJ",
    src: "https://images.unsplash.com/photo-1594824388853-2c5899d87b98?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "O suporte pós-mentoria é excepcional. Mesmo após 6 meses, ainda recebo orientações valiosas dos fundadores.",
    name: "Dr. Marcos Vieira",
    designation: "SBCP - Belo Horizonte/MG",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
  },
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

        {/* New Animated Testimonials Component */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}