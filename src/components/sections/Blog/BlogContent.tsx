interface BlogContentProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured?: boolean;
}

export default function BlogContent({
  title,
  excerpt,
  date,
  category,
  featured = false,
}: BlogContentProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const titleSize = featured
    ? "text-xl sm:text-2xl"
    : "text-base sm:text-lg";
  const excerptSize = featured ? "text-sm sm:text-base" : "text-xs sm:text-sm";
  const excerptLines = featured ? "line-clamp-3" : "line-clamp-2";

  return (
    <div className="flex flex-col gap-2">
      {/* Category & Date */}
      <div className="flex items-center gap-2">
        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/70 rounded">
          {category}
        </span>
        <span className="text-[10px] text-white/40">&bull;</span>
        <time className="text-[10px] text-white/50">
          {formatDate(date)}
        </time>
      </div>
      {/* Title */}
      <h3 className={`${titleSize} font-semibold text-white leading-snug line-clamp-2 group-hover:text-white/90 transition-colors`}>
        {title}
      </h3>
      {/* Excerpt - show for both featured and regular posts */}
      <p className={`${excerptSize} text-white/60 ${excerptLines} leading-relaxed`}>
        {excerpt}
      </p>
    </div>
  );
}
