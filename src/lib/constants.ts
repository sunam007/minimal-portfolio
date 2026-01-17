export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
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
    image: "https://picsum.photos/id/237/800/600",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com/resume-analyzer",
    githubUrl: "https://github.com/username/resume-analyzer",
  },
  {
    id: "project-2",
    title: "Project Management Dashboard",
    brief: "Minimalist Kanban-style dashboard for tracking sprints, tasks, and team velocity.",
    image: "https://picsum.photos/id/870/800/600",
    techStack: ["React", "Node.js", "MongoDB", "Docker"],
    liveUrl: "https://example.com/project-dashboard",
    githubUrl: "https://github.com/username/project-dashboard",
  },
  {
    id: "project-3",
    title: "Developer Portfolio Platform",
    brief: "Customizable portfolio generator for developers with theming and content management.",
    image: "https://picsum.photos/id/1015/800/600",
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
  profileImage: "https://picsum.photos/id/64/400/500",
} as const;

// Contact Information
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: contact-info
  Fields:
  - email: Email (required)
  - phone: Text (optional)
  - location: Text (optional)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-info
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-info`);
  const data = await response.json();
  const contactInfo = {
    email: data.data.attributes.email,
    phone: data.data.attributes.phone || "",
    location: data.data.attributes.location || "",
  };
*/
export const CONTACT_INFO = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
} as const;

// Blog Posts Data
// Strapi CMS structure (commented for future integration):
/*
  Strapi Content Type: blog-post
  Fields:
  - title: Text (required)
  - excerpt: Text (required, short description)
  - content: Rich Text (required, full blog post content)
  - featuredImage: Media (Image, required)
  - date: Date (required, format: YYYY-MM-DD)
  - category: Text or Enumeration (e.g., "Web Development", "AI/ML", "Tutorials")
  - slug: UID (required, for URL routing)
  - author: Text (required, author name)
  - featured: Boolean (default: false, for homepage featured post)
  - publishedAt: DateTime (required)
  
  API Endpoint: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?filters[featured][$eq]=true&sort=publishedAt:desc&populate=*
  
  Usage:
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts?filters[featured][$eq]=true&sort=publishedAt:desc&populate=*`);
  const data = await response.json();
  const blogPosts = data.data.map(item => ({
    id: item.id,
    title: item.attributes.title,
    excerpt: item.attributes.excerpt,
    content: item.attributes.content,
    featuredImage: item.attributes.featuredImage.data?.attributes.url || "",
    date: item.attributes.date,
    category: item.attributes.category,
    slug: item.attributes.slug,
    author: item.attributes.author,
    featured: item.attributes.featured || false,
  }));
