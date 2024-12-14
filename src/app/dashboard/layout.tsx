import { requiredUser } from "@/utils/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "../../../public/logo.png";
import DashboardLinks from "@/components/DashboardLinks";
import { SheetTrigger } from "@/components/ui/sheet";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await requiredUser();
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex flex-col max-h-screen h-full gap-2">
            <div className="h-14 flex items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center">
                <Image src={Logo} alt="logo" width={48} className="size-7" />
                <p className="text-2xl font-bold">
                  Invoice<span className="text-blue-600">Marchal</span>
                </p>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-starts px-2 text-sm font-medium">
                <DashboardLinks />
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger>
                <Button>
                    <Menu/>
                </Button>
            </SheetTrigger>
          </Sheet>
          </header>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
