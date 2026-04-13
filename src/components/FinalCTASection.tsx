import { motion } from "framer-motion";
import { MessageCircle, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918300798211?text=Hi, I'd like to start my fertility journey with a consultation", "_blank");
  };

  const handleBookNow = () => {
    window.open("https://payments.cashfree.com/forms/fathishomoeo", "_blank");
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Purple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6 text-balance">
            Don't Let Fear or Delay Decide Your Fertility Journey
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Every day you wait is a day lost. Take the first step today towards making your dreams of parenthood a reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="xl" 
              onClick={handleBookNow}
              className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 shadow-lg shadow-purple-900/30 font-semibold"
            >
              <ExternalLink className="w-6 h-6" />
              Book Now @ ₹399
            </Button>
          </div>

          <p className="text-white/70">
            Book your ₹399 consultation today and get personalized guidance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
