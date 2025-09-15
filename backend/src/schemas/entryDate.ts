import { z } from 'zod';


export const productSchema = z.object({
    name: z.string().min(4, 'The name is mandatory'),
    quantity: z.number().positive().positive('The quantity is mandatory'),
    price: z.number().positive("O preço deve ser maior que 0"),
    provider: z.string().min(1, "O fornecedor é obrigatório"),
});

export type ProductInput = z.infer<typeof productSchema>; 