import { NextResponse } from "next/server";
import { businessData } from "@/data/businessData";

export async function GET() {
  return NextResponse.json(businessData);
}