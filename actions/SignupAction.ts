"use server";

import {
  PAuthValidator,
  SignupAuthValidator,
} from "@/app/lib/account-validators";

export const SignupAction = async (values: PAuthValidator) => {
  const validatedFields = SignupAuthValidator.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email Sent!" };
  // console.log(values);
};
