import { z } from 'zod';

export const NewClientZod = z.object({
  profileImage: z.object({
    value: z.object({}),
    invalidText: z.string().optional(),
  }),
  name: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  cpf: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  address: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
});
