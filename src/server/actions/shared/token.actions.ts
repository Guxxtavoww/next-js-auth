import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import { performDatabaseOperation } from '@/server/lib/database.lib';

export function generateTwoFactorToken(user_email: string) {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
}
