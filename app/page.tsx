import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import BestSellers from "@/components/home/BestSellers";
import AtmosphereSection from "@/components/home/AtmosphereSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <BestSellers />
      <AtmosphereSection />
    </main>
  );
}