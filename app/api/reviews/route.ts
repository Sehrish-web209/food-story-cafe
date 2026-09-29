import { reviewsData } from "@/data/reviewsData";

export async function GET() {
  return Response.json(reviewsData);
}