import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black">
      <Container className="py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            404
          </h1>
          <p className="text-xl text-white/60">
            Blog post not found
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
