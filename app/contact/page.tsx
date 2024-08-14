import React from "react";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PAuthValidator, PlayerAuthValidator } from "@/lib/account-validators";
import { zodResolver } from "@hookform/resolvers/zod";

interface ContactPageProps {}

const ContactPage = () => {
  return <div>Contact Page</div>;
};

export default ContactPage;
