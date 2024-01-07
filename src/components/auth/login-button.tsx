'use client';

import Link from 'next/link';

import { LoginForm } from '@/components/auth/login-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface iLoginButtonProps extends WithChildren {
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export function LoginButton({
  children,
  mode = 'redirect',
  asChild,
}: iLoginButtonProps) {
  if (mode === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Link href="/auth/login" className="cursor-pointer">
      {children}
    </Link>
  );
}
