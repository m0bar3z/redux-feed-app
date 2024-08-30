import { type ReactNode, type FC } from "react";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import SidebarProvider from "@/components/dashboard/Sidebar/SidebarProvider";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex">
      <SidebarProvider>
        <Sidebar />
        <section className="ml-auto min-h-screen md:w-[calc(100%-288px)]">{children}</section>
      </SidebarProvider>
    </main>
  );
};

export default Layout;
