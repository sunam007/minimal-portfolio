interface ExperienceItemProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: readonly string[];
  isLast?: boolean;
}

export default function ExperienceItem({
  company,
  role,
  startDate,
  endDate,
  description,
  techStack,
  isLast = false,
}: ExperienceItemProps) {
  const formatDate = (dateStr: string): string => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Timeline dot and connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-white border-2 border-black z-10"></div>
        {!isLast && (
          <div className="w-px h-full bg-white/10 mt-2 flex-1"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 sm:pb-12">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">{company}</h3>
            <p className="text-sm sm:text-base text-white/80 font-medium">{role}</p>
          </div>
          <p className="text-xs sm:text-sm text-white/50 font-medium">
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
