import { Card } from '@/components/card/card.ui';
import Image from 'next/image';
import { IHomeFields } from '@/types/contentful';
import { getDocumentToHtmlString } from '@/helpers/getDocumentToHtmlString';
import './home.scss';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

export const HomeWidget = async () => {
  const homeSectionData = await client.getEntries<EntrySkeletonType<IHomeFields>>({
    content_type: 'home',
    limit: 1,
  });

  const [homeSection] = homeSectionData.items;

  const homeData = homeSection?.fields;
  const title = homeData?.title;
  const description = homeData?.description ? getDocumentToHtmlString(homeData?.description) : '';
  const subTitle = homeData?.subTitle;

  const image = homeData?.mainImage;

  const imageUrl = getContentfulImageData(image, { image: true });
  const imageTitle = getContentfulImageData(image, { title: true });

  const externalTextOne = homeData.externalTextOne;
  const externalTextTwo = homeData.externalTextTwo;

  const leftCentralBlock = homeData?.leftCentralBlock
    ? getDocumentToHtmlString(homeData?.leftCentralBlock)
    : '';

  const rightCentralBlock = homeData?.rightCentralBlock
    ? getDocumentToHtmlString(homeData?.leftCentralBlock)
    : '';

  return (
    <section className='section-home'>
      <div className='section-main'>
        <div className='section-main__item'>
          <div className='section-main__image section-main__image-first'>
            <Image src={`https:${imageUrl}`} objectFit='cover' fill alt={imageTitle || ''} />
          </div>
        </div>
        <div className='section-main__item'>
          <Card
            appearance='secondary'
            title={title}
            description={description && <div dangerouslySetInnerHTML={{ __html: description }} />}
          />

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
            {leftCentralBlock && (
              <Card>
                <div dangerouslySetInnerHTML={{ __html: leftCentralBlock }} />
              </Card>
            )}

            {rightCentralBlock && (
              <Card>
                <div dangerouslySetInnerHTML={{ __html: rightCentralBlock }} />
              </Card>
            )}
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

          <div className='sub-content__celebration'>
            <Card
              className='sub-content__celebration-card'
              title='Celebrate Through Language'
              description={
                <>
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    From the tenderness of lullabies to the fierceness of protest — witness the many
                    lives a poem can live.
                  </span>
                  <span
                    style={{
                      display: 'block',
                    }}
                  >
                    No stage, no pressure. Just voices, hearts, and presence. Bring your listening
                    soul — or a poem of your own.
                  </span>
                </>
              }
            />

            <div className='sub-content__celebration-img'>
              <Image src='/home-third-img.png' objectFit='cover' fill alt='celebration' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
