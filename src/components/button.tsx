'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function Button({
  children,
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  className,
  href,
  onClick,
  target,
  rel,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md inline-block';
  const mergedClasses = twMerge(baseStyles, bgColor, textColor, className);

  if (href) {
    if (!href.startsWith('http') && !href.startsWith('#')) {
      return (
        <Link href={href} className={mergedClasses} onClick={onClick} target={target} rel={rel}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={mergedClasses} onClick={onClick} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={mergedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
