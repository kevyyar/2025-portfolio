"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

function Button({
  children,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className,
  href,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md inline-block"; // inline-block for link/anchor compatibility
  const mergedClasses = twMerge(baseStyles, bgColor, textColor, className);

  // If href is provided, render as a Link or anchor
  if (href) {
    // Use Next.js Link for internal routes (no protocol like http://)
    if (!href.startsWith("http") && !href.startsWith("#")) {
      return (
        <Link
          href={href}
          className={mergedClasses}
          onClick={onClick}
          target={target}
          rel={rel}
        >
          {children}
        </Link>
      );
    }
    // Use <a> for external URLs or in-page anchors (#id)
    return (
      <a
        href={href}
        className={mergedClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // Default to button if no href
  return (
    <button className={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
