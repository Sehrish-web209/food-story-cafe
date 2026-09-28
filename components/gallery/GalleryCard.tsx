import Image from "next/image";
import type { GalleryItem } from "@/data/galleryData";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#9E3B1C]/10 bg-white shadow-sm">
      {/* Fixed aspect-ratio container keeps every gallery image the same size */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#1c1c18]/90 via-[#1c1c18]/35 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* Category */}
          <span className="mb-2 w-fit rounded-full bg-[#9E3B1C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {item.category}
          </span>

          {/* Title */}
          <h2 className="font-serif text-xl font-semibold text-white">
            {item.title}
          </h2>

          {/* Description */}
          {item.description && (
            <p className="mt-1 text-sm leading-5 text-white/85">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
