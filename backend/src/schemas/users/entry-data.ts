import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().min(4, 'The name is mandatory'),
    email: z.email('The email is mandatory'),
    password: z.string().min(8, 'The password should have more than 7 characters')
});

export type ProductInput = z.infer<typeof productSchema>; 