import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string | Url;
}

export default function SidebarLink({
  icon,
  label,
  active,
  href,
  Icon
}: SidebarItemProps) {
  return (
    <Link href={href} className="flex items-center gap-2 py-2">
      <Icon active={active} Icon={icon} className="w-6 h-6" />
      <p>{label}</p>
    </Link>
  );
}
