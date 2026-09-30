"use client";

import { FormEvent, useEffect, useState } from "react";

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

const GPS_LAT = 32.93;
const GPS_LNG = 72.85;

export default function ContactPage() {
  const [business, setBusiness] = useState<BusinessData | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchBusinessData() {
      try {
        const response = await fetch("/api/business");

        if (!response.ok) {
          throw new Error("Failed to fetch business data");
        }

        const data: BusinessData = await response.json();
        setBusiness(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    }

    fetchBusinessData();
  }, []);

  const formatOpeningHours = (hours: string) => {
    return hours.replace(" Daily", "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const phone = business?.phone ?? "0318 5600123";
  const whatsappNumber = business?.whatsapp ?? "03185600123";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  /*
   * Google Maps embed centered on the specified Food Story location.
   * Business information remains API-driven.
   */
  const mapUrl =
    `https://www.google.com/maps?q=${GPS_LAT},${GPS_LNG}` +
    `&z=16&output=embed`;

  const mapsLink =
    business?.mapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${GPS_LAT},${GPS_LNG}`;

  const directionsLink =
    business?.directionsUrl ??
    `https://www.google.com/maps/dir/?api=1&destination=${GPS_LAT},${GPS_LNG}`;

  return (
    <main className="bg-[#fcf9f3] text-[#1c1c18]">
      {/* PAGE HERO */}
      <section className="border-b border-[#e5e2dc] bg-[#f6f3ed] px-6 pb-10 pt-14 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex max-w-3xl flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9f3c16]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9f3c16]">
                Location & Inquiries
              </span>
            </div>

            <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1c1c18] sm:text-6xl">
              Find Food Story
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#57423b] sm:text-lg">
              Drop by for dine-in, stop on the highway, or contact us for
              takeaway and advance table reservations.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#9f3c16] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#853016]"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* MAIN CONTACT GRID */}
      <section className="px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {/* CONTACT CARD */}
            <div className="flex flex-col gap-6 rounded-2xl border border-[#e5e2dc] bg-white p-6 shadow-[0_12px_32px_-4px_rgba(26,20,18,0.06)] sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-[#e5e2dc] pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#1c1c18]">
                    {business?.name ?? "Food Story Café"}
                  </h2>

                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#57423b]">
                    Chakwal Edition
                  </span>
                </div>

                <span className="shrink-0 rounded bg-[#d3e8d5] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0e1f13]">
                  Open Daily
                </span>
              </div>

              <div className="flex flex-col gap-5 text-sm leading-6 text-[#57423b]">
                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9f3c16]/10 text-sm font-bold text-[#9f3c16]">
                    P
                  </span>

                  <div>
                    <strong className="block text-sm font-semibold text-[#1c1c18]">
                      Highway Address
                    </strong>

                    <span>
                      {business?.address ??
                        "Talagang Highway, Chakwal, Punjab, Pakistan"}
                    </span>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9f3c16]/10 text-sm font-bold text-[#9f3c16]">
                    ◷
                  </span>

                  <div>
                    <strong className="block text-sm font-semibold text-[#1c1c18]">
                      Operating Hours
                    </strong>

                    <span>
                      {business?.openingHours
                        ? `Open Daily: ${formatOpeningHours(
                            business.openingHours
                          )}`
                        : "Open Daily: 10:00 AM – 1:00 AM"}
                    </span>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9f3c16]/10 text-sm font-bold text-[#9f3c16]">
                    ☎
                  </span>

                  <div>
                    <strong className="block text-sm font-semibold text-[#1c1c18]">
                      Direct & WhatsApp Line
                    </strong>

                    <a
                      href={`tel:${phone}`}
                      className="transition-colors hover:text-[#9f3c16]"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="grid grid-cols-1 gap-2 border-t border-[#e5e2dc] pt-4 sm:grid-cols-3">
                <a
                  href={`tel:${phone}`}
                  className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-[#dec0b7] bg-[#f0eee8] p-3 text-[#1c1c18] transition-all hover:-translate-y-0.5 hover:bg-[#9f3c16] hover:text-white"
                >
                  <span className="text-lg text-[#9f3c16] group-hover:text-white">
                    ☎
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Call Now
                  </span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-[#dec0b7] bg-[#f0eee8] p-3 text-[#1c1c18] transition-all hover:-translate-y-0.5 hover:bg-[#9f3c16] hover:text-white"
                >
                  <span className="text-lg text-[#9f3c16] group-hover:text-white">
                    ◉
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    WhatsApp
                  </span>
                </a>

                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-[#dec0b7] bg-[#f0eee8] p-3 text-[#1c1c18] transition-all hover:-translate-y-0.5 hover:bg-[#9f3c16] hover:text-white"
                >
                  <span className="text-lg text-[#9f3c16] group-hover:text-white">
                    ↗
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Directions
                  </span>
                </a>
              </div>
            </div>

            {/* INQUIRY FORM */}
            <div
              id="inquiry-form"
              className="rounded-2xl border border-[#e5e2dc] bg-white p-6 shadow-[0_12px_32px_-4px_rgba(26,20,18,0.06)] sm:p-8"
            >
              <div className="border-b border-[#e5e2dc] pb-4">
                <h2 className="font-serif text-2xl font-semibold text-[#1c1c18]">
                  Send an Inquiry
                </h2>

                <p className="mt-1 text-sm leading-6 text-[#57423b]">
                  Have a special reservation or event question? Drop us a note.
                </p>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-lg border border-[#d3e8d5] bg-[#eef7ef] p-5">
                  <h3 className="font-semibold text-[#1c1c18]">
                    Thank you!
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#57423b]">
                    Your inquiry has been noted. We will get back to you
                    shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold text-[#9f3c16] transition-all hover:-translate-y-0.5 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#57423b]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Usman Ahmed"
                      className="w-full rounded-lg border border-[#dec0b7] bg-[#fcf9f3] px-3.5 py-2.5 text-sm text-[#1c1c18] outline-none transition-all placeholder:text-[#8a726a] hover:-translate-y-0.5 focus:border-[#9f3c16]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact"
                      className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#57423b]"
                    >
                      Phone / Email
                    </label>

                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      placeholder="0300 0000000 or email@domain.com"
                      className="w-full rounded-lg border border-[#dec0b7] bg-[#fcf9f3] px-3.5 py-2.5 text-sm text-[#1c1c18] outline-none transition-all placeholder:text-[#8a726a] hover:-translate-y-0.5 focus:border-[#9f3c16]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#57423b]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we assist you today?"
                      className="w-full resize-none rounded-lg border border-[#dec0b7] bg-[#fcf9f3] px-3.5 py-2.5 text-sm text-[#1c1c18] outline-none transition-all placeholder:text-[#8a726a] hover:-translate-y-0.5 focus:border-[#9f3c16]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#9f3c16] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#853016]"
                  >
                    <span>Send Inquiry</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            id="map-section"
            className="flex flex-col lg:col-span-7"
          >
            {/* MAP CONTAINER */}
            <div className="relative h-85 w-full overflow-hidden rounded-2xl border border-black/5 bg-[#ebe8e2] shadow-sm md:h-90">
              <iframe
                src={mapUrl}
                title="Food Story Café location on Google Maps"
                className="h-full w-full border-0"
                style={{
                  filter:
                    "sepia(15%) contrast(92%) brightness(98%) saturate(85%)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* MAP OVERLAY */}
              <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-black/5 bg-white/95 p-5 shadow-md backdrop-blur-md transition-all hover:-translate-y-0.5 md:right-auto md:max-w-md">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#9f3c16]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9f3c16]">
                    Featured Highway Stop
                  </span>
                </div>

                <h3 className="mt-2 font-serif text-lg font-bold text-[#2C221E]">
                  Talagang Highway, Chakwal, Punjab
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded bg-[#ebe8e2] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#57423b]">
                    Dine-in
                  </span>

                  <span className="rounded bg-[#ebe8e2] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#57423b]">
                    Highway Takeaway
                  </span>

                  <span className="rounded bg-[#ebe8e2] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#57423b]">
                    Curbside Pickup
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-[#57423b] sm:text-sm">
                  Conveniently accessible for local Chakwal residents and
                  travelers on Talagang Highway.
                </p>

                {/* GPS + MAP LINK */}
                <div className="mt-3 flex flex-col gap-2 border-t border-[#e5e2dc] pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-mono font-medium text-[#2C221E]/70">
                    GPS: 32.9300° N, 72.8500° E
                  </span>

                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-xs font-semibold text-[#9E3B1C] transition-all hover:-translate-y-0.5 hover:underline"
                  >
                    OPEN IN MAPS ↗
                  </a>
                </div>
              </div>
            </div>

            {/* TRAVELER FEATURE CARDS */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* PARKING */}
              <div className="flex items-start gap-3 rounded-xl border border-[#e5e2dc] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex items-center justify-center rounded-lg bg-[#9E3B1C]/10 p-2.5 text-[#9E3B1C]">
                  <span className="text-sm font-bold">P</span>
                </span>

                <div>
                  <h3 className="font-semibold text-[#2C221E]">
                    Ample Parking Space
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#57423b]">
                    Convenient parking space for visitors arriving along
                    Talagang Highway.
                  </p>
                </div>
              </div>

              {/* TAKEAWAY */}
              <div className="flex items-start gap-3 rounded-xl border border-[#e5e2dc] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex items-center justify-center rounded-lg bg-[#9E3B1C]/10 p-2.5 text-[#9E3B1C]">
                  <span className="text-base font-bold">⚡</span>
                </span>

                <div>
                  <h3 className="font-semibold text-[#2C221E]">
                    Quick Highway Takeaway
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#57423b]">
                    Pre-order through WhatsApp for a quick pickup during your
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT BANNER */}
      <section className="border-t border-[#e5e2dc] bg-[#ebe8e2] px-6 py-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9f3c16]">
              Plan Your Visit
            </span>

            <h2 className="mt-1 font-serif text-xl font-semibold text-[#1c1c18] sm:text-2xl">
              Experiencing Chakwal? Make Food Story Your Preferred Halt.
            </h2>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg border border-[#2C221E] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2C221E] transition-all hover:-translate-y-0.5 hover:bg-[#2C221E] hover:text-white"
          >
            Book a Table or Order Ahead
          </a>
        </div>
      </section>
    </main>
  );
}