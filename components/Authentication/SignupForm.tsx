"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
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
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  PAuthValidator,
  SignupAuthValidator,
} from "@/app/lib/account-validators";
import { zodResolver } from "@hookform/resolvers/zod";
// import Image from "next/image";
// import logo from "../../public/Images/logo.jpg";
// import { CircleUserRound } from "lucide-react";
import { useState, useTransition } from "react";
// import FormSuccess from "./FormSuccess";
// import FormError from "./FormError";
import Link from "next/link";
import { SignupAction } from "@/actions/SignupAction";
import { useToast } from "../ui/use-toast";

interface Props {}

const SignupForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<PAuthValidator>({
    resolver: zodResolver(SignupAuthValidator),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: PAuthValidator) {
    setSuccess("");
    setError("");

    startTransition(() => {
      SignupAction(values).then((data) => {
        if (data.success) {
          toast({
            title: "Thanks for Signing Up!",
            description: "Please check your email address for confirmation.",
          });
        } else if (data.error) {
          toast({
            variant: "destructive",
            title: "Something went wrong with your signup.",
            description: "Email already exi",
          });
          setError(data.error);
        }
      });
    });
  }

  return (
    <div className="w-full flex flex-col items-center justify-center md:mx-40">
      <h1 className="text-3xl text-center font-bold my-6">Signup</h1>
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
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            type="text"
                            placeholder="Your Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 md:flex-grow">
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
                <div className="my-4 flex-grow">
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
                <div className="mt-4 md:mt-0 flex-grow">
                  <FormField
                    disabled={isPending}
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">
                              Intermediate
                            </SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <Link href="/">Forget Password?</Link> */}
              </div>
              {/* <FormSuccess message={success} /> */}
              {/* <FormError message={error} /> */}
              <div className="w-full mt-4 mb-8 flex flex-row justify-center items-center gap-x-6">
                <Button className="text-lg" disabled={isPending} type="submit">
                  Signup
                </Button>
              </div>
              {/* <div className="flex flex-row justify-center items-center gap-x-10">
                <Button size="lg" variant="outline">
                  <FcGoogle className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline">
                  <FaFacebook className="h-6 w-6" />
                </Button>
              </div> */}
              <div className="text-center my-4 flex flex-row justify-between items-center">
                <p className="text-sm md:text-md">Already Have An Account?</p>
                <Link href="/authentication/login">
                  <Button variant="link">Login</Button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
