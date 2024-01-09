'use client';

import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { LoginType, loginSchema } from '@/shared/schemas/login.schema';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CardWrapper } from './card-wrapper';
import { FormError } from '../common/form-error';
import { FormSuccess } from '../common/form-sucess';

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const isPending = false;

  const errorURL = useMemo(
    () =>
      searchParams.get('error') === 'OAuthAccountNotLinked'
        ? 'Email já em uso com outro provedor!'
        : null,
    [searchParams]
  );

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback((data: LoginType) => {}, []);

  return (
    <CardWrapper
      headerLabel="Bem vindo de volta"
      backButtonLabel="Não é cadastrado? Clique aqui"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verificação de duas Etapas</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Insira o código de verificação"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="user_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Insira seu e-mail"
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Insira sua senha"
                          type="password"
                        />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">Esqueceu sua senha?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <FormError message={error || errorURL} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            {showTwoFactor ? 'Confirm' : 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
