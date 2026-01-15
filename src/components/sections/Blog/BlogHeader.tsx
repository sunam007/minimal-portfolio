"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogHeader() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  const totalPosts = useMemo(() => {
    let filtered = [...BLOG_POSTS];

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower)
      );
    }

    return filtered.length;
  }, [category, search]);

  return (
    <header className="mb-12 space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
        Blog
      </h1>
      <p className="text-white/60 text-sm sm:text-base">
        {totalPosts === 0
          ? "No articles found"
          : totalPosts === 1
          ? "1 article"
          : `${totalPosts} articles`}
      </p>
    </header>
  );
}
