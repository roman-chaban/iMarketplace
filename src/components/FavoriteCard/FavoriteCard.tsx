import { FC, useState } from 'react';
import styles from './favoriteCard.module.scss';
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
      className={`${styles.favorite__cardBlock} ${isRemoving ? styles.removing : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.favorite__card}>
        <img
          src={imgUrl}
          alt='iphone banner'
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>{title}</h3>
          <span className={styles.favorite__cardPrice}>{price}</span>
        </div>
        <button
          className={styles.favorite__cardDelete}
          onClick={() => phoneId !== undefined && handleDeleteGoods(phoneId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
