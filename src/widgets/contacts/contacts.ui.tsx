import { Card } from '@/components/card/card.ui';
import Image from 'next/image';
import './contacts.scss';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { IContactsFields } from '@/types/contentful';
import { getDocumentToHtmlString } from '@/helpers/getDocumentToHtmlString';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

export const ContactsWidget = async () => {
  const contactsSectionData = await client.getEntries<EntrySkeletonType<IContactsFields>>({
    content_type: 'contacts',
    limit: 1,
  });

  const [contactsSection] = contactsSectionData.items;

  const contactsData = contactsSection?.fields;

  const title = contactsData.title;

  const textBlock = contactsData?.textBlock ? getDocumentToHtmlString(contactsData?.textBlock) : '';

  const image = contactsData?.image;

  const imageUrl = getContentfulImageData(image, { image: true });
  const imageTitle = getContentfulImageData(image, { title: true });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapSrc = `https://maps.google.com/maps?q=${(contactsData.location as any)?.lat},${(contactsData.location as any)?.lon}&z=15&output=embed`;

  const isContentExist = !title || !imageUrl || !textBlock || contactsData?.location;

  if (!isContentExist) return null;

  return (
    <section id='contacts' className='section-contacts'>
      <h3 className='section-contacts__title'>{title}</h3>

      <div className='section-contacts__content'>
        {imageUrl && (
          <div className='section-contacts__content-img'>
            <Image src={`https:${imageUrl}`} fill objectFit='cover' alt={imageTitle || ''} />
          </div>
        )}

        {textBlock && (
          <Card className='section-contacts__content-card'>
            <div dangerouslySetInnerHTML={{ __html: textBlock }} />
          </Card>
        )}

        {contactsData?.location && (
          <div className='section-contacts__content-map'>
            <iframe
              src={mapSrc}
              width='100%'
              height='100%'
              // style='border:0;'
              // allowfullscreen=''
              loading='lazy'
              // referrerpolicy='no-referrer-when-downgrade'
            />
          </div>
        )}
      </div>
    </section>
  );
};
