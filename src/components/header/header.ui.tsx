import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className='container'>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image width={85} height={85} src='/logo.png' alt='logo' />

            <h4>Multicultural Poetry Night</h4>
          </div>

          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href='#about'>About</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#experiences'>Experiences</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#reserve'>Reserve</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#reviews'>Reviews</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#gallery'>Gallery</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
