import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import POPIASection from "@/components/POPIASection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BeforeAfterSection />
        <WhatYouGetSection />
        <HowItWorksSection />
        <POPIASection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
