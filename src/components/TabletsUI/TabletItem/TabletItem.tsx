import { FC } from 'react';
import styles from '../../CatalogItem/CatalogItem.module.scss';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../../UI Components/CustomButton/CustomButton';
import { Tablet } from '../../../interfaces/tablets';
import { TabletFavoriteButton } from '../TabletFavoriteButton/TabletFavoriteButton';
import { useAppDispatch } from '../../../hooks/reduxHooks/useAppDispatch';
import {
  addToFavoritesTablets,
  deleteFromFavoriteTablets,
} from '../../../redux/slices/favoriteSlice';
import { TabletButton } from '../TabletButton/TabletButton';
import { addBasketTablets } from '../../../redux/slices/cartSlice';
import { translations } from '../../LanguageSwitcher/translation';
import { useLanguage } from '../../../hooks/useLanguage';
import { CardItem } from './styled/cardItem';
import { IconButton } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

const enum TabletsPath {
  TABLETS = '/tablets/tablet/',
}

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

  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();

  const handleAddToFavorites = (product: Tablet) => {
    dispatch(addToFavoritesTablets(product));
  };

  const handleDeleteFavorites = (productId: string) => {
    dispatch(deleteFromFavoriteTablets(productId));
  };

  const handleAddToCartTablets = (product: Tablet) => {
    dispatch(addBasketTablets(product));
  };

  return (
    <CardItem className={styles.cardItem}>
      <div className={styles.card__container}>
        <img
          src={images === undefined ? '' : images[0]}
          alt='tablet'
          className={styles.image__hovered}
        />
        <h3 className={styles.card__title}>{name}</h3>
        <CustomButton
          style={{ border: '2px solid #fff', marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`${TabletsPath.TABLETS}${id}`}
          >
            {translations[currentLanguage].viewButtonLabel}
            <IconButton aria-label='fingerprint' style={{color: '#fff'}}>
              <Fingerprint />
            </IconButton>
          </NavLink>
        </CustomButton>
      </div>

      <span
        className={styles.price}
        style={{ color: 'rgba(199, 53, 8, 0.8352941176)' }}
      >
        {priceRegular} <strong id={styles.discount}>{priceDiscount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.screen}
          <span className={styles.list__itemSecondary}>{screen}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.capacity}
          <span className={styles.list__itemSecondary}>{capacity}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.ram}
          <span className={styles.list__itemSecondary}>{ram}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <TabletButton
          product={{ images, id, name, priceRegular, capacity, ram, screen }}
          onClick={handleAddToCartTablets}
        />
        <TabletFavoriteButton
          tabletId={id ?? ''}
          product={{ images, id, name, priceRegular, capacity, ram, screen }}
          onClick={handleAddToFavorites}
          onDeleteProduct={() => handleDeleteFavorites(id ?? '')}
        />
      </div>
    </CardItem>
  );
};
