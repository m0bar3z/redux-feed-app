import { NextResponse } from "next/server";
import { posts } from "@/constants/mockData";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return NextResponse.json({
    message: "ok!",
    data: posts,
  });
}
