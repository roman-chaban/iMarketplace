import { FC } from 'react';
import cl from './catalogItem.module.scss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { addToFavorites } from '../../redux/slices/productSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ICatalogItemProps } from '../../interfaces/catalog-item';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';
import { Products } from '../../redux/interfaces/products';

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
    <CardItem className={cl.cardItem}>
      <div className={cl.card__container}>
        <img src={imgUrl} alt='iphone' className={cl.image__hovered} />
        <h3 className={cl.card__title}>{title}</h3>
        <CustomButton
          style={{ border: '2px solid #6d6474', marginBottom: 10 }}
          className={cl.button}
        >
          <NavLink
            onClick={toUpPage}
            className={cl.view__product}
            to={`/products/${phoneId}`}
          >
            View Product
          </NavLink>
        </CustomButton>
      </div>
      <span className={cl.price}>
        {price} <strong id={cl.discount}>{discount}</strong>
      </span>
      <ul className={cl.card__list}>
        <li className={cl.list__item}>
          Screen
          <span className={cl.list__itemSecondary}>{displaySize}</span>
        </li>
        <li className={cl.list__item}>
          Capacity
          <span className={cl.list__itemSecondary}>{memory}</span>
        </li>
        <li className={cl.list__item}>
          RAM
          <span className={cl.list__itemSecondary}>{capacity}</span>
        </li>
      </ul>
      <div className={cl.catalog__buttonItems}>
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


