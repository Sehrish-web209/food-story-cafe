"use client";
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from "react";
const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];
interface BusinessData {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  rating: number;
  totalReviews: number;
  mapsUrl: string;
  directionsUrl: string;
}

export default function Footer() {
  const [business, setBusiness] = useState<BusinessData | null>(null);

useEffect(() => {
  async function fetchBusiness() {
    try {
      const response = await fetch("/api/business");

      if (!response.ok) {
        throw new Error("Failed to fetch business data");
      }

      const data: BusinessData = await response.json();
      setBusiness(data);
    } catch (error) {
      console.error("Error fetching business data:", error);
    }
  }

  fetchBusiness();
}, []);
  return (
    <footer className="mt-auto w-full bg-[#2C221E] pt-12 pb-8 text-[#FDFBF7]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-3 md:px-12 lg:gap-16 lg:px-16">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold text-[#FDFBF7]">
              Food Story
            </span>
            <span className="ml-3 rounded-full border border-[#9E3B1C]/40 bg-[#9E3B1C]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[#9E3B1C]">
              CHAKWAL EDITION
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#A89F91]">
            Artisanal coffee, cold sips & hearty bites in Chakwal.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col">
         <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#9E3B1C]">
            Editorial Index
          </span>
          <nav className="flex flex-col space-y-2.5 text-sm text-[#D1C7BD]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#9E3B1C]">
            Highway Coordinates
          </span>
          <div className="flex flex-col">
          <div className="space-y-2">
            <div>
              <span className="font-semibold text-[#FDFBF7]">Address:</span>{" "}
              <span className="text-sm text-[#D1C7BD]">
                {business?.address}
              </span>
            </div>
            
            <div>
              <span className="font-semibold text-[#FDFBF7]">Hours:</span>{" "}
              <span className="text-sm text-[#D1C7BD]">
                {business?.openingHours}
              </span>
            </div>
            <div className="mt-1">
              <span className="font-semibold text-[#FDFBF7]">Phone:</span>{" "}
              <span className="text-sm text-[#D1C7BD]">
                {business?.phone}
              </span>
            </div>
          </div>
            <div className="mt-4">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-white/10"
              >
                <span className="text-[#D69B45]">★</span>
                <span>{business?.rating.toFixed(1)}</span>
                <span className="text-[#A89F91]">
                  ({business?.totalReviews} Reviews)
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 text-xs text-[#8A817B] md:flex-row md:px-12 lg:px-16">
        <span>© 2026 Food Story Café. All rights reserved.</span>
        <span>Culinary Craft & Modern Hospitality</span>
      </div>
    </footer>
  );
}