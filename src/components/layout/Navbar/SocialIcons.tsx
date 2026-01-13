"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  youtube: FaYoutube,
};

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = iconMap[social.platform as keyof typeof iconMap];
        if (!IconComponent) return null;

        return (
          <Link
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            aria-label={social.platform}
          >
            <IconComponent className="w-4 h-4" />
          </Link>
        );
      })}
    </div>
  );
}
