import { z } from 'zod';

export const NewEventZod = z.object({
  eventName: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  date: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  amount: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  boiTvAmountInAdvance: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  boiTvAmountOnSite: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  initialAmount: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
});
