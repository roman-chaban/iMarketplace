import { FC } from "react";
import styles from "./ProductCheckout.module.scss";
import { useTotal } from '../TotalContext/TotalContext';

interface ProductCheckoutProps {
  totalPrice: number;
  itemCounter: number;
}

export const ProductCheckout: FC<ProductCheckoutProps> = () => {
  const { totalPrice, totalItemCount } = useTotal();

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__titles}>
        <h3 className={styles.checkout__price}>{totalPrice} $</h3>
        <span className={styles.checkout__items}>
          Total for {totalItemCount} items
        </span>
      </div>
      <button className={styles.checkout__button}>Checkout</button>
    </div>
  );
};
