import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

interface ProjectCardProps {
  title: string;
  brief: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  brief,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-5 sm:p-6 lg:p-8">
        <div className="sm:w-[40%] w-full">
          <ProjectImage title={title} src={image} />
        </div>
        <div className="sm:w-[60%] w-full">
          <ProjectContent
            title={title}
            brief={brief}
            techStack={techStack}
            liveUrl={liveUrl}
            githubUrl={githubUrl}
          />
        </div>
      </div>
    </article>
  );
}

