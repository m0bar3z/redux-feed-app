import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import SidebarProvider from "@/components/dashboard/Sidebar/SidebarProvider";
import { type ReactNode, type FC } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex">
      <SidebarProvider>
        <Sidebar className="hidden h-screen w-0  bg-red-400 md:block md:w-72" />
        <section className="h-screen flex-1 bg-yellow-200">{children}</section>
      </SidebarProvider>
    </main>
  );
};

export default Layout;
