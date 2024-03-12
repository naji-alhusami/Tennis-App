import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { pacifico, roboto } from "@/app/fonts";
import MobileSidebar from "./MobileSidebar";

interface Props {}

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 h-16">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <div className=" mx-10 flex h-16 items-center justify-center">
            {/* mobile style */}
            <div className="w-full flex flex-row justify-between items-center">
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
              <div className="md:hidden">
                <MobileSidebar />
              </div>
            </div>
            {/* <div
              className={`${classes.navbarToggleContainer} ${
                isToggled ? `${classes.change}` : ""
              }`}
              onClick={toggleButtonHandler}
            >
              <div className={classes.line1}></div>
              <div className={classes.line2}></div>
              <div className={classes.line3}></div>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
