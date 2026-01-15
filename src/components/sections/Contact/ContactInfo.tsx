import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  youtube: FaYoutube,
};

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Email */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <FaEnvelope className="w-5 h-5 text-white/70" />
          <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
            Email
          </h3>
        </div>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="block text-base sm:text-lg text-white hover:text-white/80 transition-colors"
        >
          {CONTACT_INFO.email}
        </a>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <FaPhone className="w-5 h-5 text-white/70" />
          <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
            Phone
          </h3>
        </div>
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          className="block text-base sm:text-lg text-white hover:text-white/80 transition-colors"
        >
          {CONTACT_INFO.phone}
        </a>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="w-5 h-5 text-white/70" />
          <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
            Location
          </h3>
        </div>
        <p className="text-base sm:text-lg text-white/70">{CONTACT_INFO.location}</p>
      </div>

      {/* Social Links */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
          Connect
        </h3>
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
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                aria-label={social.platform}
              >
                <IconComponent className="w-4 h-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
