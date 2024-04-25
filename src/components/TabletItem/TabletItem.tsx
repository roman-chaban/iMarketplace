import { FC } from 'react';
import cl from '../CatalogItem/catalogItem.module.scss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
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

const TabletItem: FC<Tablet> = ({
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
    <CardItem className={cl.cardItem}>
      <div className={cl.card__container}>
        <img src={images[0]} alt='tablet' className={cl.image__hovered} />
        <h3 className={cl.card__title}>{name}</h3>
        <CustomButton
          style={{ border: '2px solid #6d6474', marginBottom: 10 }}
          className={cl.button}
        >
          <NavLink
            onClick={toUpPage}
            className={cl.view__product}
            to={`/tablets/${id}`}
          >
            View Product
          </NavLink>
        </CustomButton>
      </div>

      <span className={cl.price}>
        {priceRegular} <strong id={cl.discount}>{priceDiscount}</strong>
      </span>
      <ul className={cl.card__list}>
        <li className={cl.list__item}>
          Screen
          <span className={cl.list__itemSecondary}>{screen}</span>
        </li>
        <li className={cl.list__item}>
          Capacity
          <span className={cl.list__itemSecondary}>{capacity}</span>
        </li>
        <li className={cl.list__item}>
          RAM
          <span className={cl.list__itemSecondary}>{ram}</span>
        </li>
      </ul>
      <div className={cl.catalog__buttonItems}>
        <CatalogButton />
        <FavoriteButton />
      </div>
    </CardItem>
  );
};

export { TabletItem };
