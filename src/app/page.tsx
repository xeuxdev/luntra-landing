import { WhatYouCanBuildSection } from "@/components/sections/build-section";
import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoSection } from "@/components/sections/info-section";
import { PhasesSection } from "@/components/sections/phases-section";
import { SecuritySection } from "@/components/sections/security-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <SecuritySection />
      <WhatYouCanBuildSection />
      <TestimonialSection />
      <PhasesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
