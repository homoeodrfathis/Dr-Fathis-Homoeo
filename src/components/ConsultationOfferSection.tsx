import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultationOfferSection = () => {
  const includes = [
    "Detailed fertility assessment",
    "Root-cause analysis",
    "Personalized treatment roadmap",
  ];

  const handleBookNow = () => {
    window.open("https://payments.cashfree.com/forms/fathishomoeo", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+918300798211";
  };

  return (
    <section className="section-alt py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 lg:p-12 shadow-hover border border-border relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
                >
                  <Clock className="w-4 h-4" />
                  Limited Time Offer
                </motion.div>
                
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                  Start Your Fertility Journey with Expert Guidance
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Take the first step towards parenthood with a comprehensive consultation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* What's Included */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Your consultation includes:
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Price Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-2xl p-6 lg:p-8 text-center border border-primary/20"
                >
                  <p className="text-muted-foreground mb-2">Fertility Consultation</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">₹800</span>
                    <span className="text-5xl font-display font-bold text-primary">₹399</span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-6">50% OFF — Limited-time offer!</p>

                  <div className="space-y-3">
                    <Button variant="cta" size="lg" className="w-full" onClick={handleBookNow}>
                      <MessageCircle className="w-5 h-5" />
                      Book on WhatsApp
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationOfferSection;
