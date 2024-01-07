import { z } from 'zod';

export const loginSchema = z.object({
  user_email: z.string().email({
    message: 'Email é obrigatório',
  }),
  user_password: z.string().min(1, {
    message: 'Senha é obrigatória',
  }),
  code: z.optional(z.string()),
});

export type LoginType = z.infer<typeof loginSchema>;
