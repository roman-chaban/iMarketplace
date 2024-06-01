import { FC, useState } from 'react';
import styles from './BurgerStyles.module.scss';
import appleLogo from '../../favicon/favicon.png';
import { useRef } from 'react';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { Close } from '@mui/icons-material';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { translations } from '../LanguageSwitcher/translation';
import { TypeMenuLinks } from '../../interfaces/burger-menu';
import { ROUTES } from '../../constants/routes/routes';
import { useBodyOverflow } from '../../hooks/useBodyOverflow';

export const BurgerMenu: FC = () => {
  const buttonRef = useRef<null>(null);
  const burgerMenuRef = useRef<null>(null);
  const [isMenuClosed, setIsMenuClosed] = useState<boolean>(false);

  const { currentLanguage, handleChangeLanguage } = useLanguage();


  useBodyOverflow(!isMenuClosed);


  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
  };

  const closeMenuButton = (): void => {
    toggleMenu();
  };

  const handleMenuItemClick = (): void => {
    closeMenuButton();
  };
  const MENU_LINKS: TypeMenuLinks = [
    {
      linkId: 1,
      title: translations[currentLanguage].homeLabel,
      to: ROUTES.HOME,
    },
    {
      linkId: 2,
      title: translations[currentLanguage].phoneLabel,
      to: ROUTES.PHONES,
    },
    {
      linkId: 3,
      title: translations[currentLanguage].tabletLabel,
      to: ROUTES.TABLETS,
    },
    {
      linkId: 4,
      title: translations[currentLanguage].accessoriesLabel,
      to: ROUTES.ACCESSORIES,
    },
    {
      linkId: 5,
      title: translations[currentLanguage].favoriteLabel,
      to: ROUTES.FAVORITES,
    },
    {
      linkId: 6,
      title: translations[currentLanguage].cartLabel,
      to: ROUTES.CART,
    },
  ];

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
              <h3 className={styles.logo__title}>
                {translations[currentLanguage].LogoLabel}
              </h3>
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onChangeLanguage={handleChangeLanguage}
              />
            </div>
            <Close
              onClick={closeMenuButton}
              ref={buttonRef}
              style={{ fontSize: 30, cursor: 'pointer', color: '#313131b4' }}
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
                    {link.title.toUpperCase()}
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
