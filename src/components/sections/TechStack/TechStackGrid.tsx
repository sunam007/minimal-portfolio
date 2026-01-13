import TechStackMarquee from "./TechStackMarquee";
import { TECH_STACK } from "@/lib/constants";

export default function TechStackGrid() {
  // Order technologies by category: Frontend → Backend → Database → DevOps → Tools
  const categoryOrder = ["frontend", "backend", "database", "devops", "tools"];

  const orderedTechStack = categoryOrder.flatMap((categoryId) =>
    TECH_STACK.filter((tech) => tech.category === categoryId)
  );

  return <TechStackMarquee items={orderedTechStack} />;
}
