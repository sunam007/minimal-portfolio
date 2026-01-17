"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  // If href is a hash link and we're not on homepage, navigate to homepage with hash
  const getHref = () => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link and we're on a different page, handle navigation
    if (href.startsWith("#") && pathname !== "/") {
      e.preventDefault();
      router.push(`/${href}`);

      // Scroll to section after navigation completes
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const elementTop =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offset = 80; // Account for fixed navbar
            window.scrollTo({
              top: elementTop - offset,
              behavior: "smooth",
            });
          }
        }, 50);
      });
    }
    // If we're already on homepage, let default behavior handle smooth scroll
  };

  return (
    <Link
      href={getHref()}
      onClick={handleClick}
      className="text-base text-white/80 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
