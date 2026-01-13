import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-base text-white/80 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
