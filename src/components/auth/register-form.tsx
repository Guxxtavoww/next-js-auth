'use client';

import { useCallback, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { registerSchema, RegisterType } from '@/shared/schemas/register.schema';

import { FormError } from '../common/form-error';
import { FormSuccess } from '../common/form-sucess';

export function RegisterForm() {
  const form = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const isPending = false;

  const onSubmit = useCallback(async (data: RegisterType) => {}, []);

  return (
    <CardWrapper
      headerLabel="Crie uma conta"
      backButtonLabel="Já tem uma conta ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Insira seu nome"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Insira um email"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Insira uma senha"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Confirme sua senha"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={''} />
          <FormSuccess message={''} />
          <Button disabled={isPending} type="submit" className="w-full">
            Cadastrar-se
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
