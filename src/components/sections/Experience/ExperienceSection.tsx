import Container from "@/components/layout/Container";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-black border-t border-white/10 py-20 sm:py-24"
    >
      <Container className="space-y-10 sm:space-y-12">
        <ExperienceHeader />
        <ExperienceTimeline />
      </Container>
    </section>
  );
}
