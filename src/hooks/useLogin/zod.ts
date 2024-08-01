import { z } from 'zod';

const passwordRegex = /^(?=.*[A-Z])(?=.*[\W]).+$/;

export const LoginZod = z.object({
  username: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  password: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(6, { message: 'Senha de no minimo 6 caracteres' })
      .refine(
        (value) => passwordRegex.test(value),
        'A senha nao condiz com os requisitos'
      ),
    invalidText: z.string().optional(),
  }),
});
