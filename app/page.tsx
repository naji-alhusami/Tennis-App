import { cn } from "@/lib/utils";

import { pacifico } from "./fonts";
import Wrapper from "@/components/ui/Wrapper";
import Image from "next/image";
import background from "@/public/Images/background.jpg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <div >
        <Image
          src={background}
          alt="home-background"
          width={2000}
          height={100}
          priority
          style={{
            objectFit: "contain", // cover, contain, none
          }}
        />
      </div>
      {/* <Wrapper> */}
      {/* <h1 className={cn(" text-rose-500 text-4xl", pacifico.className)}>
        TASTIFY
      </h1> */}
      <div className="absolute  font-bold text-white top-16 sm:top-24 md:top-32 left-12 lg:top-60 lg:left-32 max-w-48 sm:max-w-60 md:max-w-96 lg:max-w-xl">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">Hi</h1>
        <h1 className="my-4 text-lg sm:text-xl md:text-3xl">
          Join Our Tennis Club
        </h1>
        <p className="hidden my-8 sm:flex md:text-lg lg:text-2xl">
          We invite you to join us in this journey. The court is set, the ball
          is in your court. Come be a part of TENNIS NET Club.
        </p>
        <Link
          href="/"
          className=" flex flex-row justify-center items-center border-2 border-white bg-transparent hover:bg-white hover:text-black"
        >
          <p className="m-1 lg:m-2 md:text-lg lg:text-2xl">Become Member</p>
          <MoveRight strokeWidth={2} className="mx-2" />
        </Link>
      </div>
      {/* </Wrapper> */}
    </div>
  );
}
