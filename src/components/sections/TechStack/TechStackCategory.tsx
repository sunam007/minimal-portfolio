import TechStackMarquee from "./TechStackMarquee";
import { TECH_STACK } from "@/lib/constants";

interface TechStackCategoryProps {
  categoryId: string;
  categoryLabel: string;
}

export default function TechStackCategory({
  categoryId,
  categoryLabel,
}: TechStackCategoryProps) {
  // Filter technologies by category
  const categoryTechs = TECH_STACK.filter(
    (tech) => tech.category === categoryId
  );

  if (categoryTechs.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-xl sm:text-2xl font-medium text-white mb-8">
        {categoryLabel}
      </h3>
      <TechStackMarquee items={categoryTechs} />
    </div>
  );
}
