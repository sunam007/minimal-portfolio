import NavLink from "./NavLink";
import { Button } from "@/components/ui";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-solid border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
          <div className="flex-shrink-0">
            <Button
              variant="secondary"
              href={SITE_CONFIG.resumePath}
              download={true}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
