import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
  const focusAreas = [
    "Hormonal balance",
    "Menstrual regularity",
    "Sperm count, motility & quality",
    "Thyroid & metabolic health",
    "Customised Care with Expert Guidance",
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="container mx-auto relative z-10">
        {/* Outer highlighted box */}
        <div className="border-4 border-primary/40 rounded-3xl bg-card/80 backdrop-blur-sm p-6 lg:p-12 shadow-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl lg:text-4xl font-display font-bold text-foreground mb-10 relative z-10"
          >
            Understanding Your Journey
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative z-10">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-accent/10 rounded-2xl p-8 lg:p-10 border-[3px] border-accent/50 shadow-[0_0_25px_-5px_hsl(var(--accent)/0.25)] relative"
            >
              <div className="absolute -top-4 left-6 bg-accent text-accent-foreground px-5 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-cta">
                ⚠ The Problem
              </div>
              <div className="mt-4">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                  Trying for years without success can feel emotionally draining
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  Hormonal treatments, repeated IVF cycles, and uncertainty only add more stress. 
                  The constant hoping and waiting takes a toll on your mental and physical health.
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary/10 rounded-2xl p-8 lg:p-10 border-[3px] border-primary/50 shadow-[0_0_25px_-5px_hsl(var(--primary)/0.25)] relative"
            >
              <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-cta">
                ✅ Our Solution
              </div>
              <div className="mt-4">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                  At Dr. Fathis Clinic, fertility is treated as a whole-body system
                </h3>
                <p className="text-muted-foreground mb-6">
                  Not just ovaries or sperm. We address the complete picture.
                </p>
                
                <div className="space-y-3">
                  {focusAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 bg-primary/5 rounded-lg px-4 py-2 border border-primary/20"
                    >
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
