"use client";
// import React, { useEffect, useState } from "react";
import SlowlyShow from "@/lib/SlowlyShow";
import TypeWriter from "@/lib/TypeWriter";
import Image from "next/image";
import background from "@/public/Images/background.svg";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import TypewriterComponent from "typewriter-effect";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";

const WelcomeHome = () => {
  // const [showButtons, setShowButtons] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowButtons(true);
  //   }, 2500);

  //   return () => clearTimeout(timer);
  // }, []);
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
          <Drawer>
            <DrawerTrigger className={buttonVariants()}>
              Become Member &rarr;
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center justify-center">
                <DrawerTitle>Signup</DrawerTitle>
                <DrawerDescription>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="Email" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                              This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {/* <Button>Submit</Button> */}
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
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
