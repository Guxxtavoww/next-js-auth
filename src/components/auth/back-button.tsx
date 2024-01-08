'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface iBackButtonProps {
  href: string;
  label: string;
}

export function BackButton({ href, label }: iBackButtonProps) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
