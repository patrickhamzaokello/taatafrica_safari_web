import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq_section";
import { HeroSection } from "@/components/landing_hero";
import { FeaturedSafaris } from "@/components/featured_safari";
import { ExperienceSection } from "@/components/experience-section";
import { CharitySection } from "@/components/charity-section";
import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { GallerySection } from "@/components/gallery-section";
import { CulturalExperience } from "@/components/cultural-experience";
import { SafariPackages } from "@/components/safari-packages";
import { TestimonialsSection } from "@/components/testimonial-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <FeaturedSafaris />

      <WhyChooseUsSection />

      <ExperienceSection />

      <SafariPackages />

      <CulturalExperience />

      <TestimonialsSection />

      <GallerySection />

      <AboutSection />

      <CharitySection />

      <BlogSection />

      <FAQSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
