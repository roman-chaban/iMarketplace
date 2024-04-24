import { FC } from 'react';
import cl from './footerNavBar.module.scss';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';

export const FooterNavBar: FC = () => {
  return (
    <nav className={cl.navigation__bar}>
      <ul className={cl.nav}>
        <li tabIndex={1} className={cl.nav__item}>
          <CustomLink className={cl.nav__link} to='/'>
            home
          </CustomLink>
        </li>
        <li tabIndex={2} className={cl.nav__item}>
          <CustomLink className={cl.nav__link} to='/phones'>
            phones
          </CustomLink>
        </li>
        <li tabIndex={3} className={cl.nav__item}>
          <CustomLink className={cl.nav__link} to='/tablets'>
            tablets
          </CustomLink>
        </li>
        <li tabIndex={4} className={cl.nav__item}>
          <CustomLink className={cl.nav__link} to='accessories'>
            accessories
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};
