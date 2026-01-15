import Link from "next/link";
import BlogImage from "./BlogImage";
import BlogContent from "./BlogContent";

interface BlogFeaturedPostProps {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  category: string;
  slug: string;
}

export default function BlogFeaturedPost({
  title,
  excerpt,
  featuredImage,
  date,
  category,
  slug,
}: BlogFeaturedPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full">
        {/* Horizontal layout: image left (40%), content right (60%) */}
        <div className="flex flex-row h-full">
          {/* Image on left - 40% width */}
          <div className="w-[40%] flex-shrink-0">
            <BlogImage title={title} src={featuredImage} featured={true} />
          </div>
          {/* Content on right - 60% width */}
          <div className="w-[60%] p-6 sm:p-8 flex flex-col justify-center">
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
