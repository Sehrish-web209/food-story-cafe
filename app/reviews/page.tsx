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
  reviews: Review[];
}

interface BusinessData {
  phone: string;
  mapsUrl: string;
  openingHours: string;
}

export default function ReviewsPage() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [business, setBusiness] = useState<BusinessData | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const reviewsData: ReviewsData = await response.json();
        setData(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await fetch("/api/business");

        if (!response.ok) {
          throw new Error("Failed to fetch business data");
        }

        const businessData: BusinessData = await response.json();
        setBusiness(businessData);
      } catch (error) {
        console.error("Error fetching business data:", error);
      }
    }

    fetchBusiness();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-[#57423b]">Loading reviews...</p>
        </div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-[#57423b]">
            Unable to load reviews right now.
          </p>
        </div>
      </main>
    );
  }

  const averageRating = (type: "food" | "service" | "atmosphere") => {
    if (!data.reviews.length) return "0.0";

    const total = data.reviews.reduce(
      (sum, review) => sum + review.specificRatings[type],
      0
    );

    return (total / data.reviews.length).toFixed(1);
  };

  return (
    <main className="w-full bg-[#FDFBF7]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-4 md:pt-8 lg:px-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex rounded-full border border-[#9E3B1C]/10 bg-[#F7F2EC] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#9E3B1C]">
              ✦ Guest Reviews & Stories
            </span>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#1c1c18] sm:text-5xl">
              What Our Guests Say
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#57423b]">
              Real experiences and honest reviews from guests visiting Food
              Story Café & Kitchen in Chakwal.
            </p>
          </div>

          {business?.mapsUrl && (
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-lg border border-[#9E3B1C]/20 bg-[#F7F2EC] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#9E3B1C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9E3B1C] hover:text-white"
            >
              + Write a Review
            </a>
          )}
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-[#F7F2EC] py-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
          {/* Overall Rating */}
          <div className="flex items-center gap-5 rounded-xl border border-[#9E3B1C]/10 bg-[#FDFBF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span className="font-serif text-5xl font-bold text-[#1c1c18]">
              {data.overallRating.toFixed(1)}
            </span>

            <div>
              <div className="text-xl tracking-wide text-[#9E3B1C]">
                ★★★★★
              </div>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#57423b]">
                {data.totalReviews} Google Reviews
              </p>
            </div>
          </div>

          {/* Food */}
          <div className="cursor-default rounded-xl border border-[#9E3B1C]/10 bg-[#FDFBF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8A817B]">
              Food
            </p>

            <p className="mt-2 font-serif text-3xl font-bold text-[#1c1c18]">
              {averageRating("food")}/5
            </p>
          </div>

          {/* Service */}
          <div className="cursor-default rounded-xl border border-[#9E3B1C]/10 bg-[#FDFBF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8A817B]">
              Service
            </p>

            <p className="mt-2 font-serif text-3xl font-bold text-[#1c1c18]">
              {averageRating("service")}/5
            </p>
          </div>

          {/* Atmosphere */}
          <div className="cursor-default rounded-xl border border-[#9E3B1C]/10 bg-[#FDFBF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8A817B]">
              Atmosphere
            </p>

            <p className="mt-2 font-serif text-3xl font-bold text-[#1c1c18]">
              {averageRating("atmosphere")}/5
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-12 lg:px-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews
            .filter((review) => review.id !== 4)
            .map((review, index) => (
              <article
                key={review.id ?? index}
                className="cursor-pointer rounded-xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#9E3B1C]/20 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-[#1c1c18]">
                      {review.name}
                    </h2>

                    <p className="mt-1 text-xs text-[#8A817B]">
                      {review.time}
                    </p>
                  </div>

                  <span className="text-sm text-[#9E3B1C]">
                    {"★".repeat(Math.round(review.rating))}
                  </span>
                </div>

                <p className="mt-6 text-sm italic leading-6 text-[#57423b]">
                  “{review.reviewText}”
                </p>
              </article>
            ))}
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="bg-[#2C221E] py-14 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C85A32]">
              ✦ Share Your Experience
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#FDFBF7] md:text-4xl">
              Enjoyed your visit?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#D8CEC7]">
              Share your experience with Food Story Café & Kitchen on Google.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            {business?.mapsUrl && (
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#9E3B1C] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7D2D10] hover:shadow-md"
              >
                Write a Google Review
              </a>
            )}

            {business?.phone && (
              <a
                href={`tel:${business.phone}`}
                className="text-xs font-semibold uppercase tracking-wider text-[#FDFBF7] underline underline-offset-4 transition-colors duration-300 hover:text-[#C85A32]"
              >
                Call {business.phone}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="bg-[#EFECE6] py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-16">
          {/* Image */}
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/gallery/Garden Seating.jpeg"
              alt="Garden seating at Food Story Café & Kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9E3B1C]">
              ✦ More Than A Meal
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2C221E] md:text-4xl">
              A Place to Stay, Gather & Enjoy
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#625852]">
              From relaxed coffee breaks to family gatherings, Food Story
              offers a comfortable setting along Talagang Highway in Chakwal.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {/* Google Rating */}
              <div className="rounded-xl bg-[#FDFBF7] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-serif text-2xl font-bold text-[#1c1c18]">
                  {data.overallRating.toFixed(1)}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8A817B]">
                  Google Rating
                </p>
              </div>

              {/* Reviews */}
              <div className="rounded-xl bg-[#FDFBF7] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-serif text-2xl font-bold text-[#1c1c18]">
                  {data.totalReviews}+
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8A817B]">
                  Google Reviews
                </p>
              </div>

              {/* Opening Hours */}
              <div className="rounded-xl bg-[#FDFBF7] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-serif text-2xl font-bold text-[#1c1c18]">
                  Daily
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8A817B]">
                  {business?.openingHours ?? "Opening Hours"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
