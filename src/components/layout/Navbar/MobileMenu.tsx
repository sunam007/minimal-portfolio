"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";
import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              aria-label="Close menu"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href} onClick={handleLinkClick}>
                  <NavLink href={link.href} label={link.label} />
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-medium uppercase tracking-wider text-white/50 mb-4">
                Connect
              </p>
              <SocialIcons />
            </div>
          </nav>

          {/* Footer with Download Resume Button */}
          <div className="p-6 border-t border-white/10">
            <Button
              variant="secondary"
              href={SITE_CONFIG.resumePath}
              download={true}
              onClick={handleLinkClick}
              className="w-full"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
