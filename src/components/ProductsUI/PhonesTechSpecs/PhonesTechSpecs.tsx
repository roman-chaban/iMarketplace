import { FC } from 'react';
import styles from './PhonesTechSpecs.module.scss';
import { Products } from '../../../redux/interfaces/products';

interface PhonesTechSpecsProps {
  product: Products;
  selectMemory: string;
}

const PhonesTechSpecs: FC<PhonesTechSpecsProps> = ({
  product,
  selectMemory,
}) => {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <article className={styles.techSpecs__block}>
      <h2 className={styles.techSpecs__title}>Tech specs:</h2>
      <div className={styles.techSpecs__characteristics}>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Title:</span>
          <span className={styles.techSpecs__itemSubTitle}>{product.name}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Price:</span>
          <span
            className={styles.techSpecs__itemSubTitle}
          >{`${product.price} $`}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Discount:</span>
          <span
            className={styles.techSpecs__itemSubTitle}
          >{`${product.discount} $`}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Memory:</span>
          <span className={styles.techSpecs__itemSubTitle}>{selectMemory}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Capacity:</span>
          <span
            className={styles.techSpecs__itemSubTitle}
          >{`${product.capacity} GB`}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Display Size:</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {product.displaySize}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Category:</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {product.category}
          </span>
        </div>
      </div>
    </article>
  );
};

export { PhonesTechSpecs };
