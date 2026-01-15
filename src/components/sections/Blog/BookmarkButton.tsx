"use client";

import { useState, useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface BookmarkButtonProps {
  postSlug: string;
}

export default function BookmarkButton({ postSlug }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Load bookmark state from localStorage
    const bookmarks = JSON.parse(localStorage.getItem("blogBookmarks") || "[]");
    setIsBookmarked(bookmarks.includes(postSlug));
  }, [postSlug]);

  const handleToggle = () => {
    const bookmarks = JSON.parse(localStorage.getItem("blogBookmarks") || "[]");
    let newBookmarks: string[];

    if (isBookmarked) {
      newBookmarks = bookmarks.filter((slug: string) => slug !== postSlug);
    } else {
      newBookmarks = [...bookmarks, postSlug];
    }

    localStorage.setItem("blogBookmarks", JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors"
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isBookmarked ? (
        <FaBookmark className="w-5 h-5 text-white" />
      ) : (
        <FaRegBookmark className="w-5 h-5 text-white/70" />
      )}
    </button>
  );
}
