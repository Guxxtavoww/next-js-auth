'use server';

import bcrypt from 'bcryptjs';

import { RegisterType } from '@/shared/schemas/register.schema';

import { getUserByEmail } from './shared/user.actions';
import { performDatabaseOperation } from '../lib/database.lib';

export async function registerUser({
  user_email,
  user_name,
  user_password,
}: Omit<RegisterType, 'password_confirmation'>) {
  return performDatabaseOperation(async (db) => {
    const isThereUserWithSameEmail = await getUserByEmail(user_email);

    if (isThereUserWithSameEmail) {
      throw new Error('E-mail já cadastrado!');
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = await db.user.create({
      data: {
        user_email,
        user_name,
        user_password: hashedPassword,
      },
    });

    return Promise.resolve(newUser);
  });
}
