import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoSection } from "@/components/sections/info-section";
import { SecuritySection } from "@/components/sections/security-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <SecuritySection />
      <TestimonialSection />
    </main>
  );
}
