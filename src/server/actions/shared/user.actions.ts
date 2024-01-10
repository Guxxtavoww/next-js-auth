'use server';

import { performDatabaseOperation } from '@/server/lib/database.lib';

export async function getUserByEmail(
  user_email: string,
  throwErrorIfNotFounded?: boolean
) {
  return performDatabaseOperation(async (primsa) => {
    const foundedUser = primsa.user.findFirst({
      where: {
        user_email,
      },
    });

    if (throwErrorIfNotFounded && !foundedUser) {
      throw new Error('Usuário não encontrado');
    }

    return Promise.resolve(foundedUser);
  });
}
