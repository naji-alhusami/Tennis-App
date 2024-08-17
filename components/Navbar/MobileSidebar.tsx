"use client";
import React, { useState } from "react";
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
import Signup from "../Home/WelcomeHome/Signup";
import Login from "../Home/WelcomeHome/Login";
import SignupDrawer from "../Home/WelcomeHome/SignupDrawer";
import { DrawerTrigger } from "../ui/drawer";

// interface Props {}

const MobileSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
              <div className="p-2">
                {/* <Link
                  // onClick={() => closeOnCurrent("/sign-in")}
                  href="/sign-in"
                  // className="-m-2 block p-2 font-medium text-gray-900"
                  // className={buttonVariants()}
                  className={cn(
                    "w-full text-green-700 text-2xl",
                    buttonVariants()
                  )}
                >
                  Login
                </Link> */}
                <Login />
              </div>
              <div className="p-2 flow-root">
                {/* <Link
                  // onClick={() => closeOnCurrent("/sign-up")}
                  href="/sign-up"
                  // className="-m-2 block p-2 font-medium text-gray-900"
                  className={cn(
                    "w-full text-green-700 text-2xl",
                    buttonVariants({ variant: "outline" })
                  )}
                >
                  Signup
                </Link> */}
                <DrawerTrigger
                  className="cursor-pointer text-green-700 text-2xl"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  Become a Member &rarr;
                </DrawerTrigger>
              </div>
            </div>
          </SheetClose>
        </SheetHeader>
      </SheetContent>
      {isDrawerOpen && <SignupDrawer onClose={() => setIsDrawerOpen(false)} />}
    </Sheet>
  );
};

export default MobileSidebar;
