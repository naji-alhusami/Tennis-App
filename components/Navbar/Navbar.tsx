"use client";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import React from "react";
import { pacifico, roboto } from "@/app/fonts";
import MobileSidebar from "./MobileSidebar";
import { buttonVariants } from "../ui/button";
import Cart from "./Cart";
import UserNavbar from "./UserNavbar";
import { usePathname, useRouter } from "next/navigation";
import Login from "../Authentication/LoginForm";

// interface Props {}

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const isActiveLink = (href: string) => path === href;

  const links = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="bg-white sticky z-50 h-16">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <div className=" mx-10 flex h-16 items-center justify-center">
            {/* mobile style */}
            <div className="w-full flex flex-row justify-start items-center">
              <div className="flex flex-row justify-center items-center md:hidden">
                {/* {isLogin ? <MobileSidebar /> : */}
                <Login />
                {/* } */}
              </div>
              <div>
                <Link href="/" className="text-center">
                  <h1
                    className={cn(
                      " text-green-700 text-2xl text-center",
                      pacifico.className
                    )}
                  >
                    TENNIS-NET
                  </h1>
                </Link>
              </div>
            </div>
            <div className="md:w-full md:flex md:flex-row md:justify-end md:items-center md:mx-10 hidden">
              {links.map((link, index) => (
                <div
                  key={index}
                  className={`w-20 mx-2 text-center cursor-pointer hover:bg-green-200 hover:rounded-md hover:font-bold ${
                    isActiveLink(link.href)
                      ? "bg-green-200 rounded-md p-2 font-bold"
                      : "text-black p-2"
                  }`}
                  onClick={() => router.push(link.href)}
                >
                  {link.text}
                </div>
              ))}
            </div>
            {/* <div>
              <UserNavbar />
            </div> */}
            <div className="flex flex-row justify-center items-center">
              <div className="hidden md:flex md:justify-center md:items-center">
                <Login />
                {/* <Link
                  href="/sign-in"
                  className={cn(
                    "hidden md:flex text-green-700 text-2xl mr-4",
                    buttonVariants()
                  )}
                >
                  Login
                </Link> */}
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
