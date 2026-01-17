"use client";

import { EXPERIENCES } from "@/lib/constants";

const calculateTotalYears = (
  experiences: Array<(typeof EXPERIENCES)[number]>
): string => {
  if (experiences.length === 0) return "0+ Years of Experience";

  const dates = experiences.flatMap((exp) => {
    const start = new Date(exp.startDate + "-01");
    const end =
      exp.endDate === "Present" ? new Date() : new Date(exp.endDate + "-01");
    return { start, end };
  });

  const earliestStart = new Date(
    Math.min(...dates.map((d) => d.start.getTime()))
  );
  const latestEnd = new Date(Math.max(...dates.map((d) => d.end.getTime())));

  const yearsDiff =
    (latestEnd.getTime() - earliestStart.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);
  const years = Math.floor(yearsDiff);

  return `${years}+ Years of Experience`;
};

export default function ExperienceHeader() {
  const totalYears = calculateTotalYears(EXPERIENCES);

  return (
    <header className="space-y-4">
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/50">
        Career
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Experience
        </h2>
        <p className="text-sm sm:text-base text-white/60">{totalYears}</p>
      </div>
    </header>
  );
}
