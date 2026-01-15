"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useEffect } from "react";
import BlogListCard from "./BlogListCard";
import BlogLoader from "./BlogLoader";
import { useBlogLoading } from "./BlogLoadingContext";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogList() {
  const searchParams = useSearchParams();
  const { isLoading, setLoading } = useBlogLoading();

  // Parse search params
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "5", 10);
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "newest";

  // Clear loading when params change (component re-renders with new data)
  useEffect(() => {
    setLoading(false);
  }, [page, perPage, category, search, sort, setLoading]);

  // Filter and sort posts
  const { filteredPosts, totalPosts, totalPages, paginatedPosts } = useMemo(() => {
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

    // Sort posts
    if (sort === "newest") {
      filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sort === "oldest") {
      filtered.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    // Calculate pagination
    const total = filtered.length;
    const totalPgs = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginated = filtered.slice(startIndex, endIndex);

    return {
      filteredPosts: filtered,
      totalPosts: total,
      totalPages: totalPgs,
      paginatedPosts: paginated,
    };
  }, [category, search, sort, page, perPage]);

  if (isLoading) {
    return <BlogLoader />;
  }

  if (paginatedPosts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-white/60 text-lg">
          No articles found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6 mb-12">
        {paginatedPosts.map((post) => (
          <BlogListCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            featuredImage={post.featuredImage}
            date={post.date}
            category={post.category}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}
