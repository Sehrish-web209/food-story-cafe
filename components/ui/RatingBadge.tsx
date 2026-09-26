import React from 'react';

interface RatingBadgeProps {
  rating: number;
  reviewCount?: number;
}

export default function RatingBadge({ rating, reviewCount }: RatingBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-md bg-[#3D302B] px-3 py-1 text-xs font-bold text-[#FDFBF7] border border-[#4D3F38] font-sans">
      <span className="text-[#ffb59c]">{rating.toFixed(1)} ★</span>
      {reviewCount !== undefined && (
        <span className="text-[#D8D2C9]">({reviewCount}+ Reviews)</span>
      )}
    </div>
  );
}