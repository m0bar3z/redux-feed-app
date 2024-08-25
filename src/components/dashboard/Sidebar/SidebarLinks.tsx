"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { type FC, memo } from "react";

const links = [
  { name: "Home", href: "/", icon: MdHome },
  { name: "Logout", href: "logout", icon: RiLogoutCircleRLine },
];

const SidebarLink: FC = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ href, icon: LinkIcon, name }) => (
        <li
          key={name}
          className={`
            ${pathname === href ? "bg-sky-900 text-slate-50" : ""}
            rounded-lg transition-all hover:bg-slate-700 hover:text-slate-50`}
        >
          <Link href={href} className={"flex items-end justify-start gap-2 self-end px-3 py-2"}>
            <LinkIcon size="1.5rem" />
            <p className="hidden md:block">{name}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default memo(SidebarLink);

// <li className="mx-6 rounded-lg transition-all hover:bg-slate-700 hover:text-slate-50">
//           <Link href="logout" className="flex items-end justify-start gap-2 self-end px-3 py-2">
