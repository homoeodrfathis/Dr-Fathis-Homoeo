import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Heart, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const handleWhatsAppGroup = () => {
    window.open("https://wa.me/message/FW4JU74IZRA4F1", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-primary/20 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Animated Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3"
            >
              Thank You! 🎉
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-2"
            >
              Your consultation has been booked successfully!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-sm text-muted-foreground mb-8"
            >
              Our team will reach out to you shortly with your appointment details.
            </motion.p>

            {/* What's Next Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-5 mb-8"
            >
              <h3 className="font-display font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                What Happens Next?
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">1</span>
                  You'll receive a confirmation on WhatsApp & email
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">2</span>
                  Our doctor will personally review your case
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">3</span>
                  Get your personalized fertility treatment plan
                </li>
              </ul>
            </motion.div>

            {/* WhatsApp Group CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center justify-center gap-1">
                <Heart className="w-4 h-4 text-red-400" />
                Join our fertility support community
              </p>
              <Button
                size="xl"
                onClick={handleWhatsAppGroup}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg font-bold text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp Group
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Get daily fertility tips, success stories & exclusive offers
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Dr. Fathis Homoeo & Holistic Clinic — 1000+ Fertility Cases Treated Globally
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYou;
