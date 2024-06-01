import { FC } from 'react';
import styles from './CatalogItem.module.scss';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { FavoriteButton } from '../UI Components/FavoriteButton/FavoriteButton';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/slices/favoriteSlice';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { ICatalogItemProps } from '../../interfaces/catalog-item';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';
import { Products } from '../../redux/interfaces/products';
import { CardItem } from './styled/catalogItem';
import { addToCart } from '../../redux/slices/cartSlice';
import { translations } from '../LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';
import { IconButton } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

const enum PhonesPath {
  PHONES = '/phones/phone/',
}
export const PhoneItem: FC<ICatalogItemProps> = ({
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
  const { currentLanguage } = useLanguage();

  const handleAddToFavorites = (product: Products) => {
    dispatch(addToFavorites(product));
  };

  const handleAddToCart = (product: Products) => {
    dispatch(addToCart(product));
  };

  const handleDeleteFavorites = (productId: number) => {
    dispatch(deleteFromFavorites(productId));
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
        <h3 className={styles.card__title}>{title.replaceAll('-', ' ')}</h3>
        <CustomButton
          style={{ border: '2px solid #fff', marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`${PhonesPath.PHONES}${title}`}
          >
            {translations[currentLanguage].viewButtonLabel}
            <IconButton aria-label='fingerprint' style={{ color: '#fff' }}>
              <Fingerprint />
            </IconButton>
          </NavLink>
        </CustomButton>
      </div>
      <span
        className={styles.price}
        style={{ color: 'rgba(199, 53, 8, 0.8352941176)' }}
      >
        {price} <strong id={styles.discount}>{discount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.screen}
          <span className={styles.list__itemSecondary}>{displaySize}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.capacity}
          <span className={styles.list__itemSecondary}>{memory}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.ram}
          <span className={styles.list__itemSecondary}>{capacity}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton
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
          onClick={handleAddToCart}
        />
        {phoneId !== undefined && (
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
            onDeleteProduct={handleDeleteFavorites}
          />
        )}
      </div>
    </CardItem>
  );
};
