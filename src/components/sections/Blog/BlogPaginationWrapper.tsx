"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import BlogPagination from "./BlogPagination";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPaginationWrapper() {
  const searchParams = useSearchParams();

  // Parse search params
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "5", 10);
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  // Calculate total pages
  const { totalPages } = useMemo(() => {
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

    const total = filtered.length;
    const totalPgs = Math.ceil(total / perPage);

    return { totalPages: totalPgs };
  }, [category, search, perPage]);

  if (totalPages <= 1) return null;

  return (
    <BlogPagination
      currentPage={page}
      totalPages={totalPages}
      perPage={perPage}
    />
  );
}
