import { type FC } from "react";

const Sidebar: FC<{ className?: string }> = props => {
  return <nav {...props}>Sidebar</nav>;
};

export default Sidebar;
