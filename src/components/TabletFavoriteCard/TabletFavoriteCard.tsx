import { FC, useState } from 'react';
import styles from '../FavoriteCard/favoriteCard.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { deleteFromFavoriteTablets } from '../../redux/slices/favoriteSlice';
import { Tablet } from '../../interfaces/tablets';

interface FavoriteCardProps extends Tablet {
  tabletId: string;
  onDeleteFromFavorites?: () => void;
  onAddToFavorites?: () => void;
}

export const TabletFavoriteCard: FC<FavoriteCardProps> = ({
  images = [],
  name = '',
  priceRegular = '',
  tabletId,
}) => {
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDeleteGoods = (productId: string) => {
    setIsRemoving(true);
    dispatch(deleteFromFavoriteTablets(productId));
  };

  const handleTransitionEnd = () => {
    setIsRemoving(false);
  };

  return (
    <div
      className={`${styles.favorite__cardBlock} ${
        isRemoving ? styles.removing : ''
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.favorite__card}>
        <img
          src={images[0]}
          alt='tablet banner'
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>{name}</h3>
          <span className={styles.favorite__cardPrice}>{priceRegular}</span>
        </div>
        <button
          className={styles.favorite__cardDelete}
          onClick={() => handleDeleteGoods(tabletId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
