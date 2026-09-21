import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PurposeSection } from "@/components/purpose-section"
import { ProjectsSection } from "@/components/projects-section"
import { IngredientsStorySection } from "@/components/ingredients-story-section"
import { ServicesSection } from "@/components/services-section"
import { ConsultingSection } from "@/components/consulting-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PurposeSection />
      <ProjectsSection />
      <IngredientsStorySection />
      <ServicesSection />
      <ConsultingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
