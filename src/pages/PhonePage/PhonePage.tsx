import { FC, useEffect, useState } from 'react';
import styles from './phonePage.module.scss';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import products from '../../common/products/products.json';
import { ModelsCatalog } from '../../components/ModelsCatalog/ModelsCatalog';
import { useParams } from 'react-router-dom';

export const PhonePage: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const { title } = useParams<{ title: string }>();

  useEffect(() => {
    document.title = 'Product | Phone';
    const product = products.find((product) => product.title === title);
    if (product) {
      setSelectedProduct(product);
    }
  }, [title]);

  return (
    <div className={styles.phone__layout}>
      <ProductItem product={selectedProduct} />
      <ModelsCatalog modelsTitle="iPhone's" />
    </div>
  );
};
