import { FC, useState } from 'react';
import { styled } from 'styled-components';
import cl from '../Header/header.module.scss';
import Heart from '../../images/icons/favorites-heart-icon.svg';
import Basket from '../../images/icons/busket-Icon.svg';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const HeaderNav: FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const favoriteCount = useAppSelector(
    (state) => state.favorites.favoriteCount
  );
  const busketCount = useAppSelector((state) => state.busket.busketCount);

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <HeaderNavItems>
      {/* <button className={cl.theme__button}>
        <DarkModeIcon className={cl.theme__icon} />
      </button> */}
      <NavLink to='favorites' onClick={() => handleButtonClick('favorites')}>
        <button
          className={`${cl.heart__button} ${
            activeButton === 'favorites' ? cl.active : ''
          }`}
        >
          <img src={Heart} alt='Heart Icon' className={cl.heart__icon} />
          <span className={cl.heart__counter}>{favoriteCount}</span>
        </button>
      </NavLink>
      <NavLink to='cart' onClick={() => handleButtonClick('cart')}>
        <button
          className={`${cl.shoppingCart__button} ${
            activeButton === 'cart' ? cl.active : ''
          }`}
        >
          <img src={Basket} alt='Basket Icon' className={cl.busket__button} />
          <span className={cl.busket__counter}>{busketCount}</span>
        </button>
      </NavLink>
    </HeaderNavItems>
  );
};

export { HeaderNav };
