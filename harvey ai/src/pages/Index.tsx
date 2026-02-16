import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import MetricsSection from "@/components/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsGrid from "@/components/ProductsGrid";
import IntegrationsSection from "@/components/IntegrationsSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValueProps />
        <MetricsSection />
        <TestimonialsSection />
        <ProductsGrid />
        <IntegrationsSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
