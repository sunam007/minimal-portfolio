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

// Social Links
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: social-link
  Fields:
  - platform: Enumeration (linkedin, github, youtube, twitter, etc.)
  - url: Text (URL, required)
  - order: Number (optional, for custom ordering)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/social-links?sort=order:asc
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/social-links?sort=order:asc`);
  const data = await response.json();
  const socialLinks = data.data.map(item => ({
    platform: item.attributes.platform,
    url: item.attributes.url,
  }));
*/
export const SOCIAL_LINKS = [
  { platform: "linkedin", url: "https://linkedin.com/in/yourprofile" },
  { platform: "github", url: "https://github.com/yourusername" },
  { platform: "youtube", url: "https://youtube.com/@yourchannel" },
] as const;

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

// Projects Data (homepage featured projects)
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: project
  Fields:
  - title: Text (required)
  - brief: Text (required, short description)
  - image: Media (Image, required)
  - techStack: JSON (Array of strings, e.g., ["Next.js", "TypeScript"])
  - liveUrl: Text (URL, optional)
  - githubUrl: Text (URL, optional)
  - featured: Boolean (default: false, for homepage display)
  - order: Number (optional, for custom ordering)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[featured][$eq]=true&populate=*
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[featured][$eq]=true&populate=*`);
  const data = await response.json();
  const projects = data.data.map(item => ({
    id: item.id,
    title: item.attributes.title,
    brief: item.attributes.brief,
    image: item.attributes.image.data?.attributes.url || "",
    techStack: item.attributes.techStack || [],
    liveUrl: item.attributes.liveUrl || "",
    githubUrl: item.attributes.githubUrl || "",
  }));
*/
export const PROJECTS = [
  {
    id: "project-1",
    title: "AI-Powered Resume Analyzer",
    brief: "ATS-friendly resume scoring and suggestions with real-time feedback for job seekers.",
    image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=AI+Resume+Analyzer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com/resume-analyzer",
    githubUrl: "https://github.com/username/resume-analyzer",
  },
  {
    id: "project-2",
    title: "Project Management Dashboard",
    brief: "Minimalist Kanban-style dashboard for tracking sprints, tasks, and team velocity.",
    image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=Project+Dashboard",
    techStack: ["React", "Node.js", "MongoDB", "Docker"],
    liveUrl: "https://example.com/project-dashboard",
    githubUrl: "https://github.com/username/project-dashboard",
  },
  {
    id: "project-3",
    title: "Developer Portfolio Platform",
    brief: "Customizable portfolio generator for developers with theming and content management.",
    image: "https://via.placeholder.com/800x600/000000/FFFFFF?text=Portfolio+Platform",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com/dev-portfolio",
    githubUrl: "https://github.com/username/dev-portfolio",
  },
] as const;

// Experience Data (work history)
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: experience
  Fields:
  - company: Text (required)
  - role: Text (required)
  - startDate: Date (required, format: YYYY-MM)
  - endDate: Date (optional, null for "Present")
  - description: Text (required, long text)
  - techStack: JSON (Array of strings, e.g., ["Next.js", "TypeScript"])
  - order: Number (optional, for custom ordering)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/experiences?sort=startDate:desc&populate=*
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/experiences?sort=startDate:desc&populate=*`);
  const data = await response.json();
  const experiences = data.data.map(item => ({
    id: item.id,
    company: item.attributes.company,
    role: item.attributes.role,
    startDate: item.attributes.startDate,
    endDate: item.attributes.endDate || "Present",
    description: item.attributes.description,
    techStack: item.attributes.techStack || [],
  }));
*/
export const EXPERIENCES = [
  {
    id: "exp-1",
    company: "Tech Startup Inc.",
    role: "Senior Full-Stack Developer",
    startDate: "2023-01",
    endDate: "Present",
    description: "Leading development of scalable web applications using modern frameworks. Architected microservices infrastructure and mentored junior developers.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "GraphQL"],
  },
  {
    id: "exp-2",
    company: "Digital Agency",
    role: "Full-Stack Developer",
    startDate: "2021-06",
    endDate: "2022-12",
    description: "Built client-facing web applications and REST APIs. Collaborated with design teams to implement pixel-perfect UIs and optimized application performance.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    company: "Software Solutions",
    role: "Frontend Developer",
    startDate: "2020-01",
    endDate: "2021-05",
    description: "Developed responsive user interfaces and integrated with backend APIs. Improved code quality through code reviews and best practices.",
    techStack: ["React", "TypeScript", "CSS3", "HTML5"],
  },
] as const;

// About Section Data
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: about
  Fields:
  - bio: Rich Text (required, 1-2 paragraphs)
  - education: Component (repeatable)
    - degree: Text (required)
    - institution: Text (required)
    - year: Text (required)
  - interests: JSON (Array of strings)
  - profileImage: Media (Image, required)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?populate=*
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?populate=*`);
  const data = await response.json();
  const about = {
    bio: data.data.attributes.bio,
    education: data.data.attributes.education || [],
    interests: data.data.attributes.interests || [],
    profileImage: data.data.attributes.profileImage.data?.attributes.url || "",
  };
*/
export const ABOUT = {
  bio: "I'm a full-stack developer passionate about building scalable web applications and AI-powered solutions. With expertise spanning from frontend frameworks to backend architecture, I focus on creating products that combine elegant design with robust functionality.\n\nCurrently, I'm exploring the intersection of web development and artificial intelligence, working on projects that leverage modern technologies to solve real-world problems. I believe in writing clean, maintainable code and contributing to open-source communities.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2020",
    },
  ],
  interests: [
    "Open Source Contributions",
    "AI/ML Research",
    "Web Performance Optimization",
    "System Architecture Design",
  ],
  profileImage: "https://via.placeholder.com/400x500/000000/FFFFFF?text=Profile+Photo",
} as const;
