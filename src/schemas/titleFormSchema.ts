import { z } from "zod";

export const titleFormSchema = z.object({
    title: z.string()
        .max(50, { message: "Title must be at most 50 characters long" })
        .nonempty({ message: "Title is required" })
        .regex(/^[a-zA-Z]+( [a-zA-Z]+)*$/, { message: "Title can only contain letters and spaces, and cannot have leading or trailing spaces" })
})