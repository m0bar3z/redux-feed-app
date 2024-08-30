import { type FC } from "react";
import Counter from "./Counter";
import PostsList from "@/components/post/List";

const Page: FC = () => {
  return (
    <section className="container m-auto flex flex-col gap-4 pt-8">
      <Counter />
      <PostsList />
    </section>
  );
};

export default Page;
