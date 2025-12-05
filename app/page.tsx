import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import LookbookSection from "@/components/lookbook-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import WhatsAppCTA from "@/components/whatsapp-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <LookbookSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <WhatsAppCTA />
      <Footer />
    </main>
  )
}
