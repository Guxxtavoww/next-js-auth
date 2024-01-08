import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { envSchema } from '@/config/env.config';
import { Toaster } from '@/components/ui/sonner';
import { TanstackProvider } from '@/providers/tanstack-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next JS Auth',
  description: 'Next JS Auth app',
};

export default async function RootLayout({ children }: WithChildren) {
  try {
    envSchema.parse(process.env);

    return (
      <TanstackProvider>
        <html lang="pt-br">
          <body className={inter.className}>
            <Toaster />
            {children}
          </body>
        </html>
      </TanstackProvider>
    );
  } catch (err) {
    return null;
  }
}
