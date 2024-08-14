"use client";
import { z } from "zod";

// Schema for players
export const PlayerAuthValidator = z.object({
  name: z.string().min(6, { message: "Name must be at least 6 characters." }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  level: z.string({
    required_error: "Please select your level.",
  }),
});

export type PAuthValidator = z.infer<typeof PlayerAuthValidator>;
