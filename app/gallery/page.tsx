"use client";

import { useEffect, useState } from "react";
import GalleryCard from "@/components/gallery/GalleryCard";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import type { Category, GalleryItem } from "@/data/galleryData";

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category>("ALL MOMENTS");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery");

        if (!response.ok) {
          throw new Error("Failed to fetch gallery data");
        }

        const data: GalleryItem[] = await response.json();
        setGalleryItems(data);
      } catch (error) {
        console.error("Gallery fetch error:", error);
        setError("Unable to load gallery images.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const filteredItems =
  activeCategory === "ALL MOMENTS"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F7F2EC] pt-8 pb-16">
      {/* Hero Header */}
     <section className="mx-auto max-w-7xl px-6 pt-2 pb-10 lg:px-16 lg:pt-4 lg:pb-14">
       <div className="w-full max-w-3xl text-left">
         <div className="mb-3 flex items-center justify-start gap-2">
            <span className="h-px w-6 bg-[#9E3B1C]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9E3B1C]">
              Visual Gallery
            </span>

            <span className="h-px w-6 bg-[#9E3B1C]" />
          </div>

          <h1 className="text-left font-serif text-4xl font-semibold tracking-tight text-[#1C1C18] sm:text-5xl">
            Inside Food Story
          </h1>

         <p className="mt-4 max-w-2xl text-sm leading-7 text-[#57423B] sm:text-base">
            A glimpse of the coffee, food, people and atmosphere at Food Story
            Café, nestled right along the Talagang Highway in Chakwal.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 border-t border-[#E5DFD5]/70 pt-6">
          <GalleryFilters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-16">
        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <p className="text-sm text-[#57423B]">
              Loading gallery...
            </p>
          </div>
        ) : error ? (
          <div className="flex min-h-60 items-center justify-center">
            <p className="text-sm text-[#9E3B1C]">{error}</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="flex min-h-60 items-center justify-center">
            <p className="text-sm text-[#57423B]">
              No gallery items found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-[#E5DFD5] bg-[#EFE8DF] p-8 text-center md:flex-row md:p-12 md:text-left">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
              <span className="h-px w-6 bg-[#9E3B1C]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9E3B1C]">
                Find Us on the Highway
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#1C1C18]">
              Planning a visit?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#57423B] sm:text-base">
              We are located right on Talagang Highway, Chakwal. Stop by for
              an espresso or a hearty meal.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="https://maps.app.goo.gl/h7graoQ8tBY3GTrH9"
              className="inline-flex items-center justify-center rounded-full bg-[#9E3B1C] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#7F2F17] active:scale-[0.98]"
            >
              Get Directions
            </a>

            <a
              href="tel:03185600123"
              className="inline-flex items-center justify-center rounded-full border border-[#1C1C18] px-6 py-3 text-sm font-semibold text-[#1C1C18] transition-all hover:bg-[#9e3b1c] hover:text-white active:scale-[0.98]"
            >
              Contact Food Story
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}