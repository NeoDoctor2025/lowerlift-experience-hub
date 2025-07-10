import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é a diferença do método LowerLift® para outras técnicas cervicais?",
    answer: "O LowerLift® trabalha com camadas anatômicas profundas frequentemente negligenciadas por técnicas convencionais. Nossa abordagem permite resultados mais duradouros (10+ anos) com menor taxa de revisão, enquanto métodos superficiais geralmente necessitam retoques em 3-5 anos."
  },
  {
    question: "Preciso ter experiência prévia em rejuvenescimento cervical?",
    answer: "Não é obrigatório, mas é recomendável ter conhecimentos básicos em cirurgia plástica facial. Nosso método é progressivo e adaptamos o conteúdo ao nível de cada participante. A modalidade Essentials é ideal para iniciantes, enquanto a Experience oferece maior profundidade técnica."
  },
  {
    question: "Quanto tempo leva para dominar completamente a técnica?",
    answer: "Com nossa metodologia estruturada, a maioria dos cirurgiões consegue executar o procedimento com segurança após a mentoria. O domínio completo vem com a prática - estimamos que após 20-30 casos supervisionados remotamente, você terá total confiança na técnica."
  },
  {
    question: "Há suporte pós-mentoria?",
    answer: "Sim! Todas as modalidades incluem suporte pós-curso com variação no tempo: Essentials (3 meses), Experience (6 meses), At Home (12 meses). Além disso, você terá acesso ao grupo VIP no WhatsApp e sessões de mentoria online periódicas."
  },
  {
    question: "Como é calculado o ROI da mentoria?",
    answer: "Nossos mentoreados relatam aumento médio de 200-400% nos honorários de procedimentos cervicais. Considerando que um procedimento LowerLift® pode ser precificado 3x mais que técnicas convencionais, o investimento se paga tipicamente nos primeiros 2-4 casos."
  },
  {
    question: "A técnica é adequada para todos os tipos de pacientes?",
    answer: "O LowerLift® é versátil e pode ser adaptado para diferentes idades, tipos de pele e graus de ptose cervical. Durante a mentoria, ensinamos as indicações específicas, contraindicações e como personalizar a abordagem para cada caso."
  },
  {
    question: "Quais materiais e instrumentais são necessários?",
    answer: "Fornecemos lista completa de materiais e instrumentais necessários. Na modalidade Experience, incluímos um kit básico. Na At Home, o kit é completo. Também orientamos sobre fornecedores confiáveis e negociação de preços."
  },
  {
    question: "Como funciona a mentoria At Home?",
    answer: "Na modalidade At Home, nossa equipe vai até sua clínica por 3-7 dias (duração personalizada). Analisamos sua estrutura, treinamos sua equipe, implementamos protocolos, e você realiza os primeiros casos com supervisão direta. É a experiência mais completa que oferecemos."
  },
  {
    question: "Há possibilidade de parcelamento do investimento?",
    answer: "Sim, oferecemos condições especiais de pagamento para todas as modalidades. Entre em contato via WhatsApp para discutir a melhor forma de pagamento para seu perfil. Também oferecemos desconto para pagamento à vista."
  },
  {
    question: "O certificado é reconhecido internacionalmente?",
    answer: "Sim, nosso certificado é reconhecido por associações médicas nacionais e internacionais. Além disso, você pode usar nossa metodologia em congressos e publicações científicas, com o devido crédito à Deep Neck Academy."
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
            Perguntas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos suas principais dúvidas sobre o método LowerLift® e as modalidades de mentoria
          </p>
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
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-flex items-center gap-2"
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