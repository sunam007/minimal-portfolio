import Link from "next/link";

interface ProjectContentProps {
  title: string;
  brief: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectContent({
  title,
  brief,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectContentProps) {
  return (
    <div className="flex flex-col justify-between h-full gap-4 sm:gap-6">
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/70 max-w-xl">{brief}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 px-3 py-1 text-xs sm:text-[0.8rem] uppercase tracking-wide text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Link
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm font-medium px-4 py-2 rounded-md bg-white text-black hover:bg-white/90 transition-colors"
        >
          View Live
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm font-medium px-4 py-2 rounded-md border border-white/25 text-white hover:bg-white hover:text-black transition-colors"
        >
          View Code
        </Link>
      </div>
    </div>
  );
}

