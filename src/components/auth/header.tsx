import { Poppins } from 'next/font/google';

import { cn } from '@/utils/shadcn.utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

interface iHeaderProps {
  label: string;
}

export function Header({ label }: iHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn('text-3xl font-semibold', font.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
