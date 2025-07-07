import { Card } from '@/components/card/card.ui';
import Image from 'next/image';
import './about.scss';

export const AboutWidget = () => {
  return (
    <section className='section-about' id='about'>
      <h3 className='section-about__title'>About us</h3>

      <div className='section-about__content'>
        <div className='section-about__content-img'>
          <Image src='/about-first-img.png' fill objectFit='cover' alt='about' />
        </div>

        <Card
          className='section-about__content-card'
          title='Souls language'
          description={
            <>
              <span
                style={{
                  display: 'block',
                }}
              >
                Poetry is the language of the soul — and this event is its gathering place. Our
                mission is to bring together poets and lovers of poetry from Brazil, Portugal, and
                Ukraine, celebrating rhythm, resistance, memory, and imagination.
              </span>
              <span
                style={{
                  display: 'block',
                }}
              >
                In a single evening, cultures will meet, voices will rise, and hearts will find one
                another through the magic of verse.
              </span>
            </>
          }
        />
      </div>

      <div className='section-about__sub-content'>
        There is no entrance fee — just bring your open heart. We welcome everyone: curious minds,
        seasoned readers, quiet listeners.
      </div>
    </section>
  );
};
