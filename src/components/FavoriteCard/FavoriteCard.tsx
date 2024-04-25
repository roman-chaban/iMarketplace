import { FC, useState } from 'react';
import cl from './favoriteCard.module.scss';
import { ICatalogItemProps } from '../../interfaces/catalog-item';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { deleteFavorites } from '../../redux/slices/productSlice';

export const FavoriteCard: FC<ICatalogItemProps> = ({
  imgUrl = '',
  title = '',
  price = '',
  phoneId,
}: ICatalogItemProps) => {
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDeleteGoods = (productId: number) => {
    setIsRemoving(true);
    dispatch(deleteFavorites(productId));
  };

  const handleTransitionEnd = () => {
    setIsRemoving(false);
  };

  return (
    <div
      className={`${cl.favorite__cardBlock} ${isRemoving ? cl.removing : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={cl.favorite__card}>
        <img
          src={imgUrl}
          alt='iphone banner'
          className={cl.favorite__cardPicture}
        />
        <div>
          <h3 className={cl.favorite__cardTitle}>{title}</h3>
          <span className={cl.favorite__cardPrice}>{price}</span>
        </div>
        <button
          className={cl.favorite__cardDelete}
          onClick={() => phoneId !== undefined && handleDeleteGoods(phoneId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
