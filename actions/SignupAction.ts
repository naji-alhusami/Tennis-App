"use server";
import prisma from "@/app/lib/prismadb";

import { getUserByEmail } from "@/app/data/user";
import {
  PAuthValidator,
  SignupAuthValidator,
} from "@/app/lib/account-validators";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "@/app/data/tokens";
import { sendVerificationEmail } from "@/app/lib/mail";

export const SignupAction = async (values: PAuthValidator) => {
  const validatedFields = SignupAuthValidator.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { name, email, password, level } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exist" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      level,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation Email sent!" };
};
