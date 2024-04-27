import { FC, useState } from 'react';
import styles from './phonePage.module.scss';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import products from '../../common/products/products.json';
import { ModelsCatalog } from '../../components/ModelsCatalog/ModelsCatalog';

export const PhonePage: FC = () => {
  const [selectedProduct] = useState(products[0]);
  return (
    <div className={styles.phone__layout}>
      <ProductItem product={selectedProduct} />
      <ModelsCatalog modelsTitle="iPhone's" />
    </div>
  );
};
