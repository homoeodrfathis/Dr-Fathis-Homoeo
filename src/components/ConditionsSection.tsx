import { motion } from "framer-motion";
import { 
  Heart, 
  Droplets, 
  Activity, 
  HelpCircle, 
  Thermometer, 
  Syringe,
  Baby,
  Stethoscope
} from "lucide-react";

const ConditionsSection = () => {
  const conditions = [
    { icon: Heart, title: "PCOS & Irregular Periods", description: "Restore hormonal balance and regular cycles" },
    { icon: Droplets, title: "Low Sperm Count & Motility", description: "Improve sperm quality naturally" },
    { icon: Activity, title: "Hormonal Imbalance", description: "Address underlying endocrine issues" },
    { icon: HelpCircle, title: "Unexplained Infertility", description: "Find answers where others couldn't" },
    { icon: Baby, title: "Low AMH & Egg Quality", description: "Enhance ovarian reserve and egg health" },
    { icon: Thermometer, title: "Fertility Thyroid Related Issues", description: "Balance thyroid for conception" },
    { icon: Syringe, title: "Varicocele", description: "Non-surgical treatment approach" },
    { icon: Stethoscope, title: "Repeated & Failed IUI & IVF", description: "Natural support for fertility success" },
    { icon: Droplets, title: "Sperm Morphological Defect", description: "Improve sperm shape and structure naturally" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-alt py-20 lg:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Conditions We Treat
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Root-Cause Based <span className="text-primary">Holistic Fertility Solution</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in treating the root causes of fertility issues in both men and women
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 border border-border hover:border-primary/30 cursor-default"
            >
              <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <condition.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{condition.title}</h3>
              <p className="text-sm text-muted-foreground">{condition.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsSection;
