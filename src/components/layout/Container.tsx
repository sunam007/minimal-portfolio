import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
}
