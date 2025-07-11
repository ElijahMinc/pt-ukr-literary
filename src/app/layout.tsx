import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import { Header } from '@/widgets/header/header.ui';

import './globals.scss';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { ILogoFields } from '@/types/contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoContent = await client.getEntries<EntrySkeletonType<ILogoFields>>({
    content_type: 'logo',
    limit: 1,
  });

  const [logoItems] = logoContent.items;

  const logoData = logoItems?.fields;

  const title = logoData.title;

  const logoImage = logoData?.logo;

  const imageUrl = getContentfulImageData(logoImage, { image: true });

  return (
    <html lang='en'>
      <body className={`${archivoSans.className} ${interSans.className}`}>
        <Header logoImage={imageUrl || ''} logoDescription={title} />
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
