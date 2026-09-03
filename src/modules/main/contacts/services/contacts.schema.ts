import { z } from "zod";

export const contactSchema = z.object({
   name: z
      .string()
      .min(1, "Name is required"),

   role: z
      .string()
      .default(""),

   email: z
      .string()
      .email("Invalid email address")
      .or(z.literal(""))
      .default(""),

   phoneNumber: z
      .string()
      .regex(
         /^[0-9+\-\s()]*$/,
         "Invalid phone number",
      )
      .default(""),

   socialLinks: z
      .array(
         z
            .string()
            .url("Invalid social link")
            .or(z.literal("")),
      )
      .default([]),
});

export const updateContactSchema = contactSchema;
