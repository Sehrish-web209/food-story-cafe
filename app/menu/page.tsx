'use client';

import React, { useState } from 'react';
import MenuCard from '@/components/menu/MenuCard';
import OrderDrawer from '@/components/menu/OrderDrawer';
import type { MenuItem } from '@/components/menu/MenuCard';
import type { OrderItem } from '@/components/menu/OrderDrawer';

const menuItems: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Double-shot Espresso',
    price: 350,
    description:
      'Rich, concentrated extraction with thick golden crema from premium freshly roasted Arabica beans.',
    category: 'Hot Coffee',
    tag: 'Hot Seller',
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    price: 540,
    description:
      'Freshly extracted double espresso balanced with steamed milk and delicate French Madagascar vanilla syrup.',
    category: 'Hot Coffee',
    tag: 'Bestseller',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 480,
    description:
      'Classic Italian espresso with velvety microfoam and a dusting of premium organic cocoa.',
    category: 'Hot Coffee',
    tag: 'Traditional',
  },
  {
    id: 'mochaccino',
    name: 'Mochaccino',
    price: 580,
    description:
      'Rich dark chocolate mocha blended seamlessly with double-shot espresso and textured steamed milk.',
    category: 'Hot Coffee',
    tag: 'Chocolate Infused',
  },
  {
    id: 'cold-frappe',
    name: 'Cold Frappe',
    price: 620,
    description:
      'Ice-blended espresso whip with fresh cream, a hint of cocoa, and finely crushed ice.',
    category: 'Cold Sips & Frappes',
    tag: 'Resident Chill',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: 590,
    description:
      'Chilled espresso, dark chocolate syrup, and cold farm milk poured generously over crystal clear ice.',
    category: 'Cold Sips & Frappes',
    tag: 'Refreshing',
  },
  {
    id: 'lotus-frappe',
    name: 'Lotus Frappe',
    price: 680,
    description:
      'Blended ice-coffee with Lotus Biscoff spread and crushed cookies crumble crown.',
    category: 'Cold Sips & Frappes',
    tag: 'Customer Favorite',
  },
  {
    id: 'special-shake',
    name: 'FoodStory Special Shake',
    price: 690,
    description:
      'The cafe’s house-crafted blending, daily gelato, roasted crunch, and velvety ribbons of caramel chocolate.',
    category: 'Signature Shakes',
    tag: 'Signature',
  },
  {
    id: 'belgian-chocolate',
    name: 'Belgian Chocolate Velvet',
    price: 650,
    description:
      'Thick imported Belgian dark chocolate blended with cold milk gelato and whipped cream topping.',
    category: 'Signature Shakes',
    tag: 'Rich Sweet',
  },
  {
    id: 'strawberry-shake',
    name: 'Strawberry Cream Indulgence',
    price: 620,
    description:
      'Fresh ripe strawberries churned with sweet cream and vanilla bean gelato.',
    category: 'Signature Shakes',
    tag: 'Fruity',
  },
  {
    id: 'chicken-panini',
    name: 'Grilled Chicken Panini',
    price: 820,
    description:
      'Tender marinated grilled chicken breast, mozzarella melt, bell peppers, and signature house herb aioli on hot-pressed bread. Served with crisp fries.',
    category: 'Paninis & Sandwiches',
    tag: 'Includes Fries',
  },
  {
    id: 'club-sandwich',
    name: 'Highway Club Sandwich',
    price: 790,
    description:
      'Triple-decker toasted sourdough with smoked chicken, farm-fresh egg, cheddar cheese, and grilled bacon.',
    category: 'Paninis & Sandwiches',
    tag: 'Classic',
  },
  {
    id: 'roast-beef-sub',
    name: 'Artisanal Roast Beef Sub',
    price: 890,
    description:
      'Slow-roasted sliced beef tenderloin loaded in a toasted artisanal baguette with caramelized onions and melted provolone.',
    category: 'Paninis & Sandwiches',
    tag: 'Chef Special',
  },
  {
    id: 'molten-lava',
    name: 'Molten Lava Warm Center',
    price: 750,
    description:
      'Rich Belgian dark cacao cake baked to order with an authentic erupting hot chocolate center, paired with a chilled dairy scoop.',
    category: 'Desserts & Patisserie',
    tag: 'Baked Fresh',
  },
  {
    id: 'lotus-cheese',
    name: 'Lotus Cheese Slice',
    price: 680,
    description:
      'Velvety Philadelphia style cream cheese base infused with Belgian Biscoff spread on a buttery caramelized crumb base.',
    category: 'Desserts & Patisserie',
    tag: 'Bestseller',
  },
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    price: 650,
    description:
      'Savoiardi ladyfingers soaked in dark espresso and liqueur, layered with rich mascarpone zabaglione.',
    category: 'Desserts & Patisserie',
    tag: 'Italian Classic',
  },
];

const categoryConfig = [
  { name: 'Hot Coffee', subTag: 'ARTISAN BREWS', cols: 'md:grid-cols-2' },
  { name: 'Cold Sips & Frappes', subTag: 'ICED REFRESHMENTS', cols: 'md:grid-cols-2' },
  { name: 'Signature Shakes', subTag: 'INDULGENT BLENDS', cols: 'md:grid-cols-3' },
  { name: 'Paninis & Sandwiches', subTag: 'HEARTY BITES', cols: 'md:grid-cols-3' },
  { name: 'Desserts & Patisserie', subTag: 'SWEET MOMENTS', cols: 'md:grid-cols-3' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const handleAddToOrder = (item: MenuItem) => {
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
        <div className="mb-12 flex gap-2 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
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
              onClick={() => setActiveCategory(cat.name)}
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
      </section>

      {/* Menu Sections */}
      <main className="mx-auto max-w-7xl px-6 lg:px-16">
        {categoryConfig
          .filter(
            (cat) =>
              activeCategory === 'All' ||
              activeCategory === cat.name
          )
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

                <div className={`grid grid-cols-1 gap-5 ${cat.cols}`}>
                  {categoryItems.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      onAddToOrder={handleAddToOrder}
                    />
                  ))}
                </div>
              </section>
            );
          })}
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
            className="w-full rounded-full bg-[#9f3c16] px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#1c1c18] sm:w-auto"
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