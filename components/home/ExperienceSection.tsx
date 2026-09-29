import Image from "next/image";

const experiences = [
  {
    title: "Good Food",
    description:
      "Enjoy freshly prepared meals, hearty bites, and delicious favorites made for every kind of craving.",
    image: "/gallery/pizzas.jpeg",
    alt: "Fresh pizzas served at Food Story Cafe",
  },
  {
    title: "Coffee & Refreshments",
    description:
      "From comforting coffee to refreshing drinks and sweet treats, there is something for every mood.",
    image: "/gallery/Desserts.jpeg",
    alt: "Desserts and refreshments at Food Story Cafe",
  },
  {
    title: "Warm Atmosphere",
    description:
      "A comfortable space to sit back, enjoy good food, and spend quality time with friends and family.",
    image: "/gallery/Interior.jpeg",
    alt: "Indoor seating area at Food Story Cafe",
  },
];

export default function ExperienceSection() {
  return (
    <section className="border-t border-stone-200/80 bg-[#F6F4EF] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-12 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#9E3B1C]">
            <span className="h-px flex-1 bg-stone-300/60" />
            <span>✦ A Well-Rounded Café Experience</span>
            <span className="h-px flex-1 bg-stone-300/60" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 font-serif text-3xl text-stone-900 md:text-4xl">
            More Than Just a Meal
          </h2>

          <p className="mt-5 text-base leading-7 text-[#625852] md:text-lg">
            Good food, refreshing drinks, and a welcoming atmosphere come
            together to make every visit a little more special.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="overflow-hidden rounded-3xl border border-stone-200/60 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAE5DE]">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#2C221E]">
                  {experience.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#625852]">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}