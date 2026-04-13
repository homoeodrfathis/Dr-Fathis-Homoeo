import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookNowBanner = () => {
  const handleBookNow = () => {
    window.open("https://payments.cashfree.com/forms/fathishomoeo", "_blank");
  };

  return (
    <section className="py-8 bg-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-lg font-display font-bold text-foreground">
            Start Your Fertility Journey Today —{" "}
            <span className="text-accent line-through">₹800</span>{" "}
            <span className="text-primary">₹399</span>
          </p>
          <Button variant="cta" size="sm" onClick={handleBookNow}>
            <MessageCircle className="w-4 h-4" />
            Book Now @ ₹399
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookNowBanner;
