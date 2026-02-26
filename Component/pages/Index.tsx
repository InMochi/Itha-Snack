import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PromoSection from "@/components/PromoSection";
import BuySection from "@/components/BuySection";
import FindUsSection from "@/components/FindUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <TestimonialsSection />
      <PromoSection />
      <BuySection />
      <FindUsSection />
      <Footer />
    </div>
  );
};

export default Index;
