"use client";

import Image from "next/image";
import Link from "next/link";
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

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string;
  description?: string;
}

export default function AboutPage() {
  const [business, setBusiness] = useState<BusinessData | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const [businessResponse, galleryResponse] = await Promise.all([
          fetch("/api/business"),
          fetch("/api/gallery"),
        ]);

        if (!businessResponse.ok || !galleryResponse.ok) {
          throw new Error("Failed to fetch About page data");
        }

        const businessData: BusinessData = await businessResponse.json();
        const galleryData: GalleryItem[] = await galleryResponse.json();

        setBusiness(businessData);
        setGallery(galleryData);
      } catch (error) {
        console.error("Error fetching About page data:", error);
      }
    }

    fetchAboutData();
  }, []);

  const indoorSeating = gallery.find(
    (item) => item.title === "Indoor Seating"
  );

  const coffeeImage = gallery.find(
    (item) => item.title === "Latte Art & Coffee"
  );

 const cheesecakeImage = gallery.find(
  (item) => item.title === "Cheesecake Slice"
);

  const gardenSeating = gallery.find(
    (item) => item.title === "Garden Seating"
  );

  const eveningAmbiance = gallery.find(
    (item) => item.title === "Outdoor Night Ambiance"
  );

  const formatOpeningHours = (hours: string) => {
    return hours.replace(" Daily", "");
  };

  return (
    <main className="bg-[#fcf9f3] text-[#1c1c18]">
      {/* Hero / Introduction */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-6 md:pt-8 lg:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-sm bg-[#ebe8e2] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9f3c16]">
              About {business?.name ?? "Food Story"} • Chakwal
            </span>

            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              A welcoming gathering place built on fresh taste & honest
              hospitality.
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-base leading-7 text-[#57423b] sm:text-lg">
              Food Story Café & Kitchen brings together specialty coffee,
              refreshing drinks, savoury bites, and desserts in a warm and
              welcoming space along Talagang Highway, Chakwal.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {business?.address && (
                <span className="rounded-full bg-[#f0eee8] px-3 py-1.5 text-xs text-[#57423b]">
                  {business.address}
                </span>
              )}

              {business?.openingHours && (
                <span className="rounded-full bg-[#f0eee8] px-3 py-1.5 text-xs text-[#57423b]">
                  {formatOpeningHours(business.openingHours)}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Story */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* Main Indoor Seating Card */}
          {indoorSeating && (
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm lg:col-span-7">
              <div className="relative aspect-4/3 min-h-70 overflow-hidden sm:aspect-auto sm:h-130">
                <Image
                  src={indoorSeating.image}
                  alt={indoorSeating.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center bg-[#f6f3ed] p-5">
                <h2 className="font-serif text-xl font-semibold">
                  {indoorSeating.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#57423b]">
                  {indoorSeating.description ??
                    "A comfortable indoor setting at Food Story Café & Kitchen."}
                </p>
              </div>
            </div>
          )}

          {/* Supporting Image Cards */}
          <div className="grid h-full gap-6 lg:col-span-5 lg:grid-rows-2">
            {/* Coffee */}
            {coffeeImage && (
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative min-h-55 flex-1 overflow-hidden">
                  <Image
                    src={coffeeImage.image}
                    alt={coffeeImage.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>

                <div className="flex min-h-19 items-center justify-between gap-4 bg-[#f6f3ed] p-5">
                  <span className="font-semibold text-[#1c1c18]">
                    {coffeeImage.title}
                  </span>

                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#9f3c16]">
                    {coffeeImage.tag}
                  </span>
                </div>
              </div>
            )}

            {/* Cheesecake */}
            {cheesecakeImage && (
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative min-h-55 flex-1 overflow-hidden">
                  <Image
                    src={cheesecakeImage.image}
                    alt={cheesecakeImage.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>

                <div className="flex min-h-19 items-center justify-between gap-4 bg-[#f6f3ed] p-5">
                  <span className="font-semibold text-[#1c1c18]">
                    {cheesecakeImage.title}
                  </span>

                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#9f3c16]">
                    {cheesecakeImage.tag}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What Makes Food Story Special */}
      <section className="bg-[#f6f3ed] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="mb-12 max-w-2xl">
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#9f3c16]">
              Deliberate Choices
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              More than just a stop for coffee.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#57423b] sm:text-base">
              Food Story offers a comfortable setting to pause, meet, eat,
              enjoy coffee, and spend time with family and friends in Chakwal.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Freshly Prepared",
                text: "Savoury food and desserts prepared fresh for every visit.",
              },
              {
                number: "02",
                title: "Coffee & Drinks",
                text: "Coffee, chilled beverages, and refreshing drinks for every mood.",
              },
              {
                number: "03",
                title: "Comfortable Space",
                text: "A welcoming environment for families, friends, students, and visitors.",
              },
              {
                number: "04",
                title: "Highway Access",
                text: "Conveniently located along Talagang Highway in Chakwal.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md"
              >
                <span className="text-lg font-bold text-[#9f3c16]">
                  {item.number}
                </span>

                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#57423b]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Space */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-16">
        <div className="mb-12 max-w-3xl">
          <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#9f3c16]">
            Our Space
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Find your comfortable corner.
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#57423b] sm:text-base">
            Whether you are meeting friends, spending time with family, or
            simply enjoying a quiet coffee, Food Story offers a relaxed café
            setting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            indoorSeating && {
              image: indoorSeating.image,
              title: indoorSeating.title,
              text: indoorSeating.description,
            },
            gardenSeating && {
              image: gardenSeating.image,
              title: gardenSeating.title,
              text: gardenSeating.description,
            },
            eveningAmbiance && {
              image: eveningAmbiance.image,
              title: eveningAmbiance.title,
              text: eveningAmbiance.description,
            },
          ]
            .filter(
              (
                item
              ): item is {
                image: string;
                title: string;
                text: string | undefined;
              } => Boolean(item)
            )
            .map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#57423b]">
                    {item.text ??
                      "A welcoming space to enjoy your time at Food Story Café & Kitchen."}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Location CTA */}
  <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-16">
    <div className="rounded-3xl border border-black/5 bg-[#EFECE6] p-8 md:p-12">
      <span className="inline-block rounded-full bg-[#E5DFD5] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#8C331B]">
        {business?.address ?? "Talagang Highway • Chakwal"}
      </span>

      <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold text-[#2C221E] sm:text-4xl">
        Drop by on your next journey along the highway.
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#2C221E]/80 sm:text-base">
        Stop in for coffee, a quick bite, a family meal, or simply a
        comfortable place to take a break.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {/* Primary CTA */}
        <Link
          href="/menu"
          className="rounded-full bg-[#9E3B1C] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#853016]"
        >
          Explore Menu
        </Link>

        {/* Secondary CTA */}
        {business?.directionsUrl && (
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#2C221E]/20 px-6 py-3 text-sm font-medium text-[#2C221E] transition-all hover:bg-[#2C221E]/5"
          >
            Get Directions
          </a>
        )}

        {/* Secondary CTA */}
        {business?.phone && (
          <a
            href={`tel:${business.phone}`}
            className="rounded-full border border-[#2C221E]/20 px-6 py-3 text-sm font-medium text-[#2C221E] transition-all hover:bg-[#2C221E]/5"
          >
            Call Desk
          </a>
        )}
      </div>

      {/* Bottom Stats */}
      {business && (
        <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-black/10 pt-6">
          <div>
            <p className="font-serif text-2xl font-bold text-[#2C221E]">
              {business.rating.toFixed(1)}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#2C221E]/60">
              Google Rating
            </p>
          </div>

          <div className="h-8 w-px bg-black/10" />

          <div>
            <p className="font-serif text-2xl font-bold text-[#2C221E]">
              {business.totalReviews}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#2C221E]/60">
              Google Reviews
            </p>
          </div>

          <div className="h-8 w-px bg-black/10" />

          <div>
            <p className="font-serif text-lg font-bold text-[#2C221E]">
              {formatOpeningHours(business.openingHours)}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#2C221E]/60">
              Daily
            </p>
          </div>
        </div>
      )}
    </div>
  </section>
    </main>
  );
}
