"use client";
import React from "react";
import SlowlyShow from "@/lib/SlowlyShow";
import TypeWriter from "@/lib/TypeWriter";
import Image from "next/image";
import background from "@/public/Images/background.svg";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import TypewriterComponent from "typewriter-effect";
import Signup from "./WelcomeHome/Signup";
import SignupDrawer from "./WelcomeHome/SignupDrawer";

const WelcomeHome = () => {
  return (
    <div className=" m-10  md:flex md:flex-row md:justify-between">
      <div className="flex flex-col justify-center items-start">
        <div className="h-32">
          <h1 className=" text-4xl font-bold md:text-7xl">
            <div className="flex flex-row">
              <TypeWriter text="Hi " delay={50} />
              <span className="text-green-700 ml-4">
                <TypeWriter text=" .." delay={50} />
              </span>
            </div>
          </h1>
          <h1 className="text-green-700 font-bold my-4 text-3xl md:text-4xl">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Join Our Tennis Club")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: true }}
            />
          </h1>
        </div>
        <div className="h-44 text-lg font-bold py-8 md:text-2xl text-gray-800">
          <SlowlyShow text="We invite you to join us in this journey. The court is set, the ball is in your court. Come be a part of TENNIS NET Club." />
        </div>
        <div className="h-32 flex flex-col gap-y-4">
          {/* <Link href="/auth/signup" className={buttonVariants()}>
            Become Member &rarr;
          </Link> */}
          <SignupDrawer />
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Contact Us
          </Link>
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
