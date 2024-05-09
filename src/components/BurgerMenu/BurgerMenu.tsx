import { FC, useState } from 'react';
import styles from './burger.module.scss';
import appleLogo from '../../favicon/favicon.png';
import { useRef } from 'react';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { MENU_LINKS } from '../../interfaces/burger-menu';
import { Close } from '@mui/icons-material';

export const BurgerMenu: FC = () => {
  const buttonRef = useRef<null>(null);
  const burgerMenuRef = useRef<null>(null);
  const [isMenuClosed, setIsMenuClosed] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
  };

  const closeMenuButton = (): void => {
    toggleMenu();
  };

  const handleMenuItemClick = (): void => {
    closeMenuButton();
  };

  return (
    <div className='burger__container'>
      <div style={{ overflowY: 'hidden' }}>
        <div
          className={`${styles.burger__menu} ${
            isMenuClosed ? styles.closed : styles.active
          }`}
          ref={burgerMenuRef}
        >
          <div className={styles.close__item}>
            <div className={styles.burger__logoBlock}>
              <img
                src={appleLogo}
                alt='Apple Logo'
                className={styles.burger__logo}
              />
              <h3 className={styles.logo__title}>iMarketplace</h3>
            </div>
            <Close
              onClick={closeMenuButton}
              ref={buttonRef}
              style={{ fontSize: 30, cursor: 'pointer' }}
            />
          </div>
          <nav className={styles.menu}>
            {MENU_LINKS.map((link) => (
              <ul key={link.linkId} className={styles.menu__item}>
                <li className={styles.menu__listItem}>
                  <CustomLink
                    onClick={handleMenuItemClick}
                    to={link.to}
                    className={styles.menu__itemLink}
                  >
                    {link.title}
                  </CustomLink>
                </li>
              </ul>
            ))}
          </nav>
          <span className={styles.menu__description}>
            Apple Inc. 2024 &copy;
          </span>
        </div>
      </div>
    </div>
  );
};
