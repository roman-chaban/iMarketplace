import { FC, useState } from 'react';
import './burger.scss';
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
      <div
        className={`burger__menu ${isMenuClosed ? 'closed' : 'active'}`}
        ref={burgerMenuRef}
      >
        <div className='close__item'>
          <div className='burger__logoBlock'>
            <img src={appleLogo} alt='Apple Logo' className='burger__logo' />
            <h3 className='logo__title'>Apple Catalog</h3>
          </div>
          <Close
            onClick={closeMenuButton}
            ref={buttonRef}
            style={{ fontSize: 30, cursor: 'pointer' }}
          />
        </div>
        <nav className='menu'>
          {MENU_LINKS.map((link) => (
            <ul key={link.linkId} className='menu__item'>
              <li className='menu__listItem'>
                <CustomLink
                  onClick={handleMenuItemClick}
                  to={link.to}
                  className='menu__itemLink'
                >
                  {link.title}
                </CustomLink>
              </li>
            </ul>
          ))}
        </nav>
        <span className='menu__description'>Apple Inc. 2024</span>
      </div>
    </div>
  );
};

