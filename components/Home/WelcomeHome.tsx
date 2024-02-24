import SlowlyShow from "@/lib/SlowlyShow";
import TypeWriter from "@/lib/TypeWriter";
import Image from "next/image";
import React from "react";
import background from "@/public/Images/background.svg";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

const WelcomeHome = () => {
  return (
    <div className=" m-10 md:flex md:flex-row md:justify-between">
      <div className="flex flex-col justify-center items-start">
        <div className="">
          <h1 className=" text-4xl font-bold md:text-7xl">
            <div className="flex flex-row">
              <TypeWriter text="Hi " delay={50} />
              <span className="text-green-700 ml-4">
                <TypeWriter text=" .." delay={50} />
              </span>
            </div>
          </h1>
          <h1 className="text-green-700 font-bold my-2 text-3xl md:text-5xl">
            <TypeWriter text="Join Our Tennis Club" delay={50} />
          </h1>
        </div>
        <div className="text-lg font-bold my-4 md:text-2xl">
          <SlowlyShow
            text="We invite you to join us in this journey. The court is set, the ball
      is in your court. Come be a part of TENNIS NET Club."
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <Link href="/" className={buttonVariants()}>
            Become Member &rarr;
          </Link>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Contact Us
          </Link>
          {/* <Link href="/"> */}
          {/* <Button variant="outline">Contact Us</Button> */}
          {/* </Link> */}
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src={background}
          alt="home-background"
          width={1000}
          height={200}
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeHome;
