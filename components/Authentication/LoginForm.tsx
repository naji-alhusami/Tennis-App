"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  PAuthValidator,
  LoginAuthValidator,
} from "@/app/lib/account-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import logo from "../../public/Images/logo.jpg";
import { CircleUserRound } from "lucide-react";
import { LoginAction } from "@/actions/LoginAction";
import { useState, useTransition } from "react";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import Link from "next/link";

interface Props {}

const Login = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<PAuthValidator>({
    resolver: zodResolver(LoginAuthValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: PAuthValidator) {
    setSuccess("");
    setError("");

    startTransition(() => {
      LoginAction(values).then((data) => {
        if (data) {
          setSuccess(data.success);
          setError(data.error);
        }
      });
    });
  }

  return (
    // <Drawer>
    //   <DrawerTrigger>
    //     <CircleUserRound className="text-green-700 h-6 w-6" />
    //   </DrawerTrigger>
    //   {/* <DrawerTrigger className={buttonVariants()}>
    //     Login
    //   </DrawerTrigger> */}
    //   <DrawerContent>
    //     <DrawerHeader>
    //       <DrawerTitle className="text-center font-bold text-3xl">
    //         Login
    //       </DrawerTitle>
    //       <DrawerDescription>
    // <div className="m-4 bg-purple-500 p-40 rounded-full flex flex-col items-center justify-center">
    <div className="w-full flex flex-col items-center justify-center md:mx-40">
      <h1 className="text-3xl text-center font-bold my-6">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-center mb-4">
            <div className="w-1/2">
              <div className="w-full md:flex md:flex-col md:flex-grow">
                <div className="md:flex-grow">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            type="email"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 mb-2 flex-grow">
                  <FormField
                    disabled={isPending}
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="******"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Link href="/">Forget Password?</Link>
              </div>
              <FormSuccess message={success} />
              <FormError message={error} />
              <div className="w-full mt-4 mb-8 flex flex-row justify-center items-center gap-x-6">
                <Button className="text-lg" disabled={isPending} type="submit">
                  Login
                </Button>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-10">
                <Button size="lg" variant="outline">
                  <FcGoogle className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline">
                  <FaFacebook className="h-6 w-6" />
                </Button>
              </div>
              <div className="text-center my-4 flex flex-row justify-between items-center">
                <p>Do Not Have An Account?</p>
                <Link href="/authentication/signup">
                  <Button variant="link">Signup</Button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
