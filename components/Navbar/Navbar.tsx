import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { pacifico, roboto } from "@/app/fonts";
import MobileSidebar from "./MobileSidebar";
import { buttonVariants } from "../ui/button";
import Cart from "./Cart";
import UserNavbar from "./UserNavbar";

// interface Props {}

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 h-16">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <div className=" mx-10 flex h-16 items-center justify-center">
            {/* mobile style */}
            <div className="w-full flex flex-row justify-start items-center">
              <div className="md:hidden">
                <MobileSidebar />
              </div>
              <div>
                <Link href="/">
                  <h1
                    className={cn(
                      " text-green-700 text-2xl",
                      pacifico.className
                    )}
                  >
                    TENNIS-NET
                  </h1>
                </Link>
              </div>
            </div>
            {/* <div className="flex flex-row mx-10">
              <h2 className="mx-6">Home</h2>
              <h2 className="mx-6">Book Court</h2>
              <h2 className="mx-6">About</h2>
              <h2 className="mx-6">Contact</h2>
            </div> */}
            {/* <div>
              <UserNavbar />
            </div> */}
            <div className="flex flex-row justify-center items-center">
              <div className="hidden md:flex md:justify-center md:items-center">
                <Link
                  href="/sign-in"
                  className={cn(
                    "hidden md:flex text-green-700 text-2xl mr-4",
                    buttonVariants()
                  )}
                >
                  Login
                </Link>
                <span
                  className="hidden md:flex h-6 w-px bg-gray-200"
                  aria-hidden="true"
                />
              </div>
              <Cart />
            </div>
            {/* <Link
              href="/sign-in"
              className={cn(
                "md:hidden text-green-700 text-2xl ml-4",
                buttonVariants({ variant: "outline" })
              )}
            >
              Sign up
            </Link> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
