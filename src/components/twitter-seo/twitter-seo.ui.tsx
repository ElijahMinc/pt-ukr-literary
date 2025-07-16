import { IBaseSeoProps } from '../base-seo/base-seo.ui';

interface ITwitterSeoProps extends Pick<IBaseSeoProps, 'title' | 'description' | 'locale'> {
  imageUrl: string;
}

export const TwitterSeo = ({ title = '', description = '', imageUrl = '' }: ITwitterSeoProps) => {
  return (
    <>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />
    </>
  );
};
