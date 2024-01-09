'use client';

import { useRouter } from 'next/navigation';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { CardWrapper } from '@/components/auth/card-wrapper';

import { Button } from '../ui/button';

export function ErrorCard() {
  const { back } = useRouter();

  return (
    <CardWrapper
      headerLabel="Ops! Algo deu errado!"
      backButtonHref="/auth/login"
      backButtonLabel="Volte ao login"
    >
      <div className="w-full flex justify-center items-center space-y-3">
        <ExclamationTriangleIcon className="text-destructive" />
        <Button variant="ghost" onClick={back}>
          Voltar
        </Button>
      </div>
    </CardWrapper>
  );
}
