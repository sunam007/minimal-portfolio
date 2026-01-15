import Container from "@/components/layout/Container";
import BlogFeaturedPost from "./BlogFeaturedPost";
import BlogPostCard from "./BlogPostCard";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogSection() {
  // Sort by date (newest first) and take the latest 3 posts
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Featured post (first/latest) and 2 regular posts
  const [featured, second, third] = sortedPosts.slice(0, 3);

  if (!featured) return null;

  return (
    <section
      id="blog"
      className="relative bg-black border-t border-white/10 py-20 sm:py-24"
    >
      <Container className="space-y-8 sm:space-y-10">
        <header className="space-y-2">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Latest Articles
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Blog
          </h2>
        </header>

        {/* Featured post - full width, horizontal layout */}
        <div className="h-[300px] sm:h-[360px] md:h-[400px]">
          <BlogFeaturedPost
            id={featured.id}
            title={featured.title}
            excerpt={featured.excerpt}
            featuredImage={featured.featuredImage}
            date={featured.date}
            category={featured.category}
            slug={featured.slug}
          />
        </div>

        {/* Regular posts - 2 columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {second && (
            <BlogPostCard
              id={second.id}
              title={second.title}
              excerpt={second.excerpt}
              featuredImage={second.featuredImage}
              date={second.date}
              category={second.category}
              slug={second.slug}
            />
          )}
          {third && (
            <BlogPostCard
              id={third.id}
              title={third.title}
              excerpt={third.excerpt}
              featuredImage={third.featuredImage}
              date={third.date}
              category={third.category}
              slug={third.slug}
            />
          )}
        </div>

        {/* View all posts link */}
        <div className="pt-4">
          <a
            href="/blog"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
          >
            View all posts
            <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
