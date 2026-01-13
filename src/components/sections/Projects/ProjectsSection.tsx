import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-black border-t border-white/10 py-20 sm:py-24"
    >
      <Container className="space-y-10 sm:space-y-12">
        <header className="space-y-4">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              Featured Projects
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-white/60">
              A snapshot of recent products where I owned the end-to-end
              experience—from architecture and APIs to polished UI.
            </p>
          </div>
        </header>

        <div className="space-y-6 sm:space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              brief={project.brief}
              image={project.image}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <a
            href="/projects"
            className="text-xs sm:text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            View all projects
          </a>
        </div>
      </Container>
    </section>
  );
}

