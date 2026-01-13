"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
  SiLinux,
  SiVscodium,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { IconType } from "react-icons";

interface TechStackItemProps {
  name: string;
  icon: string;
}

// Map icon slugs to react-icons/si components
const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss3,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  fastapi: SiFastapi,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  docker: SiDocker,
  git: SiGit,
  linux: SiLinux,
  vscode: SiVscodium,
  postman: SiPostman,
  figma: SiFigma,
};

const getIconComponent = (iconSlug: string): IconType | null => {
  return iconMap[iconSlug.toLowerCase()] || null;
};

export default function TechStackItem({ name, icon }: TechStackItemProps) {
  const IconComponent = getIconComponent(icon);

  return (
    <div 
      className="relative group flex items-center justify-center p-4 transition-all duration-200 hover:scale-110 cursor-default"
      title={name}
    >
      <div className="text-4xl sm:text-5xl md:text-6xl text-white/70 group-hover:text-white transition-colors">
        {IconComponent ? (
          <IconComponent />
        ) : (
          <div className="w-12 h-12 bg-white/20 rounded"></div>
        )}
      </div>
      {/* Custom Tooltip - positioned below the icon */}
      <span className="tech-tooltip">{name}</span>
    </div>
  );
}
