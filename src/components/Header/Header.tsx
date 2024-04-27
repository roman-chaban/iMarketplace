import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import styles from './header.module.scss';
import { HeaderNavBar } from '../HeaderNavBar/HeaderNavBar';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { PopUp } from '../../components/UI Components/PopUp/PopUp';
import { Apple } from '@mui/icons-material';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 1.5px 0px 0px #e2e6e9;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

export const Header: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
          <a href='#!' className={styles.logo__link}>
            <Apple
              className={styles.apple__logo}
              style={{ fontSize: 30, color: '#89939A' }}
            />
          </a>
          <h3 className={styles.logo__title}>iMarketplace</h3>
        </div>
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
        <PopUp />
        <HeaderNavBar />
        <div onClick={toggleMenu} className={styles.burger__buttonBlock}>
          <button type='button' className={styles.button__burgerLine}></button>
          <button type='button' className={styles.button__burgerLine}></button>
          <button type='button' className={styles.button__burgerLine}></button>
        </div>
      </HeaderContainer>
      {isMenuOpen && <BurgerMenu />}
    </HeaderWrapper>
  );
};
