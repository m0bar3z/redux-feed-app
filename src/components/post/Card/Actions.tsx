"use client";

import { type FC, memo, useState } from "react";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "@/lib/hooks";
import { deleteLike, addNewLike, removeLike } from "@/lib/features/posts/postsSlice";

const Actions: FC<{ id: string }> = ({ id }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleAddLike = () => {
    dispatch(addNewLike(id));
    setIsLiked(true);
  };

  const handleRemoveLike = () => {
    dispatch(removeLike(id));
    setIsLiked(false);
  };

  return (
    <div className="flex gap-2">
      {isLiked ? (
        <SolidHeartIcon
          className="icon-btn text-red-500 hover:text-red-500"
          onClick={handleRemoveLike}
        />
      ) : (
        <HeartIcon
          className="icon-btn transition-all duration-300 active:scale-125"
          onClick={handleAddLike}
        />
      )}

      <ChatBubbleLeftIcon className="icon-btn" onClick={() => console.log("new comment")} />
    </div>
  );
};

export default memo(Actions);
