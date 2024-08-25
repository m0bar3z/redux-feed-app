"use client";

import {
  Dispatch,
  type FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type SidebarContextType = {
  showSidebarState: [boolean, Dispatch<SetStateAction<boolean>>];
};

const SidebarContext = createContext<SidebarContextType>({
  showSidebarState: [false, () => {}],
});

export const useSidebar = () => useContext(SidebarContext);

const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);

  const value: SidebarContextType = useMemo(
    () => ({
      showSidebarState: [isShowSidebar, setIsShowSidebar],
    }),
    [isShowSidebar]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
