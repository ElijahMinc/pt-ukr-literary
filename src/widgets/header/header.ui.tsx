'use client';

import Image from 'next/image';
import './header.scss';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { url: '#about', label: 'About' },
    { url: '#experiences', label: 'Experiences' },
    { url: '#reserve', label: 'Reserve' },
    { url: '#reviews', label: 'Reviews' },
    { url: '#gallery', label: 'Gallery' },
    { url: '#contact', label: 'Contact' },
  ];

  return (
    <div className='header'>
      <div className='container'>
        <nav className='nav'>
          <div className='logo'>
            <Image width={75} height={60} src='/logo.png' alt='logo' />
            <h4>Multicultural Poetry Night</h4>
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
