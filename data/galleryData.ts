export interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  tag: string;
  image: string;
  description?: string;
}

export type Category =
  | "ALL MOMENTS"
  | "CAFÉ & INTERIOR"
  | "COFFEE & SIPS"
  | "FOOD & DESSERTS"
  | "HIGHWAY & EXTERIOR";

export const categories: Category[] = [
  "ALL MOMENTS",
  "CAFÉ & INTERIOR",
  "COFFEE & SIPS",
  "FOOD & DESSERTS",
  "HIGHWAY & EXTERIOR",
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Cafe Exterior Branding",
    category: "HIGHWAY & EXTERIOR",
    tag: "HIGHWAY",
    image: "/gallery/Cafe Exterior Branding.jpeg",
    description:
    "Festivity is all about good food along Talagang Highway.",
  },
  {
    id: 2,
    title: "Drive-Thru & Takeaway",
    category: "COFFEE & SIPS",
    tag: "TAKEAWAY",
    image: "/gallery/Drive-Thru & Takeaway.jpeg",
    description:
    "Friendly takeaway service for quick coffee sips.",
  },
  {
    id: 3,
    title: "Espresso Bar & Counter",
    category: "CAFÉ & INTERIOR",
    tag: "INTERIOR",
    image: "/gallery/Espresso Bar & Counter.jpeg",
    description:
    "Main coffee bar counter displaying fresh delicacies.",
  },
  {
    id: 4,
    title: "Garden Seating",
    category: "HIGHWAY & EXTERIOR",
    tag:"GARDEN",
    image: "/gallery/Garden Seating.jpeg",
    description:
    "Relaxing outdoor garden sitting under open skies.",
  },
  {
    id: 5,
    title: "Indoor Seating",
    category: "CAFÉ & INTERIOR",
    tag:"INTERIOR",
    image: "/gallery/Indoor Seating.jpeg",
    description:
      "Vibrant indoor seating arrangement with wall art.",
  },
  {
    id: 6,
    title: "Latte Art & Coffee",
    category: "COFFEE & SIPS",
    tag: "COFFEE",
    image: "/gallery/Latte Art & Branding.jpeg",
    description:
      "Freshly brewed hot cappuccino served with sweet treat.",
  },
  {
    id: 7,
    title: "Lotus Cheesecake Slices",
    category: "FOOD & DESSERTS",
    tag: "DESSERT",
    image: "/gallery/Lotus Cheesecake Slices.jpeg",
    description:
      "Rich caramel Lotus Biscoff dessert slices.",
  },
  {
    id: 8,
    title: "Night Glassfront View",
    category: "CAFÉ & INTERIOR",
    tag:"INTERIOR",
    image: "/gallery/Night Glassfront View.jpeg",
    description:
      "Cozy evening lights and welcoming indoor ambiance.",
  },
  {
    id: 9,
    title: "Outdoor Night Ambiance",
    category: "HIGHWAY & EXTERIOR",
    tag:"HIGHWAY",
    image: "/gallery/Outdoor Night Ambiance.jpeg",
    description:
      "Warm night lawn ambience perfect for family gatherings.",
  },
  {
  id: 10,
  title: "Cheesecake Slice",
  category: "FOOD & DESSERTS",
  tag: "DESSERT",
  image: "/gallery/Cheesecake slice.jpeg",
  description: "A freshly served cheesecake slice from Food Story.",
},
];

