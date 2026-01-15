import Image from "next/image";

interface BlogImageProps {
  title: string;
  src: string;
  featured?: boolean;
}

export default function BlogImage({ title, src, featured = false }: BlogImageProps) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white/5">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <Image
          src={src}
          alt={title}
          fill
          sizes={featured ? "(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 200px, (min-width: 640px) 25vw, 40vw"}
          className="object-cover"
        />
      </div>
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>
  );
}
