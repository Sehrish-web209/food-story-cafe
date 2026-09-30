export interface BusinessData {
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

export const businessData: BusinessData = {
  name: "Food Story Café & Kitchen",
  address: "Talagang Highway, Chakwal, Punjab, 48800",
  phone: "0318 5600123",
  whatsapp: "923185600123",
  openingHours: "10:00 AM – 1:00 AM Daily",
  rating: 4.0,
  totalReviews: 455,

  // Replace these with the exact Google Maps URL you already verified.
    mapsUrl: "https://maps.app.goo.gl/WmG49RA4EKme4KBy8",

  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Food+Story,+Talagang+Hwy,+Chakwal",
};