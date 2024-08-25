import { type FC } from "react";
import SidebarLinks from "./SidebarLinks";

const Sidebar: FC = () => {
  return (
    <nav className="hidden h-screen w-0 border-r-2 border-slate-500 px-6 md:block md:w-72">
      <div className="p-4 text-center text-4xl font-bold">Logo</div>
      <ul className="flex flex-col gap-4">
        <SidebarLinks />
      </ul>
    </nav>
  );
};

export default Sidebar;
