import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Will this treatment work for me?",
      answer: "Homoeopathic treatment is highly individualized. We assess your unique constitution, symptoms, and medical history to create a personalized treatment plan. While results vary, our approach has helped over 500 patients with diverse fertility challenges including PCOS, low sperm count, hormonal imbalances, and even failed IVF cases.",
    },
    {
      question: "How long does treatment take?",
      answer: "Treatment duration depends on your specific condition and how long you've been trying. Typically, patients see improvements in 3-6 months, with many achieving conception within 6-12 months. We focus on sustainable results, not quick fixes.",
    },
    {
      question: "Can this help after failed IVF?",
      answer: "Yes! Many couples come to us after failed IVF cycles. Our holistic approach can help improve egg quality, sperm health, and uterine environment, either for natural conception or to enhance success in future IVF attempts.",
    },
    {
      question: "Is treatment safe for long-term use?",
      answer: "Absolutely. Homoeopathic medicines are natural, non-toxic, and have no harmful side effects. They work gently with your body and are safe for extended use without the risks associated with synthetic hormones.",
    },
    {
      question: "Do you treat male fertility also?",
      answer: "Yes, we specialize in both male and female fertility. For men, we address low sperm count, poor motility, morphology issues, varicocele, and hormonal imbalances. Treating both partners often leads to better outcomes.",
    },
    {
      question: "Do you offer online consultation?",
      answer: "Yes, we offer convenient online consultations for patients across India and abroad. You can book a video consultation via WhatsApp or phone. Medicines can be delivered to your doorstep.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to your most pressing questions about our fertility treatment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft data-[state=open]:shadow-hover transition-all"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
