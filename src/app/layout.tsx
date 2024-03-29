import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './globals.css';

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
      <body className="min-h-dvh flex flex-col">
        <header className="flex items-center justify-between py-2 px-3">
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
