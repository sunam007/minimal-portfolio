import Link from "next/link";
import BlogImage from "./BlogImage";
import BlogContent from "./BlogContent";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  category: string;
  slug: string;
}

export default function BlogPostCard({
  title,
  excerpt,
  featuredImage,
  date,
  category,
  slug,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full">
        {/* Vertical card layout (image top, content bottom) */}
        <div className="flex flex-col h-full">
          {/* Image on top */}
          <div className="w-full h-[200px] sm:h-[240px] flex-shrink-0">
            <BlogImage title={title} src={featuredImage} featured={false} />
          </div>
          {/* Content below */}
          <div className="p-4 sm:p-5 flex-1 flex flex-col">
            <BlogContent
              title={title}
              excerpt={excerpt}
              date={date}
              category={category}
              featured={false}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
