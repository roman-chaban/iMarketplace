import { FC } from 'react';
import { styled } from 'styled-components';
import styles from '../Header/header.module.scss';
import Heart from '../../images/header/favorite.svg';
import Basket from '../../images/header/shopping_cart.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks/useAppSelector';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

export const HeaderNavBar: FC = () => {
  const location = useLocation();
  const { favoriteCounter, basketCounter } = useAppSelector(
    (state) => state.productSlice
  );

  return (
    <HeaderNavItems>
      <NavLink to='/favorites'>
        <button
          className={`${styles.heart__button} ${
            location.pathname === '/favorites'
              ? styles.active
              : styles.not__border
          }`}
        >
          <img src={Heart} alt='Heart Icon' className={styles.heart__icon} />
          <span className={styles.heart__counter}>{favoriteCounter}</span>
        </button>
      </NavLink>

      <NavLink to='/cart'>
        <button
          className={`${styles.shoppingCart__button} ${
            location.pathname === '/cart' ? styles.active : styles.not__border
          }`}
        >
          <img src={Basket} alt='Basket Icon' className={styles.basket__icon} />
          <span className={styles.basket__counter}>{basketCounter}</span>
        </button>
      </NavLink>
    </HeaderNavItems>
  );
};
