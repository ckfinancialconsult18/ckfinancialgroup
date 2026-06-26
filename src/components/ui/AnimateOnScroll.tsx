"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-right";
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialStyles: Record<string, string> = {
    opacity: "0",
    transform: animation === "fade-up" ? "translateY(24px)" : animation === "slide-right" ? "translateX(-24px)" : "none",
  };

  return (
    <div ref={ref} className={cn(className)} style={initialStyles}>
      {children}
    </div>
  );
}
