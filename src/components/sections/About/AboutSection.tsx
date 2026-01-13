import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import { ABOUT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-black border-t border-white/10 py-20 sm:py-24"
    >
      <Container className="space-y-10 sm:space-y-12">
        <header className="space-y-4">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            About
          </h2>
        </header>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Content - 70% */}
          <div className="flex-1 md:w-[70%]">
            <AboutContent
              bio={ABOUT.bio}
              education={ABOUT.education}
              interests={ABOUT.interests}
            />
          </div>

          {/* Image - 30% */}
          <div className="flex-shrink-0 md:w-[30%]">
            <AboutImage imageUrl={ABOUT.profileImage} alt="Profile Photo" />
          </div>
        </div>
      </Container>
    </section>
  );
}
