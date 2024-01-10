import * as z from 'zod';

export const envSchema = z.object({
  POSTGRES_DB_URL: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;
