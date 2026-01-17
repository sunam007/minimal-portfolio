# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring a dark monochrome design, blog system, and dynamic content management.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: React Icons

## Features

- 🎨 **Modern Design**: Dark monochrome theme with smooth animations
- 📱 **Fully Responsive**: Mobile-first design with optimized layouts
- 📝 **Blog System**: Full-featured blog with filtering, pagination, and comments
- 🚀 **Performance**: Optimized images, server components, and code splitting
- 🔍 **SEO Ready**: Server-side rendering and metadata support
- 💾 **Local Storage**: Bookmark and comment persistence

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── blog/         # Blog index and dynamic routes
│   └── page.tsx      # Homepage
├── components/
│   ├── layout/       # Navbar, Footer, Container
│   ├── sections/    # Homepage sections (Hero, About, Projects, etc.)
│   └── ui/          # Reusable UI components
└── lib/             # Constants and utilities
```

## Configuration

- **Content**: Edit `src/lib/constants.ts` for projects, experiences, blog posts
- **Images**: Configured for Picsum Photos (update `next.config.ts` for custom domains)
- **Styling**: Global styles in `src/app/globals.css`

## Deployment

Deploy to [Vercel](https://vercel.com) or any platform supporting Next.js:

```bash
npm run build
```

The site is optimized for production with automatic image optimization and static generation.

## License

Private project - All rights reserved.
