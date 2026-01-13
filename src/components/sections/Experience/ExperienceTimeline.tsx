import ExperienceItem from "./ExperienceItem";
import { EXPERIENCES } from "@/lib/constants";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-0">
      {EXPERIENCES.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          company={experience.company}
          role={experience.role}
          startDate={experience.startDate}
          endDate={experience.endDate}
          description={experience.description}
          techStack={experience.techStack}
          isLast={index === EXPERIENCES.length - 1}
        />
      ))}
    </div>
  );
}
