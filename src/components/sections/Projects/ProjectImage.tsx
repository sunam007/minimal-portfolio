import Image from "next/image";

interface ProjectImageProps {
  title: string;
  src: string;
}

export default function ProjectImage({ title, src }: ProjectImageProps) {
  return (
    <div className="relative w-full h-full min-h-[180px] sm:min-h-[220px] overflow-hidden rounded-xl bg-white/5">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 1024px) 460px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