*/
export const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt: "Exploring the latest features in Next.js 15 and how they improve performance, developer experience, and application architecture for modern web applications.",
    content: `<p>Next.js 15 introduces groundbreaking features that revolutionize how we build scalable web applications. In this comprehensive guide, we'll explore the latest enhancements and their practical applications.</p>

<h2>Server Components and Streaming</h2>
<p>One of the most significant improvements in Next.js 15 is the enhanced support for React Server Components. These components run exclusively on the server, reducing the JavaScript bundle size sent to the client and improving initial page load times.</p>

<p>Streaming allows you to progressively render pages, sending HTML to the client as it's generated. This means users can start seeing content faster, especially on slower connections.</p>

<h2>Improved Developer Experience</h2>
<p>The new Turbopack bundler provides significantly faster build times and hot module replacement. Developers can now iterate more quickly, with build times reduced by up to 700% compared to Webpack.</p>

<p>TypeScript support has been enhanced with better type inference and error messages, making it easier to catch bugs during development.</p>

<h2>Performance Optimizations</h2>
<p>Next.js 15 includes automatic image optimization, code splitting, and intelligent prefetching. These features work together to create lightning-fast user experiences while maintaining excellent developer ergonomics.</p>

<p>By leveraging these new features, developers can build applications that scale effortlessly while providing exceptional user experiences.</p>`,
    featuredImage: "https://picsum.photos/id/1005/1200/600",
    date: "2024-01-15",
    category: "Web Development",
    slug: "building-scalable-web-applications-nextjs-15",
    author: "Asaduzzaman Sunam",
    featured: true,
  },
  {
    id: "blog-2",
    title: "AI Integration in Full-Stack Applications",
    excerpt: "A comprehensive guide to integrating AI capabilities into your full-stack applications using modern APIs and frameworks.",
    content: `<p>Integrating artificial intelligence into full-stack applications has become essential for building modern, intelligent software. This guide explores practical approaches to incorporating AI capabilities seamlessly into your applications.</p>

<h2>Understanding AI APIs</h2>
<p>Modern AI services provide RESTful APIs that can be easily integrated into any application stack. Services like OpenAI, Anthropic, and Google's Gemini offer powerful language models that can enhance user experiences.</p>

<p>When integrating AI APIs, consider rate limiting, error handling, and cost management. Implementing proper caching and request batching can significantly improve performance and reduce API costs.</p>

<h2>Backend Integration Patterns</h2>
<p>Create dedicated service layers for AI interactions. This separation of concerns makes it easier to swap AI providers, implement fallbacks, and test your application.</p>

<p>Use environment variables for API keys and configuration. Implement middleware for authentication and request validation before hitting AI endpoints.</p>

<h2>Frontend Considerations</h2>
<p>Design user interfaces that gracefully handle AI responses. Implement loading states, streaming responses, and error handling to provide smooth user experiences.</p>

<p>Consider using WebSockets or Server-Sent Events for real-time AI interactions, especially for chat interfaces or streaming content generation.</p>`,
    featuredImage: "https://picsum.photos/id/1001/800/600",
    date: "2024-01-10",
    category: "AI/ML",
    slug: "ai-integration-full-stack-applications",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-3",
    title: "Optimizing Database Performance with Prisma ORM",
    excerpt: "Best practices for database query optimization, connection pooling, and performance tuning using Prisma ORM in production environments.",
    content: `<p>Prisma ORM provides a powerful abstraction layer for database operations, but optimizing performance requires understanding both Prisma's capabilities and underlying database mechanics.</p>

<h2>Query Optimization</h2>
<p>Use Prisma's select and include options wisely. Only fetch the fields you need, and be strategic about nested relations to avoid N+1 query problems.</p>

<p>Leverage Prisma's query optimization features like findUnique for indexed lookups and use raw queries sparingly, only when necessary for complex operations.</p>

<h2>Connection Pooling</h2>
<p>Configure connection pools appropriately for your application's load. Prisma automatically manages connections, but you can tune pool size based on your database provider's limits.</p>

<p>Monitor connection usage and adjust pool settings based on your application's concurrency patterns and database capacity.</p>

<h2>Indexing Strategies</h2>
<p>Create indexes on frequently queried fields. Use Prisma's schema to define indexes, and regularly analyze query performance to identify optimization opportunities.</p>

<p>Consider composite indexes for multi-field queries and ensure foreign key relationships are properly indexed for join operations.</p>`,
    featuredImage: "https://picsum.photos/id/1002/800/600",
    date: "2024-01-05",
    category: "Backend",
    slug: "optimizing-database-performance-prisma",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-4",
    title: "Shipping Production-Ready FastAPI Services",
    excerpt: "Patterns for structuring FastAPI backends, handling observability, and deploying resilient microservices in production.",
    content: `<p>FastAPI has become the go-to framework for building high-performance Python APIs. This article covers essential patterns for creating production-ready services.</p>

<h2>Project Structure</h2>
<p>Organize your FastAPI application with clear separation of concerns. Use routers for different API endpoints, separate business logic from route handlers, and maintain a clean dependency injection pattern.</p>

<p>Implement proper error handling with custom exception classes and middleware for consistent error responses across your API.</p>

<h2>Observability and Monitoring</h2>
<p>Integrate logging, metrics, and tracing from day one. Use structured logging with correlation IDs to track requests across services.</p>

<p>Implement health check endpoints and integrate with monitoring tools like Prometheus or Datadog to track application performance and errors.</p>

<h2>Deployment Best Practices</h2>
<p>Use ASGI servers like Uvicorn or Gunicorn with Uvicorn workers for production. Configure proper worker counts based on your application's I/O patterns.</p>

<p>Implement graceful shutdowns, connection pooling, and proper environment configuration management for different deployment environments.</p>`,
    featuredImage: "https://picsum.photos/id/1003/800/600",
    date: "2024-01-02",
    category: "Backend",
    slug: "shipping-production-ready-fastapi-services",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-5",
    title: "Mastering TypeScript Advanced Types and Patterns",
    excerpt: "Deep dive into TypeScript's advanced type system including conditional types, mapped types, and utility types for building robust applications.",
    content: `<p>TypeScript's type system goes far beyond basic type annotations. Mastering advanced types enables you to create more robust, maintainable, and self-documenting code.</p>

<h2>Conditional Types</h2>
<p>Conditional types allow you to create types that depend on other types. They use the ternary operator syntax and enable powerful type transformations based on type relationships.</p>

<p>Use conditional types to create utility types that adapt based on input types, making your APIs more flexible and type-safe.</p>

<h2>Mapped Types</h2>
<p>Mapped types iterate over keys of existing types to create new types. They're perfect for creating variations of existing types, like making all properties optional or readonly.</p>

<p>Combine mapped types with conditional types to create sophisticated type transformations that maintain type safety while providing flexibility.</p>

<h2>Utility Types</h2>
<p>TypeScript provides built-in utility types like Partial, Required, Pick, and Omit. Understanding these and creating your own utility types can significantly improve code quality.</p>

<p>Learn to compose utility types to solve complex type challenges and create reusable type patterns for your applications.</p>`,
    featuredImage: "https://picsum.photos/id/1004/800/600",
    date: "2023-12-28",
    category: "Web Development",
    slug: "mastering-typescript-advanced-types-patterns",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-6",
    title: "Docker Containerization Best Practices",
    excerpt: "Essential Docker patterns, multi-stage builds, and optimization techniques for creating efficient and secure containerized applications.",
    content: `<p>Docker has revolutionized how we package and deploy applications. Following best practices ensures your containers are efficient, secure, and maintainable.</p>

<h2>Multi-Stage Builds</h2>
<p>Use multi-stage builds to reduce image size and improve security. Separate build dependencies from runtime dependencies, keeping final images lean and focused.</p>

<p>This approach significantly reduces image size, speeds up deployments, and minimizes attack surface by excluding unnecessary tools and dependencies.</p>

<h2>Layer Caching</h2>
<p>Order your Dockerfile instructions strategically. Place frequently changing instructions at the end and cache stable dependencies early to maximize layer reuse.</p>

<p>Understanding layer caching can dramatically reduce build times and improve CI/CD pipeline efficiency.</p>

<h2>Security Considerations</h2>
<p>Run containers as non-root users, scan images for vulnerabilities, and use minimal base images. Regularly update base images and dependencies to patch security issues.</p>

<p>Implement proper secret management and avoid hardcoding sensitive information in Dockerfiles or images.</p>`,
    featuredImage: "https://picsum.photos/id/1006/800/600",
    date: "2023-12-25",
    category: "DevOps",
    slug: "docker-containerization-best-practices",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-7",
    title: "React Server Components: The Future of Web Development",
    excerpt: "Understanding React Server Components, their benefits, and how they revolutionize data fetching and rendering in modern React applications.",
    content: `<p>React Server Components represent a paradigm shift in how we build React applications, enabling new patterns for data fetching and component composition.</p>

<h2>What Are Server Components?</h2>
<p>Server Components run exclusively on the server, never sending their JavaScript to the client. This reduces bundle size and enables direct database access and server-side data fetching.</p>

<p>Unlike traditional server-side rendering, Server Components can be seamlessly mixed with Client Components, giving you the best of both worlds.</p>

<h2>Benefits and Use Cases</h2>
<p>Server Components excel at data-heavy components, reducing client-side JavaScript and improving initial page load times. They're perfect for content that doesn't require interactivity.</p>

<p>Use Server Components for static content, data fetching, and components that don't need client-side JavaScript. Reserve Client Components for interactive elements.</p>

<h2>Migration Strategies</h2>
<p>Gradually adopt Server Components by identifying components that can be moved server-side. Start with data-fetching components and static content, then expand your usage.</p>

<p>Understanding the boundary between Server and Client Components is crucial for successful adoption and optimal performance.</p>`,
    featuredImage: "https://picsum.photos/id/1008/800/600",
    date: "2023-12-20",
    category: "Frontend",
    slug: "react-server-components-future-web-development",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-8",
    title: "PostgreSQL Performance Tuning and Optimization",
    excerpt: "Advanced techniques for optimizing PostgreSQL databases including indexing strategies, query optimization, and connection pooling.",
    content: `<p>PostgreSQL is a powerful database, but achieving optimal performance requires understanding its internals and applying proven optimization techniques.</p>

<h2>Indexing Strategies</h2>
<p>Create indexes on frequently queried columns, especially foreign keys and columns used in WHERE clauses. Use EXPLAIN ANALYZE to identify missing indexes.</p>

<p>Consider composite indexes for multi-column queries and partial indexes for filtered queries. Monitor index usage and remove unused indexes to improve write performance.</p>

<h2>Query Optimization</h2>
<p>Write efficient queries by avoiding SELECT *, using appropriate JOIN types, and leveraging PostgreSQL's advanced features like window functions and CTEs.</p>

<p>Use prepared statements to improve query planning and execution. Analyze slow queries and optimize them based on actual execution plans.</p>

<h2>Connection Pooling</h2>
<p>Implement connection pooling to manage database connections efficiently. Tools like PgBouncer can help manage connection overhead and improve application scalability.</p>

<p>Configure pool sizes based on your application's concurrency needs and database server capacity to avoid connection exhaustion.</p>`,
    featuredImage: "https://picsum.photos/id/1009/800/600",
    date: "2023-12-15",
    category: "Database",
    slug: "postgresql-performance-tuning-optimization",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-9",
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "Complete guide to designing and implementing RESTful APIs using Node.js and Express with proper error handling and authentication.",
    content: `<p>RESTful APIs remain the foundation of modern web applications. This guide covers best practices for building robust, maintainable APIs with Node.js and Express.</p>

<h2>API Design Principles</h2>
<p>Follow REST conventions: use proper HTTP methods, meaningful resource names, and appropriate status codes. Design your API to be intuitive and self-documenting.</p>

<p>Version your APIs from the start and maintain backward compatibility when possible. Use consistent naming conventions and response formats.</p>

<h2>Error Handling</h2>
<p>Implement comprehensive error handling with custom error classes and middleware. Return consistent error response formats with appropriate HTTP status codes.</p>

<p>Log errors appropriately for debugging while providing user-friendly error messages. Never expose sensitive information in error responses.</p>

<h2>Authentication and Security</h2>
<p>Implement proper authentication using JWT tokens or session-based auth. Use middleware to protect routes and validate user permissions.</p>

<p>Sanitize inputs, validate request data, and implement rate limiting to protect your API from abuse and security vulnerabilities.</p>`,
    featuredImage: "https://picsum.photos/id/1010/800/600",
    date: "2023-12-10",
    category: "Backend",
    slug: "building-restful-apis-nodejs-express",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-10",
    title: "Machine Learning Model Deployment Strategies",
    excerpt: "Exploring different approaches to deploying ML models in production, from containerization to serverless architectures and edge computing.",
    content: `<p>Deploying machine learning models to production requires careful consideration of scalability, latency, and resource constraints. This article explores various deployment strategies.</p>

<h2>Containerization</h2>
<p>Containerize ML models using Docker for consistent deployment across environments. This approach provides isolation, reproducibility, and easy scaling.</p>

<p>Use model serving frameworks like TensorFlow Serving or TorchServe within containers to optimize inference performance and resource usage.</p>

<h2>Serverless Deployment</h2>
<p>Deploy models to serverless platforms for automatic scaling and cost efficiency. This approach works well for models with variable or unpredictable traffic patterns.</p>

<p>Consider cold start latency and model size limitations when choosing serverless deployment. Optimize models for faster startup times.</p>

<h2>Edge Computing</h2>
<p>Deploy models to edge devices for low-latency inference. This requires model optimization techniques like quantization and pruning to fit resource constraints.</p>

<p>Edge deployment enables real-time inference without network latency, making it ideal for applications requiring immediate responses.</p>`,
    featuredImage: "https://picsum.photos/id/1011/800/600",
    date: "2023-12-05",
    category: "AI/ML",
    slug: "machine-learning-model-deployment-strategies",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-11",
    title: "Tailwind CSS v4: What's New and How to Migrate",
    excerpt: "Overview of Tailwind CSS v4 features, breaking changes, and step-by-step migration guide from v3 to v4.",
    content: `<p>Tailwind CSS v4 introduces significant improvements and new features. Understanding these changes is crucial for a smooth migration from v3.</p>

<h2>New Features</h2>
<p>Version 4 brings improved performance, better CSS variable support, and enhanced customization options. The new engine provides faster build times and better developer experience.</p>

<p>New utility classes and improved responsive design features make it easier to build modern, responsive interfaces with less custom CSS.</p>

<h2>Breaking Changes</h2>
<p>Review the migration guide carefully. Some utility classes have been renamed, configuration syntax has changed, and plugin APIs have been updated.</p>

<p>Test your existing styles thoroughly after migration and update any custom configurations to match the new v4 syntax.</p>

<h2>Migration Steps</h2>
<p>Start by updating your package.json and installing v4. Update your configuration file, then gradually test and fix any breaking changes in your styles.</p>

<p>Use the migration tooling provided by Tailwind to identify and fix common migration issues automatically.</p>`,
    featuredImage: "https://picsum.photos/id/1012/800/600",
    date: "2023-11-30",
    category: "Frontend",
    slug: "tailwind-css-v4-whats-new-migrate",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-12",
    title: "GraphQL vs REST: Choosing the Right API Architecture",
    excerpt: "Comprehensive comparison between GraphQL and REST APIs, including use cases, performance considerations, and when to use each approach.",
    content: `<p>Choosing between GraphQL and REST is a critical architectural decision. Both have their strengths, and the right choice depends on your specific use case.</p>

<h2>REST Advantages</h2>
<p>REST is simple, well-understood, and leverages HTTP caching effectively. It's ideal for standard CRUD operations and when you need predictable, cacheable endpoints.</p>

<p>REST's stateless nature and standard HTTP methods make it easy to implement and integrate with existing infrastructure and tools.</p>

<h2>GraphQL Advantages</h2>
<p>GraphQL provides flexible queries, allowing clients to request exactly the data they need. This reduces over-fetching and under-fetching issues common with REST.</p>

<p>Strong typing and introspection capabilities make GraphQL excellent for complex data relationships and when you need to support multiple client types with different data requirements.</p>

<h2>When to Use Each</h2>
<p>Use REST for simple CRUD operations, when caching is critical, or when you need to leverage HTTP features extensively. Choose GraphQL for complex data relationships, mobile applications with bandwidth constraints, or when you need flexible querying.</p>

<p>Many applications benefit from a hybrid approach, using REST for simple operations and GraphQL for complex queries.</p>`,
    featuredImage: "https://picsum.photos/id/1013/800/600",
    date: "2023-11-25",
    category: "Backend",
    slug: "graphql-vs-rest-choosing-right-api-architecture",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-13",
    title: "Web Security Best Practices for Modern Applications",
    excerpt: "Essential security practices including HTTPS, CORS, XSS prevention, CSRF protection, and secure authentication mechanisms.",
    content: `<p>Web security is paramount in modern applications. Implementing proper security measures protects both your users and your application from various threats.</p>

<h2>HTTPS and Encryption</h2>
<p>Always use HTTPS in production. Encrypt data in transit and at rest. Use strong encryption algorithms and keep SSL/TLS certificates up to date.</p>

<p>Implement proper certificate management and consider using certificate pinning for mobile applications to prevent man-in-the-middle attacks.</p>

<h2>Input Validation and Sanitization</h2>
<p>Validate and sanitize all user inputs on both client and server side. Never trust client-side validation alone. Use parameterized queries to prevent SQL injection.</p>

<p>Implement Content Security Policy headers to prevent XSS attacks and sanitize user-generated content before rendering.</p>

<h2>Authentication and Authorization</h2>
<p>Use secure authentication mechanisms like OAuth 2.0 or JWT tokens. Implement proper session management and use secure, HTTP-only cookies when appropriate.</p>

<p>Implement role-based access control and principle of least privilege. Regularly audit permissions and revoke unnecessary access.</p>`,
    featuredImage: "https://picsum.photos/id/1014/800/600",
    date: "2023-11-20",
    category: "Security",
    slug: "web-security-best-practices-modern-applications",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-14",
    title: "MongoDB Aggregation Pipeline: Advanced Queries",
    excerpt: "Mastering MongoDB's aggregation framework for complex data transformations, analytics, and reporting in large-scale applications.",
    content: `<p>MongoDB's aggregation pipeline is a powerful framework for data processing. Mastering it enables you to perform complex queries and transformations efficiently.</p>

<h2>Pipeline Stages</h2>
<p>Understand the various pipeline stages: $match for filtering, $group for aggregation, $project for reshaping, and $lookup for joins. Each stage transforms documents as they pass through the pipeline.</p>

<p>Optimize pipeline order by placing $match stages early to reduce the number of documents processed in subsequent stages.</p>

<h2>Advanced Operators</h2>
<p>Leverage array operators like $unwind, $arrayElemAt, and $map for complex array manipulations. Use date operators for time-based aggregations and string operators for text processing.</p>

<p>Combine operators creatively to solve complex data transformation challenges that would be difficult with simple queries.</p>

<h2>Performance Optimization</h2>
<p>Create indexes on fields used in $match and $sort stages. Use $limit and $skip strategically, and consider using $facet for parallel processing of multiple aggregations.</p>

<p>Monitor aggregation performance and optimize slow pipelines by restructuring stages and ensuring proper indexing.</p>`,
    featuredImage: "https://picsum.photos/id/1016/800/600",
    date: "2023-11-15",
    category: "Database",
    slug: "mongodb-aggregation-pipeline-advanced-queries",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-15",
    title: "CI/CD Pipelines with GitHub Actions",
    excerpt: "Setting up automated testing, building, and deployment pipelines using GitHub Actions for continuous integration and delivery.",
    content: `<p>GitHub Actions provides powerful CI/CD capabilities directly in your repository. Setting up proper pipelines automates testing, building, and deployment workflows.</p>

<h2>Workflow Configuration</h2>
<p>Create workflow files in .github/workflows directory. Define triggers, jobs, and steps to automate your development workflow. Use matrix strategies for testing across multiple environments.</p>

<p>Organize workflows logically, separating concerns like testing, building, and deployment into different jobs that can run in parallel or sequence as needed.</p>

<h2>Testing and Quality</h2>
<p>Run automated tests on every pull request and push. Include linting, type checking, and security scanning in your pipeline to catch issues early.</p>

<p>Use status checks to enforce quality gates before merging code. Require all checks to pass before allowing merges to main branch.</p>

<h2>Deployment Automation</h2>
<p>Automate deployments to staging and production environments. Use environment secrets for sensitive configuration and implement proper approval workflows for production deployments.</p>

<p>Implement rollback strategies and monitor deployments to quickly identify and resolve issues in production.</p>`,
    featuredImage: "https://picsum.photos/id/1018/800/600",
    date: "2023-11-10",
    category: "DevOps",
    slug: "cicd-pipelines-github-actions",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-16",
    title: "State Management in React: Context API vs Redux",
    excerpt: "Comparing React Context API and Redux for state management, including performance implications and best use cases for each approach.",
    content: `<p>Choosing the right state management solution is crucial for React applications. Both Context API and Redux have their place, and understanding when to use each is key.</p>

<h2>Context API</h2>
<p>Context API is built into React and perfect for sharing state across components without prop drilling. It's ideal for theme settings, user authentication, and other global state that doesn't change frequently.</p>

<p>Use Context API for simple state management needs. It's lightweight and doesn't require additional dependencies, but can cause performance issues if overused with frequently updating state.</p>

<h2>Redux</h2>
<p>Redux provides predictable state management with a single source of truth. It's excellent for complex applications with intricate state relationships and when you need time-travel debugging and middleware support.</p>

<p>Redux shines in large applications where state management complexity justifies the additional boilerplate. Use it when you need centralized state management with strict update patterns.</p>

<h2>Making the Choice</h2>
<p>Start with Context API for simple needs and migrate to Redux if state management becomes complex. Consider Redux Toolkit to reduce boilerplate and simplify Redux usage.</p>

<p>Many applications use both: Context API for simple global state and Redux for complex application state management.</p>`,
    featuredImage: "https://picsum.photos/id/1019/800/600",
    date: "2023-11-05",
    category: "Frontend",
    slug: "state-management-react-context-api-vs-redux",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-17",
    title: "Natural Language Processing with Python",
    excerpt: "Introduction to NLP techniques using Python libraries like NLTK, spaCy, and transformers for text analysis and language understanding.",
    content: `<p>Natural Language Processing enables computers to understand and process human language. Python provides excellent libraries for building NLP applications.</p>

<h2>Core Libraries</h2>
<p>NLTK offers comprehensive tools for text processing, tokenization, and linguistic analysis. spaCy provides fast, production-ready NLP with pre-trained models. Transformers library gives access to state-of-the-art language models.</p>

<p>Each library has its strengths: use NLTK for research and learning, spaCy for production applications, and transformers for cutting-edge model capabilities.</p>

<h2>Common Tasks</h2>
<p>Text preprocessing includes tokenization, stemming, lemmatization, and removing stop words. These steps prepare text for analysis and model training.</p>

<p>Sentiment analysis, named entity recognition, and text classification are common NLP tasks that can be accomplished with these libraries.</p>

<h2>Modern Approaches</h2>
<p>Transformer models like BERT and GPT have revolutionized NLP. Use pre-trained models from the transformers library for tasks like text classification, question answering, and text generation.</p>

<p>Fine-tune pre-trained models on your specific domain to achieve better performance than training from scratch.</p>`,
    featuredImage: "https://picsum.photos/id/1020/800/600",
    date: "2023-10-30",
    category: "AI/ML",
    slug: "natural-language-processing-python",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-18",
    title: "Microservices Architecture: Design Patterns and Challenges",
    excerpt: "Exploring microservices design patterns, service communication strategies, and common challenges in distributed systems architecture.",
    content: `<p>Microservices architecture breaks applications into small, independent services. Understanding design patterns and challenges is essential for successful implementation.</p>

<h2>Design Patterns</h2>
<p>API Gateway pattern provides a single entry point for clients. Service discovery enables services to find each other dynamically. Circuit breaker pattern prevents cascading failures.</p>

<p>Event-driven architecture using message queues enables loose coupling between services. Saga pattern manages distributed transactions across multiple services.</p>

<h2>Communication Strategies</h2>
<p>Synchronous communication via REST or gRPC is simple but creates coupling. Asynchronous communication with message queues provides better scalability and resilience.</p>

<p>Choose communication patterns based on your requirements: use synchronous for real-time needs and asynchronous for better decoupling and scalability.</p>

<h2>Common Challenges</h2>
<p>Distributed systems introduce complexity: network latency, partial failures, and data consistency. Implement proper monitoring, logging, and error handling to manage these challenges.</p>

<p>Start with a monolith and extract services gradually. Don't over-engineer with microservices from the start; use them when complexity justifies the overhead.</p>`,
    featuredImage: "https://picsum.photos/id/1021/800/600",
    date: "2023-10-25",
    category: "Backend",
    slug: "microservices-architecture-design-patterns-challenges",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-19",
    title: "Progressive Web Apps: Building Offline-First Applications",
    excerpt: "Creating Progressive Web Apps with service workers, offline capabilities, and app-like experiences using modern web technologies.",
    content: `<p>Progressive Web Apps combine the best of web and mobile applications, providing app-like experiences with offline capabilities and improved performance.</p>

<h2>Service Workers</h2>
<p>Service workers enable offline functionality by intercepting network requests and serving cached content. They run in the background, independent of the web page.</p>

<p>Implement caching strategies like cache-first, network-first, or stale-while-revalidate based on your content type and update requirements.</p>

<h2>Offline-First Design</h2>
<p>Design your application to work offline from the start. Cache essential resources, implement local storage for user data, and provide clear offline indicators.</p>

<p>Use IndexedDB for complex data storage and implement sync mechanisms to update the server when connectivity is restored.</p>

<h2>App-Like Experience</h2>
<p>Create app manifests for installability, implement push notifications, and use responsive design principles. Ensure fast load times and smooth animations.</p>

<p>Test on various devices and network conditions to ensure your PWA provides a consistent, high-quality experience across all scenarios.</p>`,
    featuredImage: "https://picsum.photos/id/1022/800/600",
    date: "2023-10-20",
    category: "Web Development",
    slug: "progressive-web-apps-offline-first-applications",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
  {
    id: "blog-20",
    title: "Kubernetes Orchestration: A Beginner's Guide",
    excerpt: "Getting started with Kubernetes for container orchestration, including pods, services, deployments, and scaling strategies.",
    content: `<p>Kubernetes has become the standard for container orchestration. Understanding its core concepts is essential for modern DevOps practices.</p>

<h2>Core Concepts</h2>
<p>Pods are the smallest deployable units, containing one or more containers. Services provide stable network access to pods. Deployments manage pod replicas and updates.</p>

<p>Namespaces organize resources, ConfigMaps store configuration, and Secrets manage sensitive data. Understanding these building blocks is fundamental to Kubernetes.</p>

<h2>Deployment Strategies</h2>
<p>Use Deployments to manage application updates with strategies like rolling updates or blue-green deployments. ReplicaSets ensure desired pod counts are maintained.</p>

<p>Implement health checks with liveness and readiness probes to ensure only healthy pods receive traffic and failed pods are automatically restarted.</p>

<h2>Scaling and Management</h2>
<p>Horizontal Pod Autoscaling automatically adjusts pod counts based on metrics. Use resource requests and limits to manage cluster resources efficiently.</p>

<p>Monitor your cluster with proper logging and metrics collection. Use kubectl effectively and consider tools like Helm for package management.</p>`,
    featuredImage: "https://picsum.photos/id/1023/800/600",
    date: "2023-10-15",
    category: "DevOps",
    slug: "kubernetes-orchestration-beginners-guide",
    author: "Asaduzzaman Sunam",
    featured: false,
  },
] as const;
