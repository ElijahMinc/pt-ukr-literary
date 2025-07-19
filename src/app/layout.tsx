import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import { Header } from '@/widgets/header/header.ui';

import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { ILogoFields, ISeoFields } from '@/types/contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

import 'react-phone-input-2/lib/style.css';
import './globals.scss';
import Script from 'next/script';

const archivoSans = Archivo({
  subsets: ['latin'],
});

const interSans = Inter({
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const seoContent = await client.getEntries<EntrySkeletonType<ISeoFields>>({
    content_type: 'seo',
    limit: 1,
  });

  const seoData = seoContent.items[0]?.fields;
  const seoTitle = seoData?.title;
  const seoDescription = seoData?.description;
  const seoPreviewImage = getContentfulImageData(seoData.image, { image: true });

  const seoConfiguration: {
    title: string;
    description: string;
    previewImage: string;
    isIndexablePage: boolean;
    locale: 'en';
  } = {
    title: seoTitle,
    description: seoDescription,
    previewImage: seoPreviewImage || '',
    isIndexablePage: true,
    locale: 'en',
  };

  return {
    title: seoConfiguration?.title || 'Default Title',
    description: 'Let poets guide you into their worlds — one verse at a time.',
    openGraph: {
      title: seoConfiguration?.title || 'Default Title',
      description: 'Let poets guide you into their worlds — one verse at a time.',
      images: seoConfiguration.previewImage
        ? [
            {
              url: `https:${seoConfiguration.previewImage}`,
              secureUrl: `https:${seoConfiguration.previewImage}`,
              width: 300,
              height: 300,
              alt: 'preview Image',
              type: 'image/jpg',
            },
          ]
        : [],
      locale: 'en',
      type: 'website',
      siteName: seoConfiguration?.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      site: seoConfiguration?.title,
      images: seoConfiguration.previewImage
        ? [
            {
              url: `https:${seoConfiguration.previewImage}`,
              secureUrl: `https:${seoConfiguration.previewImage}`,
              width: 300,
              height: 300,
              alt: 'preview Image',
              type: 'image/jpg',
            },
          ]
        : [],
    },
  };
}

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
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-X23HBNZCZF'
          strategy='afterInteractive'
        />

        {/* Инициализация dataLayer */}
        <Script id='ga-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X23HBNZCZF');
          `}
        </Script>
      </head>
      <body className={`${archivoSans.className} ${interSans.className}`}>
        <Header logoImage={imageUrl || ''} logoDescription={title} />
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
