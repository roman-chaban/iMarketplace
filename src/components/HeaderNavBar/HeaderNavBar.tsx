import { FC, useState } from 'react';
import { styled } from 'styled-components';
import styles from '../Header/header.module.scss';
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
          className={`${styles.heart__button} ${
            activeButton === 'favorites' ? styles.active : ''
          }`}
        >
          <img src={Heart} alt='Heart Icon' className={styles.heart__icon} />
          <span className={styles.heart__counter}>{favoriteCounter}</span>
        </button>
      </NavLink>
      <NavLink to='cart' onClick={() => handleButtonClick('cart')}>
        <button
          className={`${styles.shoppingCart__button} ${
            activeButton === 'cart' ? styles.active : ''
          }`}
        >
          <img src={Basket} alt='Basket Icon' className={styles.busket__icon} />
          <span className={styles.busket__counter}>{basketCounter}</span>
        </button>
      </NavLink>
    </HeaderNavItems>
  );
};
