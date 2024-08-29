import Card from "@/components/post/Card";
import { type FC } from "react";

const Page: FC = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 pt-8">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Page;
