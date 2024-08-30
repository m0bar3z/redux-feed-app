import Card from "@/components/post/Card";
import { type FC } from "react";
import Counter from "./Counter";

const Page: FC = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 pt-8">
      <Counter />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Page;
