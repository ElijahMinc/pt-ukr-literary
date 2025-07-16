import { BaseSeo, IBaseSeoProps } from '@/components/base-seo/base-seo.ui';
import { OgSeo } from '@/components/og-seo/og-seo.ui';
import { TwitterSeo } from '@/components/twitter-seo/twitter-seo.ui';

interface ISeoProps extends IBaseSeoProps {
  previewImage: string;
}

export const Seo = ({ title, description, previewImage, isIndexablePage, locale }: ISeoProps) => {
  return (
    <>
      <BaseSeo
        title={title}
        description={description}
        isIndexablePage={isIndexablePage}
        locale={locale}
      />
      <TwitterSeo
        title={title}
        description={description}
        imageUrl={`https:${previewImage}`}
        locale={locale}
      />
      <OgSeo
        title={title}
        description={description}
        imageUrl={`https:${previewImage}`}
        locale={locale}
      />
    </>
  );
};
