"use client";

import { useEffect, useState } from "react";

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

export default function LocationSection() {
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

  if (!business) {
    return null;
  }

  const phoneLink = `tel:${business.phone.replace(/\s/g, "")}`;
  const whatsappLink = `https://wa.me/${business.whatsapp}`;

  const mapEmbedUrl =
    "https://www.google.com/maps?q=Food+Story,+Talagang+Hwy,+Chakwal&output=embed";

  return (
    <section className="bg-[#F6F4EF] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left Content */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9E3B1C]">
              ✦ Highway Stop & Direct Connect
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#2C221E] md:text-4xl">
              Highway Stop & Direct Connect
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#625852] md:text-lg">
              Conveniently located along Talagang Highway, Food Story is an
              easy stop for good food, coffee, and quality time. With
              hassle-free parking and direct roadside access, it is a
              convenient choice whether you are stopping by for a quick break
              or spending time with family and friends.
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#9E3B1C] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#7F2F17]"
              >
                Get Directions
                <span
                  aria-hidden="true"
                  className="ml-2 text-sm leading-none text-white"
                >
                  ↗
                </span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#9E3B1C] px-6 py-3 text-sm font-semibold text-[#9E3B1C] transition duration-300 hover:bg-[#9E3B1C] hover:text-white"
              >
                WhatsApp Order
              </a>
            </div>

            {/* Information Cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div
                className="cursor-pointer rounded-2xl border border-transparent bg-white/70 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#9E3B1C]/20 hover:shadow-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9E3B1C]">
                  Hours
                </p>

                <p className="mt-2 text-sm font-medium leading-5 text-[#2C221E]">
                  {business.openingHours}
                </p>
              </div>

              <div
                className="cursor-pointer rounded-2xl border border-transparent bg-white/70 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#9E3B1C]/20 hover:shadow-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9E3B1C]">
                  Hotline
                </p>

                <a
                  href={phoneLink}
                  className="mt-2 block text-sm font-medium leading-5 text-[#2C221E] transition hover:text-[#9E3B1C]"
                >
                  {business.phone}
                </a>
              </div>

              <div
                className="cursor-pointer rounded-2xl border border-transparent bg-white/70 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#9E3B1C]/20 hover:shadow-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9E3B1C]">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium leading-5 text-[#2C221E]">
                  Talagang Highway
                  <span className="block text-xs font-normal text-[#625852]">
                    Chakwal
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="min-w-0">
            <div className="relative h-70 w-full overflow-hidden rounded-2xl border border-black/5 bg-[#EAE5DE] shadow-sm md:h-85">
              <iframe
                src={mapEmbedUrl}
                title="Food Story Cafe location on Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />

              {/* Floating Map Badge */}
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 rounded-xl border border-black/5 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm transition duration-300 hover:bg-white"
              >
                <span className="block text-xs font-semibold text-[#2C221E]">
                  Food Story Cafe • Chakwal
                </span>

                <span className="mt-1 block text-[11px] font-medium text-[#9E3B1C]">
                  Open on Maps ↗
                </span>
              </a>
            </div>

            {/* Address / Map Link */}
            <div className="flex items-start justify-between gap-4 pt-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9E3B1C]">
                  Find Us
                </p>

                <p className="mt-1 text-sm leading-6 text-[#625852]">
                  {business.address}
                </p>
              </div>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 pt-1 text-sm font-semibold text-[#9E3B1C] transition duration-300 hover:text-[#7F2F17]"
              >
                View Map
                <span
                  aria-hidden="true"
                  className="text-sm leading-none text-[#9E3B1C]"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

