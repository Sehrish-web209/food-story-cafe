import { galleryItems } from "@/data/galleryData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(galleryItems);
}