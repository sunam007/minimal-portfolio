import { SITE_CONFIG } from "@/lib/constants";

export default function HeroContent() {
  return (
    <div className="text-center space-y-6 z-10">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
        {SITE_CONFIG.name}
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white/90">
        {SITE_CONFIG.role}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
        {SITE_CONFIG.impactStatement}
      </p>
    </div>
  );
}
