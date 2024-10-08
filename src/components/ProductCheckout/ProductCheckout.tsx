import { FC } from 'react';
import styles from './ProductCheckout.module.scss';

interface ProductCheckoutProps {
  totalPrice: number;
  itemCounter: number;
  onCheckout: () => void;
}

export const ProductCheckout: FC<ProductCheckoutProps> = ({
  totalPrice,
  itemCounter,
  onCheckout,
}) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__titles}>
        <h3 className={styles.checkout__price}>{totalPrice} $</h3>
        <span className={styles.checkout__items}>
          Total for {itemCounter} items
        </span>
      </div>
      <button className={styles.checkout__button} onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
};
