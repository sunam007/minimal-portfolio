import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  href,
  download = false,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const variantStyles = {
    primary: "btn-base btn-primary",
    secondary: "btn-base btn-secondary",
  };

  const combinedClassName = `${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        download={download}
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
}
