import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-bold mb-4">
              Dr. Fathis Homoeo & Holistic Clinic
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Specializing in holistic fertility treatment for men and women through natural, root-cause based homoeopathy.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary-glow" />
                <a href="tel:+918300798211" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +91 8300798211
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-primary-glow" />
                <a href="mailto:homoeodrfathis@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  homoeodrfathis@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-primary-glow" />
                <span className="text-primary-foreground/70 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Clinic Address</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-primary-glow flex-shrink-0" />
              <div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Door No 6, 17, 3rd Ave,<br />
                  Sarvamangala Colony, Krupa Colony,<br />
                  Ashok Nagar, Chennai,<br />
                  Tamil Nadu 600083
                </p>
                <a 
                  href="https://share.google/GfeyjpjYy5WD65e9x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-glow hover:underline text-sm mt-2"
                >
                  View on Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Dr. Fathima", "Conditions Treated", "Testimonials", "Book Consultation", "FAQs"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Dr. Fathis Homoeo & Holistic Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
