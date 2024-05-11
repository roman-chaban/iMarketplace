import { FC, useState } from 'react';
import styles from './tabletCart.module.scss';
import { useAppDispatch } from '../../../hooks/reduxHooks/useAppDispatch';
import { Tablet } from '../../../interfaces/tablets';
import { deleteBasketTablets } from '../../../redux/slices/cartSlice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useCount } from '../../../hooks/useCount';

interface FavoriteCardProps extends Tablet {
  images: string[] | undefined;
  name: string | undefined;
  priceRegular: string | number | undefined;
  id: string | undefined;
  tabletId: string;
  onAddToCart: () => void;
  onDeleteFromCart: () => void;
}

export const TabletCart: FC<FavoriteCardProps> = ({
  images = [],
  name = '',
  priceRegular = 0,
  tabletId,
}) => {
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);
  const [productItemCounter, setProductCounter] = useState<number>(0);

  const price =
    typeof priceRegular === 'string' ? parseFloat(priceRegular) : priceRegular;

  const { productPrice, onAddProduct, onDeleteProduct } = useCount(price);

  const handleDeleteGoods = (productId: string) => {
    setIsRemoving(true);
    dispatch(deleteBasketTablets(productId));
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
        <button
          className={styles.favorite__cardDelete}
          onClick={() => handleDeleteGoods(tabletId)}
        >
          <HighlightOffIcon fontSize='large' />
        </button>
        <img
          src={images[0]}
          alt='tablet banner'
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>{name}</h3>
        </div>
        <span className={styles.favorite__cardPrice}>
          {productPrice} {'$'}
        </span>
        <div className={styles.counterPhone__block}>
          <button
            className={styles.plus}
            onClick={() => {
              onAddProduct();
              setProductCounter((prevCount) => prevCount + 1);
            }}
          >
            <AddCircleIcon style={{ color: '#65C466' }} fontSize='large' />
          </button>
          <button
            className={styles.minus}
            disabled={productPrice < 1 ? true : false}
            onClick={() => {
              onDeleteProduct();
              setProductCounter((prevCount) => prevCount - 1);
            }}
          >
            <RemoveCircleIcon
              style={{ color: 'rgba(199, 53, 8, 0.8352941176)' }}
              fontSize='large'
            />
          </button>
        </div>
        <h6 className={styles.productItems__title}>
          Ready to buy {productItemCounter}
        </h6>
      </div>
    </div>
  );
};
