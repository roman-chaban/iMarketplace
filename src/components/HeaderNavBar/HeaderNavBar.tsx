import { FC, useState } from 'react';
import { styled } from 'styled-components';
import cl from '../Header/header.module.scss';
import Heart from '../../images/header/favorite.svg';
import Basket from '../../images/header/shopping_cart.svg';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks/useAppSelector';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

export const HeaderNavBar: FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const { favoriteCounter, basketCounter } = useAppSelector(
    (state) => state.productSlice
  );

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <HeaderNavItems>
      <NavLink to='favorites' onClick={() => handleButtonClick('favorites')}>
        <button
          className={`${cl.heart__button} ${
            activeButton === 'favorites' ? cl.active : ''
          }`}
        >
          <img src={Heart} alt='Heart Icon' className={cl.heart__icon} />
          <span className={cl.heart__counter}>{favoriteCounter}</span>
        </button>
      </NavLink>
      <NavLink to='cart' onClick={() => handleButtonClick('cart')}>
        <button
          className={`${cl.shoppingCart__button} ${
            activeButton === 'cart' ? cl.active : ''
          }`}
        >
          <img src={Basket} alt='Basket Icon' className={cl.busket__icon} />
          <span className={cl.busket__counter}>{basketCounter}</span>
        </button>
      </NavLink>
    </HeaderNavItems>
  );
};
