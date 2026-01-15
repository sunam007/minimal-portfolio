import { Suspense } from "react";
import Container from "@/components/layout/Container";
import BlogFilters from "@/components/sections/Blog/BlogFilters";
import BlogPaginationWrapper from "@/components/sections/Blog/BlogPaginationWrapper";
import BlogList from "@/components/sections/Blog/BlogList";
import BlogHeader from "@/components/sections/Blog/BlogHeader";
import { BlogLoadingProvider } from "@/components/sections/Blog/BlogLoadingContext";
import { BLOG_POSTS } from "@/lib/constants";

function BlogPageContent() {
  // Get unique categories for filter buttons
  const categories = Array.from(
    new Set(BLOG_POSTS.map((post) => post.category))
  ).sort();

  return (
    <BlogLoadingProvider>
      <main className="min-h-screen bg-black">
        <Container className="py-16 sm:py-20 md:py-24">
          {/* Header - Client component that reads from URL */}
          <Suspense fallback={
            <header className="mb-12 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Blog
              </h1>
            </header>
          }>
            <BlogHeader />
          </Suspense>

          {/* Filters */}
          <div className="mb-10">
            <BlogFilters categories={categories} />
          </div>

          {/* Blog Posts List - Client component that reads from URL */}
          <Suspense fallback={<div className="text-white/60 py-8">Loading posts...</div>}>
            <BlogList />
          </Suspense>

          {/* Pagination - Client component that reads from URL */}
          <Suspense fallback={null}>
            <BlogPaginationWrapper />
          </Suspense>
        </Container>
      </main>
    </BlogLoadingProvider>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black">
          <Container className="py-16 sm:py-20 md:py-24">
            <div className="text-white/60">Loading...</div>
          </Container>
        </main>
      }
    >
      <BlogPageContent />
    </Suspense>
  );
}
