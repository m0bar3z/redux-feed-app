import { NextResponse } from "next/server";
import { posts } from "@/constants/mockData";

export async function GET() {
  return NextResponse.json({
    message: "ok!",
    data: posts,
  });
}
