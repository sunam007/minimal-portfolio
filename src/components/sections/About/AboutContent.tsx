"use client";

import { useEffect, useRef, useState } from "react";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface AboutContentProps {
  bio: string;
  education: readonly Education[];
  interests: readonly string[];
}

export default function AboutContent({ bio, education, interests }: AboutContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const bioParagraphs = bio.split("\n\n").filter((p) => p.trim());

  return (
    <div
      ref={contentRef}
      className={`space-y-8 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {/* Bio */}
      <div className="space-y-4">
        {bioParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm sm:text-base text-white/70 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">
            Education
          </h3>
          <ul className="space-y-2">
            {education.map((edu, index) => (
              <li key={index} className="text-sm sm:text-base text-white/70">
                <span className="font-medium text-white">{edu.degree}</span>
                <span className="text-white/50"> • </span>
                <span>{edu.institution}</span>
                <span className="text-white/50">, {edu.year}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Interests */}
      {interests.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">
            Interests
          </h3>
          <ul className="space-y-2">
            {interests.map((interest, index) => (
              <li
                key={index}
                className="text-sm sm:text-base text-white/70 flex items-start"
              >
                <span className="text-white/50 mr-2">•</span>
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
