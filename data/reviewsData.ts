export interface Review {
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

export const reviewsData = {
  overallRating: 4.0,
  totalReviews: 455,

  keywords: [
    { name: "Ambiance", count: 34 },
    { name: "Ice Cream", count: 24 },
    { name: "Shakes", count: 14 },
    { name: "Cooperative Staff", count: 14 },
    { name: "Quality Food", count: 11 },
    { name: "Brownie", count: 9 },
    { name: "Outdoor Seating", count: 6 },
  ],

  reviews: [
    {
      id: 1,
      name: "USAMA ARSHAD ALI",
      rating: 5.0,
      time: "6 months ago",
      badges: ["Dine in", "Quiet Atmosphere", "2 People Group"],
      reviewText:
        "Just had an amazing experience at Food Story! The ambiance is cozy, and the service is top-notch. The food? Absolutely delicious!",
      specificRatings: {
        food: 5,
        service: 5,
        atmosphere: 5,
      },
    },

    {
      id: 2,
      name: "Rafey Minhas",
      rating: 5.0,
      time: "5 months ago",
      badges: ["Late-night Hangout", "Hospitality & Service"],
      reviewText:
        "Always have a great time visiting Food Story. The atmosphere is wonderful—very clean, organized, and the perfect vibe for a late-night hangout. Their coffee and cakes are consistently fresh and delicious. A special shoutout to Babar Bhai; his hospitality and professional behavior make every visit even better.",
      specificRatings: {
        food: 3,
        service: 5,
        atmosphere: 5,
      },
    },

    {
      id: 3,
      name: "Abdul Hannan",
      rating: 5.0,
      time: "4 months ago",
      badges: ["Fresh Food", "Quality Service"],
      reviewText:
        "Very good experience at Food Story. The food was fresh, delicious, and served on time. Staff was friendly and the environment was clean and comfortable. Highly recommended for quality food and excellent service. Staff is very cooperative, special Babar Bhai.",
      specificRatings: {
        food: 5,
        service: 5,
        atmosphere: 5,
      },
    },

    {
      id: 4,
      name: "Danish Khan",
      rating: 5.0,
      time: "7 months ago",
      badges: ["Outdoor Seating", "Family & Kids Friendly"],
      reviewText:
        "Very delicious all items and ambiance is very great. Stress-free feel environment. Outside sitting area is also good for children.",
      specificRatings: {
        food: 5,
        service: 5,
        atmosphere: 5,
      },
      localGuide: true,
    },

    {
      id: 5,
      name: "Zeeshan Haider",
      rating: 5.0,
      time: "3 years ago",
      badges: ["Coffee, Brownie & Snacks", "Family Spending Time"],
      reviewText:
        "One of the best food services in Chakwal. They have quality food. Tried Coffee, ice cream, sandwich, lasagna, brownie, and donut. I must say each and every thing is superb. Recommended to spend quality time with family.",
      specificRatings: {
        food: 5,
        service: 5,
        atmosphere: 5,
      },
      localGuide: true,
    },

    {
      id: 6,
      name: "Muhammad Abdullah",
      rating: 5.0,
      time: "1 year ago",
      badges: ["Quick Coffee Break", "Latte Art"],
      reviewText:
        "Great Place to Relax and Catch up with Friends. This is My Favourite spot for a Quick Coffee Break. The Latte Art is Stunning. The Staff is Friendly. Highly Recommended.",
      specificRatings: {
        food: 5,
        service: 5,
        atmosphere: 5,
      },
    },

    {
      id: 7,
      name: "Zaria Batool",
      rating: 5.0,
      time: "1 year ago",
      badges: ["Safe & Secure", "Cooperative Staff"],
      reviewText:
        "The owner, the team, everyone was so cooperative and caring and felt like a safe and secure place with excellent quality food and service. 100% recommended.",
      specificRatings: {
        food: 4,
        service: 5,
        atmosphere: 5,
      },
    },
  ] as Review[],
};