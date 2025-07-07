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
            description={
              description && <div dangerouslySetInnerHTML={{ __html: description }} />

              // <span>
              //   A single night where voices from distant places blend into one gentle current of
              //   verse, where each word carries a memory, each silence holds a heartbeat, and poetry
              //   becomes the soft thread that ties us together across languages, across lives, in a
              //   moment that exists only once and entirely through feeling. Come be part of something
              //   that only lives once: <strong>a night made entirely of poetry.</strong>
              // </span>
            }
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
          <p
            className='sub-content__text'
            style={{
              maxWidth: '768px',
              margin: '0 auto 40px auto',
            }}
          >
            POETRY GATHERING — a space where language becomes light, where diverse voices and poetic
            forms converge beyond borders. This event is a tribute to the power of words as bridges
            — between cultures, between strangers, between the unsaid and the deeply felt. Our
            vision was to create a living moment of shared presence, where poetry isn’t confined to
            the page, but breathes between people.
          </p>

          <div className='sub-content__cards'>
            <Card
              title='What to Expect'
              description='A warm, intimate atmosphere where poems flow freely — from the classics to the untamed words of our own. Let your spirit wander, seated among verses in Portuguese, Ukrainian, and Brazilian voices.'
            />

            <Card
              title='Why Poetry?'
              description='Because poetry holds what cannot be held.
Because the world needs beauty, now more than ever.
Because each of us has something to say — and someone who needs to hear it.'
            />
          </div>

          <p
            className='sub-content__text'
            style={{
              maxWidth: '768px',
              margin: '40px auto 40px auto',
            }}
          >
            This gathering was born from the desire to share presence through poetry, to let words
            cross borders and linger in the air like music, uniting those who arrive with different
            stories but the same quiet longing to listen, to speak, to be moved together in one
            fleeting, beautiful evening.
          </p>

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
