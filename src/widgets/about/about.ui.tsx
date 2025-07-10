import { Card } from '@/components/card/card.ui';
import Image from 'next/image';
import './about.scss';
import client from '@/services/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { EntrySkeletonType } from 'contentful';
import { IAboutUsFields } from '@/types/contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

export const AboutWidget = async () => {
  const aboutSectionData = await client.getEntries<EntrySkeletonType<IAboutUsFields>>({
    content_type: 'aboutUs',
    limit: 1,
  });

  const [aboutSection] = aboutSectionData.items;

  const aboutData = aboutSection?.fields;
  const title = aboutData?.title;

  const descriptionTitle = aboutData?.descriptionTitle ? aboutData?.descriptionTitle : '';

  const Description = aboutData?.description
    ? documentToReactComponents(aboutData?.description)
    : '';

  const image = aboutData?.mainImage;

  const imageUrl = getContentfulImageData(image, { image: true });
  const imageTitle = getContentfulImageData(image, { title: true });

  const externalTitle = aboutData?.externalText ? aboutData?.externalText : '';

  return (
    <section className='section-about' id='about'>
      <h3 className='section-about__title'>{title}</h3>

      <div className='section-about__content'>
        <div className='section-about__content-img'>
          <Image src={`https:${imageUrl}`} fill objectFit='cover' alt={imageTitle || ''} />
        </div>

        <Card
          className='section-about__content-card'
          title={descriptionTitle}
          description={Description}
        />
      </div>

      <div className='section-about__sub-content'>{externalTitle}</div>
    </section>
  );
};
