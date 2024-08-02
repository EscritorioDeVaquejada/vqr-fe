import { z } from 'zod';

export const TicketsAtttributeZod = z.object({
  puller: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  pullerHorse: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  belt: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  beltHorse: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  municipality: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  state: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(2, { message: 'Campo obrigatorio' }),
    invalidText: z.string().optional(),
  }),
  representation: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  ticketNumber: z.object({
    value: z
      .string({ required_error: 'Campo obrigatorio' })
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(100, { message: 'Maximo de 100 caracteres' }),
    invalidText: z.string().optional(),
  }),
  boiTv: z.object({
    value: z.boolean({ message: 'Deve ser boolean' }),
    invalidText: z.string().optional(),
  }),
  paymentMethod: z.object({
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
});
