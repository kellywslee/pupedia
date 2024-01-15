import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import Nav from '../components/Nav';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });
const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pupedia',
  description:
    'Search through a database of dog breeds, discover detailed profiles, and learn everything about your favorite canines.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <header className="flex items-center justify-between py-2 px-3">
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
