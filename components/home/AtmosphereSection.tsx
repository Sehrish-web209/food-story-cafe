"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  time: string;
  badges: string[];
  reviewText: string;
  specificRatings: {
    food: number;
    service: number;
    atmosphere: number;
  };
  localGuide?: boolean;
}

interface ReviewsData {
  overallRating: number;
  totalReviews: number;
  keywords: {
    name: string;
    count: number;
  }[];
  reviews: Review[];
}

const atmospherePoints = [
  {
    title: "High-Speed Wi-Fi & Work Zones",
    description:
      "Quiet indoor corners with accessible power outlets for work and study.",
  },
  {
    title: "Family-Friendly & Safe Dining",
    description:
      "Spacious lawn and indoor seating setups for families and large groups.",
  },
  {
    title: "Talagang Highway Traveler Stop",
    description:
      "Convenient roadside access with ample hassle-free parking.",
  },
];

export default function AtmosphereSection() {
  const [review, setReview] = useState<Review | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data: ReviewsData = await response.json();

        // Featured review: Rafey Minhas
       const featuredReview = data.reviews.find(
        (item) => item.id === 4
      );

        setReview(featuredReview ?? null);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section className="bg-[#EFECE6] py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:px-10 lg:grid-cols-2 lg:gap-14 lg:px-12">

        {/* Left Content */}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9E3B1C]">
            ✦ A FREELANCER & FAMILY HUB
          </p>

          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#2C221E] md:text-4xl">
            The Gathering Atmosphere
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#625852] md:text-lg">
            Food Story isn't just about food—it’s Chakwal’s premier open-air
            avenue. Whether you’re stopping over for an express break on
            Talagang Highway, working remotely, or hosting a family dinner,
            we’ve built the ideal setting.
          </p>

          {/* Atmosphere Features */}
          <div className="mt-8 space-y-6">
            {atmospherePoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9E3B1C]/10 text-sm font-semibold text-[#9E3B1C]">
                  ✓
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-6 text-[#2C221E]">
                    {point.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#625852]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Atmosphere Layout */}
        <div className="min-w-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start">

            {/* Left Tall Photo */}
            <div className="group relative aspect-3/4 overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/gallery/Indoor Seating.jpeg"
                alt="Indoor seating area at Food Story Cafe"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Photo + Review */}
            <div className="flex min-w-0 flex-col gap-4">

              {/* Top Right Photo */}
              <div className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/gallery/Lawn & Outdoor.jpeg"
                  alt="Outdoor lawn seating at Food Story Cafe"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Featured Guest Review */}
              {review && (
                <article className="min-h-45 cursor-pointer rounded-2xl border border-black/5 bg-[#F6F4EF] p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">

                  {/* Category */}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9E3B1C]">
                    Featured Guest Review
                  </p>

                  {/* Reviewer + Stars */}
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="min-w-0 truncate text-sm font-semibold text-[#2C221E]">
                      {review.name}
                    </h3>

                    <span
                      className="shrink-0 text-xs tracking-[0.08em] text-[#9E3B1C]"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      ★★★★★
                    </span>
                  </div>

                  {/* Review */}
                  <blockquote className="mt-2 line-clamp-4 text-xs leading-5 text-gray-600">
                    “{review.reviewText}”
                  </blockquote>

                  {/* Review Meta */}
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="truncate text-[9px] font-medium text-[#8A817B]">
                      {review.badges[0]}
                    </span>

                    <span className="shrink-0 text-[9px] text-[#8A817B]">
                      Google Maps · {review.time}
                    </span>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
