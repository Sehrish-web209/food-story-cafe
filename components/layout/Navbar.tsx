import React from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fcf9f3]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(26,20,18,0.06)] border-b border-[#e5e2dc]">
      <div className="max-w-[1440px] mx-auto h-20 px-6 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1c1c18] leading-none">
              Food Story
            </span>
            <span className="text-[10px] font-bold text-[#57423b] uppercase tracking-widest mt-1">
              Café & Kitchen • Chakwal
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#57423b] hover:text-[#1c1c18] transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/923185600123"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center bg-[#9f3c16] text-[#ffffff] text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-[#31312d] transition-all"
          >
            <span>WhatsApp Order (0318 5600123)</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center border border-[#1c1c18] text-[#1c1c18] text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg hover:bg-[#1c1c18] hover:text-[#fcf9f3] transition-all"
          >
            <span>Reserve</span>
          </Link>
        </div>
      </div>
    </header>
  );
}