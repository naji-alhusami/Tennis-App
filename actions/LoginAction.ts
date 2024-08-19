"use server";

import {
  LoginAuthValidator,
  PAuthValidator,
} from "@/app/lib/account-validators";

export const LoginAction = async (values: PAuthValidator) => {
  const validatedFields = LoginAuthValidator.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email Sent!" };
  // console.log(values);
};
