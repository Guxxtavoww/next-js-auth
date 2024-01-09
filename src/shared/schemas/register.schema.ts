import * as z from 'zod';

export const registerSchema = z
  .object({
    user_email: z
      .string({ required_error: 'Email é obrigatório' })
      .email('Insira um email válido'),
    user_name: z.string({ required_error: 'Nome de usuário é obrigatório' }),
    user_password: z.string({ required_error: 'Senha é obrigatória' }),
    password_confirmation: z.string({ required_error: 'Confirme sua senha' }),
  })
  .refine(
    ({ user_password, password_confirmation }) =>
      user_password === password_confirmation,
    {
      message: 'Senha não são iguais',
      path: ['password_confirmation'],
    }
  );

export type RegisterType = z.infer<typeof registerSchema>;
