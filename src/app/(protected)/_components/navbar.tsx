'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/auth/user-button';

const links = [
  {
    link_label: 'Servidor',
    href: '/server',
  },
  {
    link_label: 'Cliente',
    href: '/client',
  },
  {
    link_label: 'Administração',
    href: '/admin',
  },
  {
    link_label: 'Configurações',
    href: '/settings',
  },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        {links.map((link, index) => (
          <Button
            asChild
            variant={pathname === link.href ? 'default' : 'outline'}
            key={index}
          >
            <Link href={link.href}>{link.link_label}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
}
