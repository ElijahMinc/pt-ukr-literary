import { Card } from '@/components/card/card.ui';
import Image from 'next/image';
import { IHomeFields } from '@/types/contentful';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './home.scss';

export const HomeWidget = async () => {
  const homeSectionData = await client.getEntries<EntrySkeletonType<IHomeFields>>({
    content_type: 'home',
    limit: 1,
  });

  const [homeSection] = homeSectionData.items;

  const homeData = homeSection?.fields;
  const title = homeData?.title;
  const Description = homeData?.description ? documentToReactComponents(homeData?.description) : '';
  const subTitle = homeData?.subTitle;

  const image = homeData?.mainImage;

  const imageUrl = getContentfulImageData(image, { image: true });
  const imageTitle = getContentfulImageData(image, { title: true });

  const externalTextOne = homeData.externalTextOne;
  const externalTextTwo = homeData.externalTextTwo;

  const leftCentralBlockTitle = homeData?.leftCentralBlockTitle
    ? homeData?.leftCentralBlockTitle
    : '';

  const LeftCentralBlock = homeData?.leftCentralBlock
    ? documentToReactComponents(homeData?.leftCentralBlock)
    : '';

  const rightCentralBlockTitle = homeData?.rightCentralBlockTitle
    ? homeData?.rightCentralBlockTitle
    : '';

  const RightCentralBlock = homeData?.rightCentralBlock
    ? documentToReactComponents(homeData?.rightCentralBlock)
    : '';

  const secondDescriptionTitle = homeData?.secondDescriptionTitle
    ? homeData?.secondDescriptionTitle
    : '';

  const SecondDescription = homeData?.secondDescription
    ? documentToReactComponents(homeData?.secondDescription)
    : '';

  const secondDescriptionImage = homeData?.secondImage;

  const secondDescriptionImageUrl = getContentfulImageData(secondDescriptionImage, { image: true });

  const secondDescriptionImageTitle = getContentfulImageData(secondDescriptionImage, {
    title: true,
  });

  return (
    <section className='section-home'>
      <div className='section-main'>
        <div className='section-main__item'>
          <div className='section-main__image section-main__image-first'>
            <Image src={`https:${imageUrl}`} objectFit='cover' fill alt={imageTitle || ''} />
          </div>
        </div>
        <div className='section-main__item'>
          <Card appearance='secondary' title={title} description={Description} />

          <div
            style={{
              marginTop: '30px',
            }}
          >
            {/* <Card className='section-main__image section-main__image-second'>
              <Image src='/home-second-img.png' objectFit='cover' fill alt='main-picture' />
            </Card> */}
            <Card appearance='secondary' title={subTitle} />
          </div>
        </div>
      </div>

      <div className='sub-content'>
        <div className='sub-content__wrapper'>
          {externalTextOne && (
            <p
              className='sub-content__text'
              style={{
                maxWidth: '768px',
                margin: '0 auto 40px auto',
              }}
            >
              {externalTextOne}
            </p>
          )}

          <div className='sub-content__cards'>
            {LeftCentralBlock && <Card title={leftCentralBlockTitle}>{LeftCentralBlock}</Card>}

            {RightCentralBlock && <Card title={rightCentralBlockTitle}>{RightCentralBlock}</Card>}
          </div>

          {externalTextTwo && (
            <p
              className='sub-content__text'
              style={{
                maxWidth: '768px',
                margin: '40px auto 40px auto',
              }}
            >
              {externalTextTwo}
            </p>
          )}

          {SecondDescription && (
            <div className='sub-content__celebration'>
              <Card
                className='sub-content__celebration-card'
                title={secondDescriptionTitle}
                description={SecondDescription}
              />

              <div className='sub-content__celebration-img'>
                <Image
                  src={`https:${secondDescriptionImageUrl}`}
                  objectFit='cover'
                  fill
                  alt={secondDescriptionImageTitle || ''}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
