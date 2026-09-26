import React from 'react';
import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C221E] border-t border-[#3D302B] pt-14 pb-8 text-[#FDFBF7] mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="md:col-span-5 flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold text-[#FDFBF7]">
              Food Story
            </span>
            <span className="text-[10px] font-bold tracking-wider bg-[#3D302B] px-2 py-0.5 rounded text-[#9f3c16] border border-[#4D3F38] uppercase">
              CHAKWAL EDITION
            </span>
          </div>
          <p className="text-sm text-[#D8D2C9] max-w-md leading-relaxed">
            Artisanal coffee, cold sips & hearty bites in Chakwal.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16]">
            Editorial Index
          </span>
          <nav className="flex flex-col gap-2 pt-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-[#D8D2C9] hover:text-[#9f3c16] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 flex flex-col gap-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16]">
            Highway Coordinates
          </span>
          <div className="text-sm text-[#D8D2C9] flex flex-col gap-1.5 pt-2">
            <div>Talagang Highway, Chakwal</div>
            <div className="pt-1">
              <span className="font-semibold text-[#FDFBF7]">Hours:</span> 10:00 AM - 1:00 AM daily
            </div>
            <div>
              <span className="font-semibold text-[#FDFBF7]">Phone:</span> 0318 5600123
            </div>
            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] font-bold bg-[#3D302B] text-[#FDFBF7] px-2 py-0.5 rounded border border-[#4D3F38]">
                4.0 ★ (392+ Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mt-12 pt-6 border-t border-[#3D302B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8D2C9] gap-2 font-mono">
        <span>© 2026 Food Story Café. All rights reserved.</span>
        <span>Culinary Craft & Modern Hospitality</span>
      </div>
    </footer>
  );
}