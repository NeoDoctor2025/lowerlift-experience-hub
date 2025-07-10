import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. Fernando Oliveira",
    specialty: "SBCP - Salvador/BA",
    text: "Os 3 dias em Campo Grande mudaram minha visão sobre cirurgia cervical. Ver 3 casos diferentes com os criadores do método não tem preço.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Dra. Patricia Mendes",
    specialty: "SBCP - Curitiba/PR", 
    text: "O diferencial foi o FaceDay®. Aprendi a vender o procedimento de forma ética e por valores justos. Triplicou meu faturamento em cervicoplastias.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Dr. Ricardo Santos",
    specialty: "SBCP - São Paulo/SP",
    text: "Ter o Dr. João operando COMIGO, no MEU paciente, tirou todas as inseguranças. No dia seguinte já agendei mais 5 casos.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Main Featured Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-card p-8 md:p-12 rounded-2xl shadow-medium relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-center text-foreground mb-8 font-medium leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover shadow-soft"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-primary">
                    {testimonials[currentIndex].specialty}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-primary">
                    {testimonial.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}