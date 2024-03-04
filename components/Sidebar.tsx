"use client";
import React, { useMemo } from "react";
import { FilmIcon, FireIcon, TvIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";

interface SidebarProps {
  children: React.ReactNode;
  Icon: any;
}

export default function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: FireIcon,
        label: "All",
        active: pathname === "/favorites",
        href: "/favorites",
      },
      {
        icon: TvIcon,
        label: "TV",
        active: pathname !== "/favorites/tv",
        href: "/favorites/tv",
      },
      {
        icon: FilmIcon,
        label: "Movies",
        active: pathname === "/favorites/movies",
        href: "/favorites/movies",
      },
    ],
    [pathname]
  );

  return (
    <div>
      <div className="flex flex-col gap-y-4 px-3 py-4">
          {routes.map((item) => (
            <SidebarLink key={item.label} Icon={item.icon} {...item} />
          ))}
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
}
