"use server";

import { generateVerificationToken } from "@/app/data/tokens";
import { getUserByEmail } from "@/app/data/user";
import {
  LoginAuthValidator,
  PAuthValidator,
} from "@/app/lib/account-validators";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const LoginAction = async (values: PAuthValidator) => {
  const validatedFields = LoginAuthValidator.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email Does Not Exist" };
  }

  if (!existingUser.emailVerified) {
  //   const verificationToken = await generateVerificationToken(
  //     existingUser.email
  //   );

    return { error: "Your Email is not Verified!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
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
    // callbackUrl: "/settings",
    redirectTo: "/settings",
  });
};
