import { ProgressBar } from "@/components/ProgressBar";
import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { MethodSection } from "@/components/MethodSection";
import { PackagesSection } from "@/components/PackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FoundersSection } from "@/components/FoundersSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      
      <main>
        <Hero />
        <ProblemsSection />
        <MethodSection />
        <PackagesSection />
        <TestimonialsSection />
        <FAQSection />
        <FoundersSection />
        <FinalCTA />
      </main>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            const message = "Olá! Tenho interesse na mentoria LowerLift®. Gostaria de mais informações.";
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-glow hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Contato via WhatsApp"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
        </button>
      </div>
    </div>
  );
};

export default Index;
