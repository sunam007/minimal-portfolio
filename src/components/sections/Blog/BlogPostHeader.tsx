"use client";

import Image from "next/image";
import BookmarkButton from "./BookmarkButton";

interface BlogPostHeaderProps {
  title: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
  slug: string;
}

export default function BlogPostHeader({
  title,
  author,
  date,
  category,
  featuredImage,
  slug,
}: BlogPostHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <header className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        {title}
      </h1>

      {/* Author, Date, Category Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-white font-medium">{author}</span>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <time>{formatDate(date)}</time>
              <span>•</span>
              <span className="px-2 py-0.5 text-xs font-medium uppercase tracking-wide bg-white/10 text-white/70 rounded">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Bookmark Button */}
        <div className="flex items-center sm:ml-auto">
          <BookmarkButton postSlug={slug} />
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mt-8">
        <Image
          src={featuredImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          priority
        />
      </div>
    </header>
  );
}
