import { FC } from 'react';
import styles from '../CatalogItem/catalogItem.module.scss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';
import { FavoriteButton } from '../UI Components/FavoriteButton/FavoriteButton';
import { Tablet } from '../../interfaces/tablets';

const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 10px 14px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 0px rgba(0, 64, 128, 0.2);
`;

export const TabletItem: FC<Tablet> = ({
  images,
  name,
  priceRegular,
  priceDiscount,
  id,
  screen,
  capacity,
  ram,
}) => {
  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CardItem className={styles.cardItem}>
      <div className={styles.card__container}>
        <img src={images[0]} alt='tablet' className={styles.image__hovered} />
        <h3 className={styles.card__title}>{name}</h3>
        <CustomButton
          style={{ border: '2px solid #6d6474', marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`/tablets/${id}`}
          >
            View Product
          </NavLink>
        </CustomButton>
      </div>

      <span className={styles.price}>
        {priceRegular} <strong id={styles.discount}>{priceDiscount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          Screen
          <span className={styles.list__itemSecondary}>{screen}</span>
        </li>
        <li className={styles.list__item}>
          Capacity
          <span className={styles.list__itemSecondary}>{capacity}</span>
        </li>
        <li className={styles.list__item}>
          RAM
          <span className={styles.list__itemSecondary}>{ram}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton />
        <FavoriteButton />
      </div>
    </CardItem>
  );
};

