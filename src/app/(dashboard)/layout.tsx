import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import SidebarProvider from "@/components/dashboard/Sidebar/SidebarProvider";
import { type ReactNode, type FC } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex">
      <SidebarProvider>
        <Sidebar />
        <section className="h-screen flex-1">{children}</section>
      </SidebarProvider>
    </main>
  );
};

export default Layout;
