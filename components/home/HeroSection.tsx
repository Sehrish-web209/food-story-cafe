import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F6F4EF]">
     <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-2 lg:px-12">

        {/* Left Content */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#9E3B1C]">
            Food Story • Chakwal
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-[#2C221E] md:text-6xl lg:text-7xl">
            Good Food.
            <br />
            Good Coffee.
            <br />
            Good Moments.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#625852] md:text-lg">
            Artisanal coffee, refreshing sips, and hearty bites served in a
            warm and welcoming space along Talagang Highway, Chakwal.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-[#9E3B1C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7f2f17]"
            >
              Explore Menu & Order
            </a>

            <a
              href="https://wa.me/923185600123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#9E3B1C] px-6 py-3.5 text-sm font-semibold text-[#9E3B1C] transition hover:bg-[#9E3B1C] hover:text-white"
            >
              WhatsApp Order
            </a>
          </div>

          {/* Quick Stats */}
         <div className="mt-10 grid grid-cols-1 gap-5 pt-6 sm:grid-cols-3">

            {/* Location */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A817B]">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-[#2C221E]">
                Talagang Hwy, Chakwal
              </p>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A817B]">
                Hours
              </p>
              <p className="mt-1 text-sm font-medium text-[#2C221E]">
                10 AM – 1 AM Daily
              </p>
            </div>

            {/* Rating */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A817B]">
                Google Rating
              </p>
              <p className="mt-1 text-sm font-medium text-[#2C221E]">
                4.0 ★
              </p>
            </div>

          </div>
        </div>

     {/* Right Visual */}
    <div className="relative min-h-125 pb-8 sm:pb-10 lg:pb-0">

    {/* Main Hero Image */}
    <div className="relative h-105 w-full sm:h-120 lg:absolute lg:inset-0 lg:h-full">
        <div className="relative h-full w-full overflow-hidden rounded-4xl">
            <Image
            src="/gallery/Lawn & Outdoor.jpeg"
            alt="Food Story Cafe outdoor lawn and seating area"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            />
        </div>    
    </div>

    {/* Floating Coffee Card */}
    <div className="relative z-10 mx-auto -mt-10 w-[calc(100%-2rem)] max-w-52 rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur-md animate-[heroFloat_3s_ease-in-out_infinite] sm:-mt-14 sm:ml-auto sm:mr-6 lg:absolute lg:-bottom-14 lg:-right-14 lg:mx-0 lg:mt-0 lg:max-w-48">
        <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
            src="/gallery/Coffee.jpeg"
            alt="Signature latte at Food Story Cafe"
            fill
            sizes="(max-width: 1024px) 208px, 208px"
            className="object-cover"
        />
        </div>

        <div className="px-2 pb-2 pt-3">
        <p className="text-xs uppercase tracking-wider text-[#8A817B]">
            Signature Sip
        </p>

        <p className="mt-1 text-sm font-semibold text-[#2C221E]">
            Signature Latte
        </p>
        </div>

    </div>
    </div>

    </div>
    </section>
  );
}