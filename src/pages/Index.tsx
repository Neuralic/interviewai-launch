import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import Testimonials from "@/components/landing/Testimonials";
import StatsSection from "@/components/landing/StatsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import DemoSection from "@/components/landing/DemoSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Testimonials />
      <StatsSection />
      <HowItWorks />
      <FeaturesGrid />
      <DemoSection />
      <IntegrationsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
