import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Percent, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import logo from "@/assets/logo-new.jpeg";

const HeroSection = () => {
  const benefits = [
    "Treats root causes like PCOS, hormonal imbalance & low sperm count",
    "No artificial hormones or invasive procedures",
    "Personalized treatment for both men & women",
    "Supports natural conception & IVF success",
  ];

  const handleBookNow = () => {
    window.open("https://payments.cashfree.com/forms/fathishomoeo", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+918300798211";
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center py-16 lg:py-24">
      <div className="container mx-auto">
        {/* Centered Opening Heading with Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight text-balance max-w-4xl mx-auto">
            Struggling to Conceive?{" "}
            <span className="text-primary">Discover a Natural, Root-Cause Based Holistic Fertility Solution</span> for Men & Women
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Holistic fertility care that treats the cause — not just the symptoms — helping couples conceive naturally or improve IVF success safely.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover bg-card">
              <video
                src={heroVideo}
                controls
                autoPlay
                
                loop
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-card rounded-xl px-4 py-3 shadow-hover border border-border"
            >
              <p className="text-sm font-semibold trust-badge">1000+ Fertility Cases Treated Globally</p>
            </motion.div>
          </motion.div>

          {/* 50% Off Deal Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="order-3 lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-6 shadow-hover border border-primary/20 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Percent className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-semibold text-accent">Limited Time Deal</span>
                  </div>
                  <p className="text-lg font-display font-bold text-foreground">
                    <span className="text-primary">50% OFF</span> on AMH, Prolactin & Thyroid Profile
                  </p>
                </div>
              </div>
              <Button variant="cta" size="sm" className="flex-shrink-0 relative z-10" onClick={handleBookNow}>
                Book Now
              </Button>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Dr. Fathis Homoeo & Holistic Clinic
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="cta" size="lg" onClick={handleBookNow}>
                <MessageCircle className="w-5 h-5" />
                Book Now @ ₹399
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="line-through">Original price: ₹800</span>
              <span className="ml-2 text-accent font-semibold">50% OFF — Limited-time offer!</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
