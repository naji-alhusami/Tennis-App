"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

// interface Props {}

const MobileSidebar = () => {
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
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription>
            <div className="space-y-6 px-4 py-6">
              <div className="flow-root">
                <Link
                  // onClick={() => closeOnCurrent("/sign-in")}
                  href="/sign-in"
                  // className="-m-2 block p-2 font-medium text-gray-900"
                  // className={buttonVariants()}
                  className={cn(
                    "w-full text-green-700 text-2xl",
                    buttonVariants()
                  )}
                >
                  Sign in
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  // onClick={() => closeOnCurrent("/sign-up")}
                  href="/sign-up"
                  // className="-m-2 block p-2 font-medium text-gray-900"
                  className={cn(
                    "w-full text-green-700 text-2xl",
                    buttonVariants({ variant: "outline" })
                  )}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
