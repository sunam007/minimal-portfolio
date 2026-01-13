"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavLink from "./NavLink";
import SocialIcons from "./SocialIcons";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-solid border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4">
          <div className="relative flex items-center justify-between">
            {/* Left: Social Icons (Desktop) */}
            <div className="hidden md:flex flex-shrink-0">
              <SocialIcons />
            </div>

            {/* Mobile: Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              aria-label="Open menu"
            >
              <FaBars className="w-5 h-5" />
            </button>

            {/* Center: Nav Links (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 sm:gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Right: Download Resume Button (Desktop) */}
            <div className="hidden md:flex flex-shrink-0">
              <Button
                variant="secondary"
                href={SITE_CONFIG.resumePath}
                download={true}
              >
                Download Resume
              </Button>
            </div>

            {/* Mobile: Social Icons (shown when menu closed) */}
            <div className="md:hidden flex flex-shrink-0">
              <SocialIcons />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
