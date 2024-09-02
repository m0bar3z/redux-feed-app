"use client";

import { type FC, memo, useEffect } from "react";
import { selectPosts, selectPostsStatus, fetchPosts } from "@/lib/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Card from "./Card";

const List: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const postStatus = useAppSelector(selectPostsStatus);

  useEffect(() => {
    if (postStatus === "idle") dispatch(fetchPosts);
  }, [postStatus, dispatch]);

  return postStatus === "pending" ? (
    <div>Loading,,,</div>
  ) : (
    posts.map(post => <Card key={post.id} {...post} />)
  );
};

export default memo(List);
