"use client";

import { cn } from "@/lib/utils";
import { HomeIcon, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardLinks = [
  {
    id: 0,
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Invoice",
    href: "/dashboard/invoice",
    icon: User2,
  },
];

const DashboardLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className={cn(
            pathname === link.href
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground",
            "flex items-center gap-3 rounded-lg py-2 transition-all hover:text-prmary px-4"
          )}
        >
          <link.icon className="size-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardLinks;
