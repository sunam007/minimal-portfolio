interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <article
      className="blog-post-content mt-8 text-white"
      dangerouslySetInnerHTML={{ __html: content }}
      style={{
        lineHeight: "1.8",
        fontSize: "1.125rem",
      }}
    />
  );
}
