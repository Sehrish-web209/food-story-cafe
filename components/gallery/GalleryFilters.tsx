"use client";

import {
  categories,
  type Category,
} from "@/data/galleryData";

interface GalleryFiltersProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function GalleryFilters({
  activeCategory,
  onSelectCategory,
}: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all ${
              isActive
                ? "bg-[#9E3B1C] text-white shadow-sm"
                : "bg-[#EDE5DB] text-[#57423B] hover:bg-[#E3D8CB] hover:text-[#1C1C18]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}