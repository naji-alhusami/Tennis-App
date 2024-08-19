"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  // SheetTitle,
  SheetClose,
  SheetTrigger,
  // SheetFooter,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import Link from "next/link";
// import { buttonVariants } from "../ui/button";
// import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import Signup from "../Authentication/SignupForm";
import Login from "../Authentication/LoginForm";
import { DrawerTrigger } from "../ui/drawer";

// interface Props {}

const MobileSidebar = () => {
  const router = useRouter();
  const path = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  const isActiveLink = (href: string) => path === href;

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative cursor-pointer p-2 rounded-lg group">
          <Menu className="h-6 w-6" aria-hidden="true" />
          {/* <div className="rounded-lg w-6 h-[0.10rem] bg-gray-400 group-hover:bg-gray-600 mb-1"></div>
          <div className="rounded-lg w-6 h-[0.10rem] bg-gray-400 group-hover:bg-gray-600 mb-1"></div>
          <div className="rounded-lg w-6 h-[0.10rem] bg-gray-400 group-hover:bg-gray-600"></div> */}
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetClose asChild>
            <div className="space-y-4 mx-8 my-6 flex flex-col">
              {links.map((link, index) => (
                <div
                  key={index}
                  className={`mx-2 cursor-pointer hover:bg-green-200 hover:rounded-md hover:font-bold ${
                    isActiveLink(link.href)
                      ? "bg-green-200 rounded-md p-2 font-bold "
                      : "text-black p-2"
                  }`}
                  onClick={() => router.push(link.href)}
                >
                  {link.text}
                </div>
              ))}
            </div>
          </SheetClose>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
