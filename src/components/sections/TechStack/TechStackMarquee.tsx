"use client";

import TechStackItem from "./TechStackItem";

interface TechStackMarqueeProps {
  items: Array<{ name: string; icon: string }>;
}

export default function TechStackMarquee({ items }: TechStackMarqueeProps) {
  return (
    <div className="relative w-full pt-4 pb-16 overflow-x-clip overflow-y-visible">
      <div className="marquee-track flex hover:[animation-play-state:paused]">
        {/* First set of items */}
        <div className="marquee-content flex gap-8 sm:gap-12 md:gap-16 flex-shrink-0 pr-8 sm:pr-12 md:pr-16">
          {items.map((item, index) => (
            <div key={`first-${item.name}-${index}`} className="flex-shrink-0">
              <TechStackItem name={item.name} icon={item.icon} />
            </div>
          ))}
        </div>
        {/* Second set of items (for seamless loop) */}
        <div className="marquee-content flex gap-8 sm:gap-12 md:gap-16 flex-shrink-0 pr-8 sm:pr-12 md:pr-16">
          {items.map((item, index) => (
            <div key={`second-${item.name}-${index}`} className="flex-shrink-0">
              <TechStackItem name={item.name} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
