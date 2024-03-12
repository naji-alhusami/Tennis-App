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

// interface Props {}

const MobileSidebar = () => {

  return (
    <Sheet>
      <SheetTrigger>
        <div
          className="relative cursor-pointer p-2 rounded-lg group"
        >
          <div className="rounded-lg w-6 h-1 bg-gray-400 group-hover:bg-gray-600 mb-1"></div>
          <div className="rounded-lg w-6 h-1 bg-gray-400 group-hover:bg-gray-600 mb-1"></div>
          <div className="rounded-lg w-6 h-1 bg-gray-400 group-hover:bg-gray-600"></div>
        </div>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
