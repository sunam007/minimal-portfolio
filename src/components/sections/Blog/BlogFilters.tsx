"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { useBlogLoading } from "./BlogLoadingContext";

interface BlogFiltersProps {
  categories: string[];
}

export default function BlogFilters({ categories }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setLoading } = useBlogLoading();

  const currentCategory = searchParams.get("category") || "all";
  const currentSearch = searchParams.get("search") || "";
  const currentSort = searchParams.get("sort") || "newest";

  // Local state for search input (for debouncing)
  const [searchValue, setSearchValue] = useState(currentSearch);

  // Sync local state with URL params
  useEffect(() => {
    setSearchValue(currentSearch);
  }, [currentSearch]);

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      setLoading(true);
      const params = new URLSearchParams(searchParams.toString());
      
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "" || value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      
      // Reset to page 1 when filters change
      params.delete("page");
      
      const newUrl = `/blog?${params.toString()}`;
      router.replace(newUrl);
    },
    [router, searchParams, setLoading]
  );

  const handleCategoryChange = (category: string) => {
    updateParams({ category: category === "all" ? null : category });
  };

  // Debounced search handler
  useEffect(() => {
    // Don't update if the value hasn't changed from URL
    if (searchValue === currentSearch) return;

    const timer = setTimeout(() => {
      setLoading(true);
      const params = new URLSearchParams(searchParams.toString());
      if (searchValue) {
        params.set("search", searchValue);
      } else {
        params.delete("search");
      }
      params.delete("page"); // Reset to page 1
      router.replace(`/blog?${params.toString()}`);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchValue, currentSearch, searchParams, router, setLoading]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSortChange = (sort: string) => {
    updateParams({ sort });
  };

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-colors"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
              currentCategory === "all"
                ? "bg-white text-black border-white"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.05] hover:border-white/20"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                currentCategory === category
                  ? "bg-white text-black border-white"
                  : "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.05] hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-4 py-2 pr-10 bg-white/[0.03] border border-white/10 rounded-lg text-white text-sm font-medium focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-colors appearance-none cursor-pointer"
          >
            <option value="newest" className="bg-black text-white">
              Newest First
            </option>
            <option value="oldest" className="bg-black text-white">
              Oldest First
            </option>
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
