"use server";

import {
  LoginAuthValidator,
  PAuthValidator,
} from "@/app/lib/account-validators";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const LoginAction = async (values: PAuthValidator) => {
  const validatedFields = LoginAuthValidator.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;
  // return { success: "Email Sent!" };

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/settings",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something Went Wrong!" };
      }
    }

    throw error;
  }
};

export const OAuth = async (provider: "google" | "facebook") => {
  await signIn(provider, {
    callbackUrl: "/settings",
  });
};