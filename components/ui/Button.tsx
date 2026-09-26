import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'surface';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm font-sans';

  const variants = {
    primary: 'bg-[#9f3c16] text-white hover:bg-[#1c1c18]',
    secondary: 'border border-[#1c1c18] text-[#1c1c18] hover:bg-[#1c1c18] hover:text-[#fcf9f3]',
    surface: 'bg-[#ebe8e2] text-[#1c1c18] hover:bg-[#9f3c16] hover:text-white border border-[#dec0b7]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}