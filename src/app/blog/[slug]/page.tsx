import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import BlogPostHeader from "@/components/sections/Blog/BlogPostHeader";
import BlogPostContent from "@/components/sections/Blog/BlogPostContent";
import ShareButtons from "@/components/sections/Blog/ShareButtons";
import BlogComments from "@/components/sections/Blog/BlogComments";
import BackToBlogLink from "@/components/sections/Blog/BackToBlogLink";
import { BLOG_POSTS } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="bg-white/5 rounded-lg border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16">
          <BlogPostHeader
            title={post.title}
            author={post.author}
            date={post.date}
            category={post.category}
            featuredImage={post.featuredImage}
            slug={post.slug}
          />

          <BlogPostContent content={post.content} />

          <div className="mt-12 pt-8 border-t border-white/10">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <BlogComments postSlug={post.slug} />
          </div>

          <div className="mt-12">
            <BackToBlogLink />
          </div>
        </div>
      </Container>
    </main>
  );
}
