import { FC } from 'react';
import styles from './footerNavBar.module.scss';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';

export const FooterNavBar: FC = () => {
  return (
    <nav className={styles.navigation__bar}>
      <ul className={styles.nav}>
        <li tabIndex={1} className={styles.nav__item}>
          <CustomLink className={styles.nav__link} to='/'>
            home
          </CustomLink>
        </li>
        <li tabIndex={2} className={styles.nav__item}>
          <CustomLink className={styles.nav__link} to='/phones'>
            phones
          </CustomLink>
        </li>
        <li tabIndex={3} className={styles.nav__item}>
          <CustomLink className={styles.nav__link} to='/tablets'>
            tablets
          </CustomLink>
        </li>
        <li tabIndex={4} className={styles.nav__item}>
          <CustomLink className={styles.nav__link} to='accessories'>
            accessories
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};
