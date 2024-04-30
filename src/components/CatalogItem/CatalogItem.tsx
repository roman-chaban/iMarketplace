import { FC } from 'react';
import styles from './catalogItem.module.scss';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { FavoriteButton } from '../UI Components/FavoriteButton/FavoriteButton';
import { addToFavorites } from '../../redux/slices/productSlice';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { ICatalogItemProps } from '../../interfaces/catalog-item';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';
import { Products } from '../../redux/interfaces/products';
import { CardItem } from './styled/catalogItem';

export const CatalogItem: FC<ICatalogItemProps> = ({
  imgUrl = '',
  title = '',
  price = '',
  displaySize = '',
  discount = '',
  capacity = '',
  memory = '',
  phoneId,
}: ICatalogItemProps) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (product: Products) => {
    dispatch(addToFavorites(product));
  };

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CardItem className={styles.cardItem}>
      <div className={styles.card__container}>
        <img src={imgUrl} alt='iphone' className={styles.image__hovered} />
        <h3 className={styles.card__title}>{title}</h3>
        <CustomButton
          style={{ border: '2px solid #6d6474', marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`/products/${title}`}
          >
            View Product
          </NavLink>
        </CustomButton>
      </div>
      <span className={styles.price}>
        {price} <strong id={styles.discount}>{discount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          Screen
          <span className={styles.list__itemSecondary}>{displaySize}</span>
        </li>
        <li className={styles.list__item}>
          Capacity
          <span className={styles.list__itemSecondary}>{memory}</span>
        </li>
        <li className={styles.list__item}>
          RAM
          <span className={styles.list__itemSecondary}>{capacity}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton />
        <FavoriteButton
          product={{
            imgUrl,
            title,
            price,
            displaySize,
            discount,
            capacity,
            memory,
            phoneId,
          }}
          onClick={handleAddToFavorites}
        />
      </div>
    </CardItem>
  );
};
