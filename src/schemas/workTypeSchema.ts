import { z } from "zod";

export const workTypeSchema = z.object({
    workType: z.enum(['FULL_TIME', 'PART_TIME', 'PROJECT_BASED'])
})