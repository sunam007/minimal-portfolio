import Link from "next/link";

export default function BackToBlogLink() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
    >
      <span className="inline-block transition-transform group-hover:-translate-x-1">
        ←
      </span>
      <span>Back to Blog</span>
    </Link>
  );
}
