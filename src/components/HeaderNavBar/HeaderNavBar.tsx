import { FC } from 'react';
import { styled } from 'styled-components';
import styles from '../Header/HeaderStyles.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks/useAppSelector';
import { Basket, Favorite } from 'grommet-icons';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

export const HeaderNavBar: FC = () => {
  const location = useLocation();

  const favoriteCounter = useAppSelector(
    (state) => state.favorite.favoriteCounter
  );

  const cartCounter = useAppSelector((state) => state.cart.cartCounter);

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
          <Favorite color='plain' className={styles.heart__icon} />
          <span className={styles.heart__counter}>{favoriteCounter}</span>
        </button>
      </NavLink>

      <NavLink to='/cart'>
        <button
          className={`${styles.shoppingCart__button} ${
            location.pathname === '/cart' ? styles.active : styles.not__border
          }`}
        >
          <Basket color='plain' className={styles.basket__icon} />
          <span className={styles.basket__counter}>{cartCounter}</span>
        </button>
      </NavLink>
    </HeaderNavItems>
  );
};
