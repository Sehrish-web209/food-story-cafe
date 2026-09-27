'use client';

import React, { useEffect, useRef, useState } from 'react';
import MenuCard from '@/components/menu/MenuCard';
import OrderDrawer from '@/components/menu/OrderDrawer';
import type { MenuItem } from '@/components/menu/MenuCard';
import type { OrderItem } from '@/components/menu/OrderDrawer';

const categoryConfig = [
  { name: 'Coffee', subTag: 'ARTISAN BREWS', cols: 'md:grid-cols-2' },
  { name: 'Cold Coffee', subTag: 'ICED REFRESHMENTS', cols: 'md:grid-cols-2' },
  { name: 'Ice Tea', subTag: 'ICED REFRESHMENTS', cols: 'md:grid-cols-2' },
  { name: 'Smoothies', subTag: 'FRESH BLENDS', cols: 'md:grid-cols-2' },
  {
    name: 'Cold Beverages & Lemonade',
    subTag: 'REFRESHING SIPS',
    cols: 'md:grid-cols-2',
  },
  {
    name: 'Ice Creams & Desserts',
    subTag: 'SWEET MOMENTS',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Fresh Milk Shakes',
    subTag: 'INDULGENT BLENDS',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Fresh Juices',
    subTag: 'FRESH & NATURAL',
    cols: 'md:grid-cols-2',
  },
  {
    name: 'Delicacies',
    subTag: 'SWEET MOMENTS',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Cakes',
    subTag: 'SWEET MOMENTS',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Mini Cakes',
    subTag: 'SWEET MOMENTS',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Savoury',
    subTag: 'HEARTY BITES',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Pizza / Food Story',
    subTag: 'FOOD STORY SPECIALS',
    cols: 'md:grid-cols-3',
  },
  {
    name: 'Others',
    subTag: 'MORE TO ENJOY',
    cols: 'md:grid-cols-3',
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [visibleItems, setVisibleItems] = useState(15);
  const [visibleCategoryItems, setVisibleCategoryItems] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('/api/menu');

        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }

        const data: MenuItem[] = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to load menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

    const categoryScrollRef = useRef<HTMLDivElement>(null);
    const scrollCategories = (direction: 'left' | 'right') => {
    categoryScrollRef.current?.scrollBy({
      left: direction === 'left' ? -220 : 220,
      behavior: 'smooth',
    });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCategoryItems(5);
  };

  const handleAddToOrder = (item: MenuItem) => {
    if (item.price === null) {
      return;
    }

    setOrderItems((currentItems) => {
      const existingItem = currentItems.find(
        (orderItem) => orderItem.item.id === item.id
      );

      if (existingItem) {
        return currentItems.map((orderItem) =>
          orderItem.item.id === item.id
            ? {
                ...orderItem,
                quantity: orderItem.quantity + 1,
              }
            : orderItem
        );
      }

      return [
        ...currentItems,
        {
          item,
          quantity: 1,
        },
      ];
    });
  };

  const handleCloseOrder = () => {
    setOrderItems([]);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f3] pt-28 pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9f3c16]">
            Curated Selection & All-Day Kitchen
          </span>

          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-[#1c1c18] sm:text-5xl">
            Food & Beverage Menu
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#57423b] sm:text-base">
            Comfort bites, cold sips, artisan coffee, and sweet moments
            crafted fresh daily along Talagang Highway.
          </p>
        </div>

{/* Category Filters */}
<div className="mb-12 flex w-full items-center gap-2">
  {/* Left Arrow */}
  <button
    type="button"
    onClick={() => scrollCategories('left')}
    aria-label="Scroll categories left"
    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-stone-700 shadow-sm transition-all hover:bg-stone-100"
  >
    ‹
  </button>

  {/* Scrollable Categories */}
  <div
    ref={categoryScrollRef}
    className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-3 pb-2 scrollbar-none"
  >
    <button
      type="button"
      onClick={() => handleCategoryChange('All')}
      className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
        activeCategory === 'All'
          ? 'bg-[#9f3c16] text-white'
          : 'bg-[#f0eee8] text-[#57423b] hover:bg-[#ebe8e2]'
      }`}
    >
      Full Menu
    </button>

    {categoryConfig.map((cat) => (
      <button
        key={cat.name}
        type="button"
        onClick={() => handleCategoryChange(cat.name)}
        className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
          activeCategory === cat.name
            ? 'bg-[#9f3c16] text-white'
            : 'bg-[#f0eee8] text-[#57423b] hover:bg-[#ebe8e2]'
        }`}
      >
        {cat.name}
      </button>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    type="button"
    onClick={() => scrollCategories('right')}
    aria-label="Scroll categories right"
    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-stone-700 shadow-sm transition-all hover:bg-stone-100"
  >
    ›
  </button>
</div>

</section>

{/* Menu Sections */}
<main className="mx-auto max-w-7xl px-6 lg:px-16">
  {loading ? (
    <p className="py-10 text-center text-sm text-[#57423b]">
      Loading menu...
    </p>
  ) : activeCategory === 'All' ? (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.slice(0, visibleItems).map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onAddToOrder={handleAddToOrder}
          />
        ))}
      </div>

      {menuItems.length > 15 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleItems(
                visibleItems >= menuItems.length
                  ? 15
                  : menuItems.length
              )
            }
            className="rounded-full bg-[#9f3c16] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#7A2F18]"
          >
            {visibleItems >= menuItems.length
              ? 'View Less'
              : 'View More'}
          </button>
        </div>
      )}
    </>
  ) : (
    categoryConfig
      .filter((cat) => cat.name === activeCategory)
      .map((cat) => {
        const categoryItems = menuItems.filter(
          (item) => item.category === cat.name
        );

        return (
          <section key={cat.name} className="mb-12">
            <div className="mb-5 flex items-baseline justify-between border-b border-[#e5e2dc] pb-2">
              <h2 className="font-serif text-3xl font-bold text-[#1c1c18]">
                {cat.name}
              </h2>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#57423b]">
                {cat.subTag}
              </span>
            </div>

            <div
              className={`grid grid-cols-1 gap-5 ${cat.cols}`}
            >
              {categoryItems
                .slice(0, visibleCategoryItems)
                .map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    onAddToOrder={handleAddToOrder}
                  />
                ))}
            </div>

            {categoryItems.length > 5 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCategoryItems(
                      visibleCategoryItems >= categoryItems.length
                        ? 5
                        : categoryItems.length
                    )
                  }
                  className="rounded-full bg-[#9f3c16] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#7A2F18]"
                >
                  {visibleCategoryItems >= categoryItems.length
                    ? 'View Less'
                    : 'View More'}
                </button>
              </div>
            )}
          </section>
        );
      })
  )}
</main>

      {/* Highway Takeaway Banner */}
      <section className="mx-auto mb-8 w-full max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-[#f6f3ed] p-6 shadow-sm sm:p-8 md:flex-row lg:p-10">
          <div className="max-w-xl">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#9f3c16]">
              Express Highway Service
            </span>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1c1c18]">
              Highway Takeaway & Curbside Pickup
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#57423b] sm:text-base">
              Passing by Talagang Highway or heading to M-2 Motorway?
              Call ahead and we&apos;ll have your order packed and ready.
            </p>
          </div>

          <a
            href="tel:03185600123"
            className="w-full rounded-full bg-[#9f3c16] px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#7A2F18] sm:w-auto"
          >
            Call for Takeaway: 0318 5600123
          </a>
        </div>
      </section>

      {/* Order Summary Drawer */}
      <OrderDrawer
        items={orderItems}
        onClose={handleCloseOrder}
      />
    </div>
  );
}