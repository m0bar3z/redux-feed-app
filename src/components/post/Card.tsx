"use client";

import Image from "next/image";
import { type FC } from "react";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import type { PostStateType } from "@/lib/features/posts/postsSlice";

type CardPropsType = PostStateType;

const Card: FC<CardPropsType> = ({ caption, code, display_src, id, likes }) => {
  return (
    <div className="card card-compact relative m-auto w-2/6 rounded-lg border-y-[1px] border-slate-400 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={display_src}
          className="select-none"
          alt="card-image"
          width={1275}
          height={1583}
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <HeartIcon className="icon-btn" onClick={() => console.log("new like")} />
          <ChatBubbleLeftIcon className="icon-btn" onClick={() => console.log("new comment")} />
        </div>
        <div className="font-bold">{likes} likes</div>

        <div className="">
          <span className="mr-1 font-extrabold">username</span>
          <span>{caption}</span>
        </div>
        <div className="">
          <button onClick={() => console.log("comments")}>
            <span>View all 24 comments</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
