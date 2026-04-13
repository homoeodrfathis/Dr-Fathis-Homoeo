import { motion } from "framer-motion";
import { Award, GraduationCap, Leaf, Users } from "lucide-react";
import doctorProfile from "@/assets/doctor-profile.png";
const DoctorSection = () => {
  const credentials = [
    { icon: GraduationCap, text: "BHMS, MD(HOM)" },
    { icon: Award, text: "9+ Years Experience" },
    { icon: Leaf, text: "Diploma in Yoga" },
    { icon: Users, text: "500+ Patients Treated" },
  ];

  const achievements = [
    "Assistant Professor & Research Scholar",
    "Trained in PCOS Reversing Techniques",
    "Awarded Young Best Doctor – AYUSH CLUB (2025)",
    "Specializes in Male & Female Fertility",
  ];

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
            Meet Your Doctor
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Expert Care from a Trusted Specialist
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover bg-primary-soft aspect-[4/5]">
              <img
                src={doctorProfile}
                alt="Dr. Fathima Shahunaj - Best Young Doctor Award 2025"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-accent text-accent-foreground rounded-xl px-4 py-3 shadow-cta"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold text-sm">Best Doctor 2025</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Dr. Fathima Shahunaj
            </h3>
            <p className="text-primary font-medium mb-6">Homoeopathic Fertility Specialist</p>

            {/* Credential Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border"
                >
                  <cred.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{cred.text}</span>
                </div>
              ))}
            </div>

            {/* Achievements List */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
