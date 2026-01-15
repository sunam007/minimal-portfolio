import Link from "next/link";
import BlogImage from "./BlogImage";
import BlogContent from "./BlogContent";

interface BlogListCardProps {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  category: string;
  slug: string;
}

export default function BlogListCard({
  title,
  excerpt,
  featuredImage,
  date,
  category,
  slug,
}: BlogListCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
        {/* Vertical layout: image top, content bottom */}
        <div className="flex flex-col">
          {/* Image on top */}
          <div className="w-full h-[200px] sm:h-[240px] md:h-[280px]">
            <BlogImage title={title} src={featuredImage} featured={false} />
          </div>
          
          {/* Content below */}
          <div className="p-4 sm:p-5 md:p-6">
            <BlogContent
              title={title}
              excerpt={excerpt}
              date={date}
              category={category}
              featured={true}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
