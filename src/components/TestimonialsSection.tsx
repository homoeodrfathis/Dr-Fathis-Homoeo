import { motion } from "framer-motion";
import { Star, Shield } from "lucide-react";

import testimonialVideo1 from "@/assets/testimonial-video-1.mov";
import testimonialVideo3 from "@/assets/testimonial-video-3.mp4";
import testimonialVideo4 from "@/assets/testimonial-video-4.mp4";
import testimonialImage1 from "@/assets/testimonial-image-1.jpeg";
import testimonialImage2 from "@/assets/testimonial-image-2.jpeg";
import googleReview1 from "@/assets/google-review-1.jpeg";
import googleReview2 from "@/assets/google-review-2.jpeg";
import googleReviewGodwin from "@/assets/google-review-godwin.png";
import googleReviewLibina from "@/assets/google-review-libina.png";

const TestimonialsSection = () => {
  const videoTestimonials = [
    { id: 1, src: testimonialVideo1, title: "Patient Success Story 1" },
    { id: 2, src: testimonialVideo3, title: "Patient Success Story 2" },
    { id: 3, src: testimonialVideo4, title: "Patient Success Story 3" },
  ];

  const imageTestimonials = [
    { id: 1, src: testimonialImage1, alt: "Successful case without surgery" },
    { id: 2, src: testimonialImage2, alt: "Happy patient testimonial" },
  ];

  const googleReviews = [
    { id: 1, src: googleReview1, alt: "Google Review 1" },
    { id: 2, src: googleReview2, alt: "Google Review 2" },
    { id: 3, src: googleReviewGodwin, alt: "Google Review - Godwin K" },
    { id: 4, src: googleReviewLibina, alt: "Google Review - Libina Jenifer" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Patient Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Real Stories of Hope and Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of couples who found their path to parenthood with us
          </p>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4 bg-primary-soft px-6 py-3 rounded-full border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold text-foreground">500+ Fertility Cases Treated Successfully</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-accent fill-accent" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-xl overflow-hidden shadow-soft"
            >
              <video
                src={video.src}
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>

        {/* Image Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {imageTestimonials.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-soft border border-border"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            What Our Patients Say on Google
          </h3>
          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">5.0 Rating</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {googleReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-hover transition-all"
            >
              <img
                src={review.src}
                alt={review.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
