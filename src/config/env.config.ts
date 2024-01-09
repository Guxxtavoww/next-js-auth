import * as z from 'zod';

export const envSchema = z.object({
  POSTGRES_DB_URL: z.string(),
  POSTGRES_DB: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;
