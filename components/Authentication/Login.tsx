"use client";
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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PAuthValidator, LoginAuthValidator } from "@/lib/account-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import logo from "../../public/Images/logo.jpg";
import { CircleUserRound } from "lucide-react";

interface Props {}

const Login = () => {
  // 1. Define your form.
  const form = useForm<PAuthValidator>({
    resolver: zodResolver(LoginAuthValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: PAuthValidator) {
    console.log(values);
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <CircleUserRound className="text-green-700 h-6 w-6" />
      </DrawerTrigger>
      {/* <DrawerTrigger className={buttonVariants()}>
        Login
      </DrawerTrigger> */}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center font-bold text-3xl">
            Login
          </DrawerTitle>
          <DrawerDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center mb-4">
                  <Image
                    src={logo}
                    alt="auth-background"
                    style={{ width: "300px", height: "auto" }}
                    priority
                  />
                  <div className="w-1/2">
                    <div className="w-full md:flex md:flex-row md:justify-center md:items-center md:flex-grow">
                      <div className="md:flex-grow mr-0 md:mr-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Username</FormLabel> */}
                              <FormControl>
                                <Input placeholder="Email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mt-4 md:mt-0 flex-grow">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Username</FormLabel> */}
                              <FormControl>
                                <Input placeholder="Password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="w-full mt-4 flex flex-row justify-center items-center">
                      <Button type="submit">Login</Button>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default Login;
