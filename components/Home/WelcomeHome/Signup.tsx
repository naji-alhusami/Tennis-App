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
import { PAuthValidator, PlayerAuthValidator } from "@/lib/account-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
// import logo from "@/public/Images/logo.png";

interface Props {}

const Signup = () => {
  // 1. Define your form.
  const form = useForm<PAuthValidator>({
    resolver: zodResolver(PlayerAuthValidator),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      level: "",
    },
  });

  function onSubmit(values: PAuthValidator) {
    console.log(values);
  }

  return (
    <Drawer>
      <DrawerTrigger className={buttonVariants()}>
        {" "}
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
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center">
                  {/* <Image
                    src={logo}
                    alt="signup-background"
                    width={330}
                    height={200}
                    // sizes="(min-width: 808px) 100vw, 50vw"
                    // className="md:max-w-4xl responsive-image"
                    priority
                  /> */}
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
                                <Input placeholder="Name" {...field} />
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
                                <Input placeholder="Email" {...field} />
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
                                <Input placeholder="Password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mt-4 md:mt-0 flex-grow">
                        <FormField
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
                    <div className="w-full mt-4 flex flex-row justify-center items-center">
                      <Button type="submit">Signup</Button>
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
