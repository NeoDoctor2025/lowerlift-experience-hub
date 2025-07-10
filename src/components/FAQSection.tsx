import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual experiência prévia é necessária?",
    answer: "Recomendamos ao menos dois anos de prática em cirurgia facial. Mais relevante que tempo é o compromisso genuíno com a excelência."
  },
  {
    question: "O método é adequado para diferentes faixas etárias de pacientes?",
    answer: "Certamente. Os protocolos são elegantemente adaptáveis, respeitando as particularidades de cada década de vida."
  },
  {
    question: "Como se distingue de cursos convencionais?",
    answer: "Enquanto cursos oferecem teoria e demonstrações genéricas, proporcionamos mentoria personalizada com seus casos. É a diferença entre conhecimento e maestria."
  },
  {
    question: "Existem facilidades de pagamento?",
    answer: "Sim, parcelamento em até 12x. Pagamentos à vista via PIX contemplam 10% de desconto."
  },
  {
    question: "Posso levar um assistente?",
    answer: "Sim! Oferecemos 50% de desconto para o segundo participante da mesma equipe."
  },
  {
    question: "Alunos têm desconto em upgrades?",
    answer: "Alunos Experience têm 20% de desconto em upgrades no primeiro ano."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Esclarecimentos{" "}
            <span className="text-accent">
              Frequentes
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border-0 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card p-8 rounded-2xl shadow-soft max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão específica sobre o método LowerLift® e escolher a melhor modalidade para você.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = "Olá! Tenho algumas dúvidas sobre a mentoria LowerLift®. Gostaria de conversar com um especialista.";
                const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-flex items-center gap-2"
            >
              Falar com Especialista
              <span>💬</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}