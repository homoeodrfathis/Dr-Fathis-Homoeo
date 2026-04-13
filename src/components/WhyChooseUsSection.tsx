import { motion } from "framer-motion";
import { Check, Leaf, Shield, User, Heart } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "Root-Cause Based Treatment",
      description: "We don't follow one-size-fits-all protocols. Each patient receives care based on their unique body constitution.",
    },
    {
      icon: User,
      title: "Individualized Medicines",
      description: "No two patients are treated the same. Your medicine is selected specifically for your symptoms and body type.",
    },
    {
      icon: Shield,
      title: "No Artificial Hormones",
      description: "Avoid the side effects of synthetic hormones. Our natural approach supports your body's innate healing capacity.",
    },
    {
      icon: Heart,
      title: "Safe & Gentle",
      description: "Homoeopathic medicines are non-toxic, safe for long-term use, and have no harmful side effects.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
              Why Holistic Fertility Works When Other Methods Fail
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our approach addresses the underlying imbalances that prevent conception, offering hope even after failed conventional treatments.
            </p>

            <div className="space-y-4">
              {["Supports natural conception & IVF outcomes", "Safe for all ages and conditions", "Proven results with 500+ cases"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
