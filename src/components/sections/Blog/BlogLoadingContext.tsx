"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BlogLoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const BlogLoadingContext = createContext<BlogLoadingContextType | undefined>(
  undefined
);

export function BlogLoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BlogLoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      {children}
    </BlogLoadingContext.Provider>
  );
}

export function useBlogLoading() {
  const context = useContext(BlogLoadingContext);
  if (context === undefined) {
    throw new Error("useBlogLoading must be used within BlogLoadingProvider");
  }
  return context;
}
