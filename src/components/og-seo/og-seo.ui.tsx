import { IBaseSeoProps } from '../base-seo/base-seo.ui';

interface IOgSeoProps extends Pick<IBaseSeoProps, 'title' | 'description' | 'locale'> {
  imageUrl: string;
}

export const OgSeo = ({ title = '', description = '', imageUrl, locale = 'en' }: IOgSeoProps) => {
  return (
    <>
      <link rel='canonical' href={imageUrl} />

      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:secure_url' content={imageUrl} />
      <meta property='og:image:width' content='256' />
      <meta property='og:image:height' content='256' />
      <meta property='og:image:alt' content='bot-256' />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='og:url' content={imageUrl} />
      <meta property='og:locale' content={locale} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
    </>
  );
};
