import { z } from 'zod';
import { user_role } from '@prisma/client';

export const settingsSchema = z
  .object({
    user_name: z.optional(z.string()),
    is_two_factor_enabled: z.optional(z.boolean()).default(false),
    user_role: z.enum([user_role.ADMIN, user_role.USER]),
    user_email: z.optional(z.string().email()),
    user_password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.user_password && !data.newPassword) return false;

      return true;
    },
    {
      message: 'Nova senha é obrigatória',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.user_password) return false;

      return true;
    },
    {
      message: 'Senha é obrigatório',
      path: ['user_password'],
    }
  );

export type SettingsType = z.infer<typeof settingsSchema>;
