import { Navigation } from "@/components/spa/navigation";
import { HeroSection } from "@/components/spa/hero-section";
import { AboutSection } from "@/components/spa/about-section";
import { ProductsSection } from "@/components/spa/products-section";
import { QuoteSection } from "@/components/spa/quote-section";
import { SpaInfoSection } from "@/components/spa/spa-info-section";
import { ServicesSection } from "@/components/spa/services-section";
import { NewsletterSection } from "@/components/spa/newsletter-section";
import { Footer } from "@/components/spa/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QuoteSection />
      <SpaInfoSection />
      <ProductsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
