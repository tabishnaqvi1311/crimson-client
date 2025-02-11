import { z } from "zod";

export const workLocationSchema = z.object({
    workLocation: z.enum(['REMOTE', 'ONSITE', 'HYBRID'])
})