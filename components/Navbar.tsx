'use client';

import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="bg-red-600 flex justify-between text-white px-12 py-10 items-center">
      <Link href={'/'}>
        <h2 className="font-bold text-[28px]">HOTEL FINDER</h2>
      </Link>
      <nav className="flex gap-10 font-medium">
        {navLinks.map((link) => (
          <Link
            className={`${link.path === pathname && 'underline'}`}
            href={link.path}
            key={link.path}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
