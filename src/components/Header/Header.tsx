import { FC, useEffect, useState } from 'react';
import styles from './HeaderStyles.module.scss';
import { HeaderNavBar } from '../HeaderNavBar/HeaderNavBar';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { PopUp } from '../../components/UI Components/PopUp/PopUp';
import { HeaderContainer, HeaderWrapper } from './styled/header';
import { ROUTES } from '../../constants/routes/routes';
import { Apple } from 'grommet-icons';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { translations } from '../LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';
import { SwitcherContainer } from '../LanguageSwitcher/styled/switcher';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { currentLanguage, handleChangeLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toPageBottomScrolled = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  return (
    <HeaderWrapper className={styles.header}>
      <HeaderContainer
        className={` ${styles.header__navContainer} ${styles.header} ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <div onClick={toPageBottomScrolled} className={styles.header__logo}>
          <a href='/' className={styles.logo__link}>
            <Apple
              className={styles.apple__logo}
              style={{ fontSize: 30, color: '#89939A' }}
            />
          </a>
          <h3 className={styles.logo__title}>
            iMarketplace
          </h3>
        </div>
        <nav className={styles.navigation__bar}>
          <ul className={styles.nav}>
            <li tabIndex={1} className={styles.nav__item}>
              <CustomLink className={styles.nav__link} to={ROUTES.HOME}>
                {translations[currentLanguage].homeLabel}
              </CustomLink>
            </li>
            <li tabIndex={2} className={styles.nav__item}>
              <CustomLink className={styles.nav__link} to={ROUTES.PHONES}>
                {translations[currentLanguage].phoneLabel}
              </CustomLink>
            </li>
            <li tabIndex={3} className={styles.nav__item}>
              <CustomLink className={styles.nav__link} to={ROUTES.TABLETS}>
                {translations[currentLanguage].tabletLabel}
              </CustomLink>
            </li>
            <li tabIndex={4} className={styles.nav__item}>
              <CustomLink className={styles.nav__link} to={ROUTES.ACCESSORIES}>
                {translations[currentLanguage].accessoriesLabel}
              </CustomLink>
            </li>
            <SwitcherContainer>
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onChangeLanguage={handleChangeLanguage}
              />
            </SwitcherContainer>
          </ul>
        </nav>
        <div className={styles.navBar__container}>
          <PopUp />
          <HeaderNavBar />
          <button onClick={toggleMenu} className={styles.burger__buttonBlock}>
            <span
              className={styles.button__burgerLine}
            ></span>
            <span
              className={styles.button__burgerLine}
            ></span>
            <span
              className={styles.button__burgerLine}
            ></span>
          </button>
        </div>
      </HeaderContainer>
      {isMenuOpen && <BurgerMenu />}
    </HeaderWrapper>
  );
};
