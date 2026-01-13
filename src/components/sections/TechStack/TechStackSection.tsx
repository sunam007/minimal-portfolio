import Container from "@/components/layout/Container";
import TechStackHeader from "./TechStackHeader";
import TechStackGrid from "./TechStackGrid";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative bg-black py-20 sm:py-24">
      <Container>
        <TechStackHeader />
        <TechStackGrid />
      </Container>
    </section>
  );
}
