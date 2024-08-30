"use client";

import { type FC, memo } from "react";
import { selectPosts } from "@/lib/features/posts/postsSlice";
import { useAppSelector } from "@/lib/hooks";
import Card from "./Card";

const List: FC = () => {
  const posts = useAppSelector(selectPosts);
  return posts.map(post => <Card key={post.id} {...post} />);
};

export default memo(List);
