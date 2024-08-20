"use client";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  PAuthValidator,
  SignupAuthValidator,
} from "@/app/lib/account-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import logo from "../../public/Images/logo.jpg";
import { useState, useTransition } from "react";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { SignupAction } from "@/actions/SignupAction";

// interface SignupDrawerProps {
//   onClose: () => void;
// }

const Signup = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<PAuthValidator>({
    resolver: zodResolver(SignupAuthValidator),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      level: "",
    },
  });

  function onSubmit(values: PAuthValidator) {
    setSuccess("");
    setError("");

    startTransition(() => {
      SignupAction(values).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  }

  return (
    <Drawer>
      <DrawerTrigger className={buttonVariants()}>
        Become Member &rarr;
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center font-bold text-3xl">
            Signup
          </DrawerTitle>
          <DrawerDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center">
                  <Image
                    src={logo}
                    alt="auth-background"
                    // width={200}
                    // height={100}
                    style={{ width: "300px", height: "auto" }}
                    // sizes="(min-width: 808px) 100vw, 50vw"
                    // className="md:max-w-4xl responsive-image"
                    priority
                  />
                  <div className="w-1/2">
                    <div className="w-full md:flex md:flex-row md:justify-center md:items-center">
                      <div className="my-4 mr-0 md:mr-4 flex-grow">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Username</FormLabel> */}
                              <FormControl>
                                <Input
                                  disabled={isPending}
                                  placeholder="Name"
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
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Username</FormLabel> */}
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
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-full md:flex md:flex-row md:justify-center md:items-center">
                      <div className="mr-0 md:mr-4 flex-grow">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Username</FormLabel> */}
                              <FormControl>
                                <Input
                                  disabled={isPending}
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
                                  <SelectItem value="Beginner">
                                    Beginner
                                  </SelectItem>
                                  <SelectItem value="Intermediate">
                                    Intermediate
                                  </SelectItem>
                                  <SelectItem value="Advanced">
                                    Advanced
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <FormSuccess message={success}  />
                    <FormError message={error} />
                    <div className="w-full mt-4 flex flex-row justify-center items-center">
                      <Button disabled={isPending} type="submit">
                        Signup
                      </Button>
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

export default Signup;
