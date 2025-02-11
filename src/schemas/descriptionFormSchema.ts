import { z } from "zod";

export const descriptionFormSchema = z.object({
    description: z
    .string()
    .max(500, { message: "Description must be at most 500 characters long" })
    .optional()
})