import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ConditionsSection from "@/components/ConditionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationOfferSection from "@/components/ConsultationOfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import BookNowBanner from "@/components/BookNowBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <ProblemSolutionSection />
        <BookNowBanner />
        <section id="conditions">
          <ConditionsSection />
        </section>
        <BookNowBanner />
        <section id="about">
          <WhyChooseUsSection />
        </section>
        <BookNowBanner />
        <DoctorSection />
        <BookNowBanner />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <ConsultationOfferSection />
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
