import { FC } from 'react';
import styles from './TabletsTechSpecs.module.scss';
import { Tablet } from '../../../interfaces/tablets';

interface TabletsTechSpecsProps {
  product: Tablet;
  selectCapacity: string;
}

export const TabletsTechSpecs: FC<TabletsTechSpecsProps> = ({
  product,
  selectCapacity,
}) => {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <article className={styles.techSpecs__block}>
      <h2 className={styles.techSpecs__title}>Tech specs</h2>
      <div className={styles.techSpecs__characteristics}>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Title</span>
          <span className={styles.techSpecs__itemSubTitle}>{product.name}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Price</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {`${product.priceRegular} $`}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Discount</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {`${product.priceDiscount} $` ?? 'N/A'}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Capacity</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {selectCapacity}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Ram</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {product.ram ?? 'N/A'}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Display Size</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {product.screen ?? 'N/A'}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Category</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {product.category}
          </span>
        </div>
      </div>
    </article>
  );
};
