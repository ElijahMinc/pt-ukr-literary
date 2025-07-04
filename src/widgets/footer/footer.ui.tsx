import Image from 'next/image';
import Link from 'next/link';
import './footer.scss';

export const FooterWidget = () => {
  const links = [
    { url: '#home', label: 'Home' },
    { url: '#about', label: 'About' },
    { url: '#Join us', label: 'Join us' },
    { url: '#artists', label: 'Artists' },
    { url: '#gallery', label: 'Gallery' },
    { url: '#contacts', label: 'Contacts' },
  ];
  return (
    <footer className='footer'>
      <div className='footer__item'>
        <div className='footer__item-logo'>
          <Image width={55} height={40} src='/logo.png' alt='logo' />
          <h4>Multicultural Poetry Night</h4>
        </div>
        <p className='footer__item-text'>© {new Date().getFullYear()} All rights reserved</p>
      </div>
      <div className='footer__item'>
        <h4 className='footer__item-title'>Contacts</h4>
        <p className='footer__item-text'>+351 00000000</p>
        <p className='footer__item-text'>test@gmail.com</p>
        <p className='footer__item-text'>Rua Test Address, 89. Porto.</p>
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
