import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Percent, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("offer-popup-dismissed");
      if (!dismissed) setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("offer-popup-dismissed", "true");
  };

  const handleBookNow = () => {
    window.open("https://payments.cashfree.com/forms/fathishomoeo", "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Clock className="w-4 h-4" />
                Limited Time Deal
              </div>

              {/* Offer highlight */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <Percent className="w-8 h-8 text-primary" />
                <span className="text-5xl font-display font-bold text-primary">50% OFF</span>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Fertility Lab Tests
              </h3>

              {/* Tests list */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["AMH", "Prolactin", "Thyroid Profile"].map((test) => (
                  <span
                    key={test}
                    className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold"
                  >
                    {test}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                Get essential fertility tests at half the price. Book your consultation now to avail this offer!
              </p>

              <Button variant="cta" size="lg" className="w-full" onClick={handleBookNow}>
                Book Now & Avail Offer
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup;
