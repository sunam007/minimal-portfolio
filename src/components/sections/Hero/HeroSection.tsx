import Container from "@/components/layout/Container";
import AnimatedGridBg from "./AnimatedGridBg";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      <AnimatedGridBg />
      <Container className="relative z-10 py-20">
        <div className="flex flex-col items-center justify-center space-y-12">
          <HeroContent />
          <HeroActions />
        </div>
      </Container>
    </section>
  );
}
