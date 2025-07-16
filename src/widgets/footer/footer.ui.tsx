import Image from 'next/image';
import Link from 'next/link';
import './footer.scss';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { IContactsFields, ILogoFields } from '@/types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

export const FooterWidget = async () => {
  const links = [
    { url: '#home', label: 'Home' },
    { url: '#about', label: 'About' },
    { url: '#Join us', label: 'Join us' },
    { url: '#artists', label: 'Artists' },
    { url: '#contacts', label: 'Contacts' },
    { url: '#gallery', label: 'Gallery' },
  ];

  const contactsSectionData = await client.getEntries<EntrySkeletonType<IContactsFields>>({
    content_type: 'contacts',
    limit: 1,
  });

  const [contactsSection] = contactsSectionData.items;

  const contactsData = contactsSection?.fields;

  const TextBlock = contactsData?.textBlock
    ? documentToReactComponents(contactsData?.textBlock)
    : '';

  const logoContent = await client.getEntries<EntrySkeletonType<ILogoFields>>({
    content_type: 'logo',
    limit: 1,
  });

  const [logoItems] = logoContent.items;

  const logoData = logoItems?.fields;

  const logoTitle = logoData.title;

  const logoImage = logoData?.logo;

  const imageLogoUrl = getContentfulImageData(logoImage, { image: true });

  return (
    <footer className='footer'>
      <div className='footer__item'>
        <div className='footer__item-logo'>
          <Image width={55} height={40} src={`https:${imageLogoUrl}`} alt='logo' />
          <h4>{logoTitle}</h4>
        </div>
        <p className='footer__item-text'>© {new Date().getFullYear()} All rights reserved</p>
      </div>
      <div className='footer__item'>
        {TextBlock}

        {/* <p className='footer__item-text'>+351 00000000</p>
        <p className='footer__item-text'>test@gmail.com</p>
        <p className='footer__item-text'>Rua Test Address, 89. Porto.</p> */}
      </div>
      <div className='footer__item'>
        <h4 className='footer__item-title'>Menu</h4>

        {links.map((link) => (
          <p key={link.url} className='footer__item-text'>
            <Link href={link.url}>{link.label}</Link>
          </p>
        ))}
      </div>
    </footer>
  );
};
