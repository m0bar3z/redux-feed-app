import { type FC } from "react";
import Image from "next/image";
import type { PostStateType } from "@/lib/features/posts/postsSlice";
import Actions from "./Actions";

type CardPropsType = PostStateType;

const Card: FC<CardPropsType> = ({ caption, display_src, id, likes }) => {
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
        <Actions id={id} />
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
