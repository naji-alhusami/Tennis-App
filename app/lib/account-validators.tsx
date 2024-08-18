"use client";
import { z } from "zod";

// Schema for players
export const SignupAuthValidator = z.object({
  name: z.string().min(6, { message: "Name must be at least 6 characters." }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  level: z.string({
    required_error: "Please select your level.",
  }),
});

export const LoginAuthValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

// Combined schema using union
export const AuthValidator = z.union([SignupAuthValidator, LoginAuthValidator]);

export type PAuthValidator = z.infer<typeof AuthValidator>;
