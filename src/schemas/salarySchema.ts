import { z } from "zod";

export const salaryFormSchema = z.object({
    salary: z
    .string()
    .regex(/^(?!\s)(?!.*\s$)[0-9,\-\s]*$/, { message: "Salary can only contain numbers, dashes, commas, and spaces without leading or trailing spaces" })
    .optional()
})
