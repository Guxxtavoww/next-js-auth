import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next JS Auth',
  description: 'Next JS Auth app',
};

export default async function RootLayout({ children }: WithChildren) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
