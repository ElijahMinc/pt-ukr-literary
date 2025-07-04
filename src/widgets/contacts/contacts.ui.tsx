import { Card } from '@/components/card/card.ui';
import Image from 'next/image';
import './contacts.scss';

export const ContactsWidget = () => {
  return (
    <section id='contacts' className='section-contacts'>
      <h3 className='section-contacts__title'>Contacts</h3>

      <div className='section-contacts__content'>
        <div className='section-contacts__content-img'>
          <Image src='/contacts-first-img.png' fill objectFit='cover' alt='about' />
        </div>

        <Card className='section-contacts__content-card'>
          <h4
            className='card__title'
            style={{
              fontSize: '24px',
            }}
          >
            Contact Sandbox:
          </h4>
          <p
            className='card__description'
            style={{
              fontSize: '14px',
            }}
          >
            +351 000000
          </p>
          <p
            className='card__description'
            style={{
              fontSize: '14px',
            }}
          >
            test@gmail.com
          </p>
          <h4
            className='card__title'
            style={{
              marginTop: '30px',
              fontSize: '24px',
            }}
          >
            Address:
          </h4>
          <p
            className='card__description'
            style={{
              fontSize: '14px',
            }}
          >
            Rua Test Address, 99. Porto.
          </p>
        </Card>

        <div className='section-contacts__content-map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.878667838742!2d-8.614771788491396!3d41.15899881001114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464ff61baeb4f%3A0x147986203115d2f!2sR.%20de%20Antero%20de%20Quental%2089%2C%20Porto!5e0!3m2!1sru!2spt!4v1751648591843!5m2!1sru!2spt'
            width='100%'
            height='100%'
            // style='border:0;'
            // allowfullscreen=''
            loading='lazy'
            // referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  );
};
