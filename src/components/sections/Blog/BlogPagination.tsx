"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useBlogLoading } from "./BlogLoadingContext";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  perPage,
}: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setLoading } = useBlogLoading();

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      setLoading(true);
      const params = new URLSearchParams(searchParams.toString());
      
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "" || value === "1") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      
      router.replace(`/blog?${params.toString()}`);
    },
    [router, searchParams, setLoading]
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      updateParams({ page: page.toString() });
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePerPageChange = (newPerPage: string) => {
    updateParams({ perPage: newPerPage, page: null });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
      {/* Per Page Selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-white/60">Show:</label>
        <select
          value={perPage}
          onChange={(e) => handlePerPageChange(e.target.value)}
          className="px-3 py-2 pr-8 bg-white/[0.03] border border-white/10 rounded-lg text-white text-sm font-medium focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-colors appearance-none cursor-pointer"
        >
          <option value="5" className="bg-black text-white">
            5
          </option>
          <option value="10" className="bg-black text-white">
            10
          </option>
          <option value="50" className="bg-black text-white">
            50
          </option>
        </select>
        <span className="text-sm text-white/60">per page</span>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
            currentPage === 1
              ? "bg-white/[0.03] text-white/30 border-white/10 cursor-not-allowed"
              : "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.05] hover:border-white/20"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-white/40"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
            currentPage === totalPages
              ? "bg-white/[0.03] text-white/30 border-white/10 cursor-not-allowed"
              : "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.05] hover:border-white/20"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
