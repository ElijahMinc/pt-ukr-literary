'use client';

import Image from 'next/image';
import './header.scss';
import Link from 'next/link';
import { useState } from 'react';

interface IHeaderProps {
  logoImage: string;
  logoDescription: string;
}

export const Header = ({ logoImage, logoDescription }: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { url: '/#home', label: 'Home' },
    { url: '/#about', label: 'About' },
    { url: '/#join-us', label: 'Join us' },
    { url: '/#artists', label: 'Artists' },
    { url: '/#contacts', label: 'Contacts' },
    { url: '/#gallery', label: 'Gallery' },
  ];

  return (
    <div className='header'>
      <div className='container'>
        <nav className='nav'>
          <div className='logo'>
            <Image width={75} height={60} src={`https:${logoImage}`} alt='logo' />
            <h4>{logoDescription}</h4>
          </div>

          <div className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>

          <ul className={`nav__list ${menuOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.url} className='nav__item'>
                <Link href={link.url} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
