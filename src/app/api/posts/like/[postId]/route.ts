import { NextResponse } from "next/server";
import { posts } from "@/constants/mockData";

type Context = {
  params: {
    postId: string;
  };
};

export async function PUT(request: Request, context: Context) {
  const { params } = context;
  const post = posts.find(p => p.id === params.postId);

  if (post?.likes) post.likes += 1;
  return NextResponse.json({
    message: "ok!",
    data: post,
  });
}

export async function GET(request: Request, context: Context) {
  const { params } = context;

  const post = posts.find(p => p.id === params.postId);

  return NextResponse.json({
    message: "ok!",
    data: post ?? "Post not found!",
  });
}

export async function DELETE(request: Request, context: Context) {
  const { params } = context;
  const post = posts.find(p => p.id === params.postId);

  if (post?.likes) post.likes -= 1;
  return NextResponse.json({
    message: "ok!",
    data: post,
  });
}
