import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/header.ui';

const archivoSans = Archivo({
  subsets: ['latin'],
});

const interSans = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Multicultural Poetry Night',
  description: 'Let poets guide you into their worlds — one verse at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${archivoSans.className} ${interSans.className}`}>
        <Header />
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
