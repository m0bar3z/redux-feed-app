"use client";

import { type FC, memo } from "react";
import { selectCount } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increment } from "@/lib/features/counter/counterSlice";

const Counter: FC = () => {
  const value = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Click!
      </button>
      <div>Hey: {value}</div>
    </div>
  );
};

export default memo(Counter);
