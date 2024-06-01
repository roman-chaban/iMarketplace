import { FC, useEffect, useState } from 'react';
import styles from './PhonePageStyles.module.scss';
import { ProductItem } from '../../components/ProductsUI/ProductItem/ProductItem';
import products from '../../common/products/products.json';
import { ModelsCatalog } from '../../components/ModelsCatalog/ModelsCatalog';
import { useParams } from 'react-router-dom';

export const PhonePage: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const { title } = useParams<{ title: string }>();

  useEffect(() => {
    const titleProductName =
      title !== undefined ? title.replaceAll('-', ' ') : title;
    document.title = `Product | ${titleProductName}`;
    const product = products.find((product) => product.title === title);
    if (product) {
      setSelectedProduct(product);
    }
  }, [title]);

  return (
    <div className={styles.phone__layout}>
      <ProductItem product={selectedProduct} />
      <ModelsCatalog />
    </div>
  );
};
