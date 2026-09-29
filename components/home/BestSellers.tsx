"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  price: number | null;
  description: string;
  category: string;
  tag?: string;
}

interface FeaturedItem {
  id: string;
  displayName: string;
  image: string;
  tag: string;
  filter: "Coffee & Drinks" | "Savory Food" | "Desserts";
  displayDescription: string;
}

interface DisplayItem extends MenuItem {
  displayName: string;
  image: string;
  displayTag: string;
  filter: FeaturedItem["filter"];
  displayDescription: string;
}

const featuredItems: FeaturedItem[] = [
 {
  id: "mango-smoothie",
  displayName: "Mango Smoothie",
  image: "/gallery/Mango Smoothie.jpeg",
  tag: "Refreshing",
  filter: "Coffee & Drinks",
  displayDescription: "A refreshing mango smoothie.",
},
 {
  id: "dairy-milk-chocolate-slice",
  displayName: "Dairy Milk Cake",
  image: "/gallery/Cake.jpeg",
  tag: "Popular",
  filter: "Desserts",
  displayDescription: "Rich dairy milk chocolate cake.",
},
  {
  id: "food-story-special",
  displayName: "Food Story Pizza",
  image: "/gallery/Pizzas.jpeg",
  tag: "Signature",
  filter: "Savory Food",
  displayDescription: "Topped with chicken fajita, olives, and fresh cheese.",
},
  {
  id: "lemonade",
  displayName: "Mint Margarita",
  image: "/gallery/Mint Margarita.jpeg",
  tag: "Refreshing",
  filter: "Coffee & Drinks",
  displayDescription: "A refreshing mint margarita.",
},
 {
  id: "cafe-latte",
  displayName: "Signature Latte",
  image: "/gallery/Coffee.jpeg",
  tag: "Signature",
  filter: "Coffee & Drinks",
  displayDescription: "Smooth and creamy signature latte.",
},
 {
  id: "grilled-chicken-panini",
  displayName: "Club Sandwich",
  image: "/gallery/Sandwich.jpeg",
  tag: "Popular",
  filter: "Savory Food",
  displayDescription: "A satisfying grilled chicken sandwich.",
},
];

export default function BestSellers() {
  const [items, setItems] = useState<DisplayItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("All Items");

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch("/api/menu");

        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        const data: MenuItem[] = await response.json();

        const selectedItems: DisplayItem[] = featuredItems
          .map((featured) => {
            const menuItem = data.find(
              (item) => item.id === featured.id
            );

            if (!menuItem) {
              return null;
            }

           return {
            ...menuItem,
            displayName: featured.displayName,
            image: featured.image,
            displayTag: featured.tag,
            filter: featured.filter,
            displayDescription: featured.displayDescription,
            };
          })
          .filter((item): item is DisplayItem => item !== null);

        setItems(selectedItems);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }

    fetchMenu();
  }, []);

  return (
    <section className="border-t border-stone-200/80 bg-[#F6F4EF] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

        {/* Section Divider */}
        <div className="mb-12 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#9E3B1C]">
          <span className="h-px flex-1 bg-stone-300/60" />

          <span>✦ Curated House Favorites</span>

          <span className="h-px flex-1 bg-stone-300/60" />
        </div>

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-stone-900 md:text-4xl">
            Favorites Worth Trying
          </h2>

          <p className="mt-5 text-base leading-7 text-[#625852] md:text-lg">
            A selection of Food Story favorites, from refreshing drinks and
            handcrafted coffee to satisfying meals and sweet treats.
          </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["All Items", "Coffee & Drinks", "Savory Food", "Desserts"].map(
                (filter) => (
                <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    activeFilter === filter
                        ? "border-[#9E3B1C] bg-[#9E3B1C] text-white"
                        : "border-stone-300 bg-white text-[#625852] hover:border-[#9E3B1C] hover:text-[#9E3B1C]"
                    }`}
                >
                    {filter}
                </button>
                )
            )}
        </div>
        </div>

        {/* Featured Items */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items
            .filter(
                (item) =>
                activeFilter === "All Items" || item.filter === activeFilter
            )
            .map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/60 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F4F1EA]">
                <Image
                  src={item.image}
                  alt={`${item.displayName} at Food Story Cafe`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-contain object-center p-2"
                />

                <span className="absolute left-4 top-4 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#9E3B1C] backdrop-blur-sm">
                  {item.displayTag}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold text-[#2C221E]">
                    {item.displayName}
                  </h3>

                  {item.price !== null && (
                    <span className="shrink-0 text-sm font-semibold text-[#9E3B1C]">
                      Rs. {item.price}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-6 text-[#625852]">
                 {item.displayDescription}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/menu"
            className="inline-flex items-center rounded-full bg-[#9E3B1C] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#7f2f17]"
          >
            View Full Menu
            <span className="ml-2">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}