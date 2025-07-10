import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Os 3 dias em Campo Grande mudaram minha visão sobre cirurgia cervical. Ver 3 casos diferentes com os criadores do método não tem preço.",
      name: "Dr. Fernando Oliveira",
      designation: "SBCP - Salvador/BA",
      src: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    },
    {
      quote: "O diferencial foi o FaceDay®. Aprendi a vender o procedimento de forma ética e por valores justos. Triplicou meu faturamento em cervicoplastias.",
      name: "Dra. Patricia Mendes",
      designation: "SBCP - Curitiba/PR",
      src: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    },
    {
      quote: "Ter o Dr. João operando COMIGO, no MEU paciente, tirou todas as inseguranças. No dia seguinte já agendei mais 5 casos.",
      name: "Dr. Ricardo Santos",
      designation: "SBCP - São Paulo/SP",
      src: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    },
    {
      quote: "A metodologia LowerLift® revolucionou minha prática. Resultados consistentes e duradouros que impressionam tanto pacientes quanto colegas.",
      name: "Dr. Carlos Medeiros",
      designation: "SBCP - Rio de Janeiro/RJ",
      src: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    },
    {
      quote: "O suporte pós-mentoria é excepcional. Mesmo após 6 meses, ainda recebo orientações valiosas para casos complexos.",
      name: "Dra. Ana Beatriz Costa",
      designation: "SBCP - Belo Horizonte/MG",
      src: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}