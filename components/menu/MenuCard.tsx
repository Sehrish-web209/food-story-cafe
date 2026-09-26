import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  tag?: string;
}

interface MenuCardProps {
  item: MenuItem;
  onAddToOrder: (item: MenuItem) => void;
}

export default function MenuCard({
  item,
  onAddToOrder,
}: MenuCardProps) {
  return (
    <article className="group bg-[#F8F5EE] p-5 rounded-2xl border border-[#E8E2D7] hover:border-[#9f3c16]/50 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(159,60,22,0.08)] transform hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between">
      <div>
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-serif text-2xl font-semibold text-[#1c1c18] group-hover:text-[#9f3c16] transition-colors duration-200">
            {item.name}
          </h3>

          <span className="text-lg font-semibold text-[#9f3c16] whitespace-nowrap">
            PKR {item.price}
          </span>
        </div>

        <p className="text-[14px] leading-6 text-[#57423b]/90">
          {item.description}
        </p>
      </div>

      <div className="mt-4 pt-3 flex items-center justify-between gap-3 border-t border-[#E8E2D7]/60">
        {item.tag ? (
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EFEAE1] text-[#57423b] text-xs font-semibold tracking-wide">
            {item.tag}
          </span>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={() => onAddToOrder(item)}
          className="text-[#9f3c16] font-semibold text-[14px] hover:text-[#7d2d10] active:scale-95 transition-all flex items-center gap-1 group-hover:translate-x-0.5 duration-200"
        >
          Add to Order +
        </button>
      </div>
    </article>
  );
}