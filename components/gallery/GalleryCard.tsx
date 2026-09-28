import Image from "next/image";
import type { GalleryItem } from "@/data/galleryData";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  return (
   <article className="group relative rounded-2xl border border-stone-200/80 bg-white p-2 shadow-xs transition-all duration-300 hover:shadow-md">
      {/* Fixed aspect-ratio container keeps every gallery image the same size */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-[#F6F4EF]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"   
        />
        <div className="absolute left-3 top-3 z-10 inline-flex items-center justify-center rounded-md border border-stone-200/60 bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-md">
          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-stone-700 leading-none">
            {item.tag}
          </span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#1c1c18]/90 via-[#1c1c18]/35 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* Category */}
          <span className="mb-1.5 w-fit rounded-full bg-[#9E3B1C] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
            {item.category}
          </span>

          {/* Title */}
          <h2 className="font-serif text-lg font-semibold text-white leading-snug">
            {item.title}
          </h2>

          {/* Description */}
          {item.description && (
            <p className="mt-1 text-xs leading-relaxed text-stone-200 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
