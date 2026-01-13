export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

export const SITE_CONFIG = {
  name: "Asaduzzaman Sunam",
  role: "Full-Stack Developer",
  impactStatement: "Building tomorrow's web & AI products today",
  resumePath: "/resume.pdf",
  // Alternative: Fetch from Strapi CMS
  // resumePath: process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resume",
} as const;

// Tech Stack Categories
export const TECH_CATEGORIES = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
  { id: "tools", label: "Tools" },
] as const;

// Tech Stack Data
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: tech-stack
  Fields:
  - name: Text (required)
  - category: Enumeration (frontend, backend, database, devops, tools)
  - icon: Text (Simple Icons slug, e.g., "react", "nodejs")
  - order: Number (optional, for custom ordering)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tech-stacks?populate=*
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tech-stacks?populate=*`);
  const data = await response.json();
  const techStack = data.data.map(item => ({
    name: item.attributes.name,
    category: item.attributes.category,
    icon: item.attributes.icon,
  }));
*/
export const TECH_STACK = [
  // Frontend
  { name: "React", category: "frontend", icon: "react" },
  { name: "Next.js", category: "frontend", icon: "nextdotjs" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
  { name: "HTML5", category: "frontend", icon: "html5" },
  { name: "CSS3", category: "frontend", icon: "css3" },

  // Backend
  { name: "Node.js", category: "backend", icon: "nodedotjs" },
  { name: "Express", category: "backend", icon: "express" },
  { name: "FastAPI", category: "backend", icon: "fastapi" },
  { name: "GraphQL", category: "backend", icon: "graphql" },

  // Database
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "MongoDB", category: "database", icon: "mongodb" },
  { name: "Prisma", category: "database", icon: "prisma" },

  // DevOps
  { name: "Docker", category: "devops", icon: "docker" },
  { name: "Git", category: "devops", icon: "git" },
  { name: "Linux", category: "devops", icon: "linux" },

  // Tools
  { name: "VS Code", category: "tools", icon: "vscode" },
  { name: "Postman", category: "tools", icon: "postman" },
  { name: "Figma", category: "tools", icon: "figma" },
] as const;
