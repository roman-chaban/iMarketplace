import { FC, useState, useEffect } from 'react';
import cl from '../PhonesPage/phones.module.scss';
import { ProductItem } from './ProductItem';
import products from '../../common/products/tablets.json';
import { ModelsCatalog } from '../../components/ModelsCatalog/ModelsCatalog';
import { Tablet } from '../../interfaces/tablets';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export const TabletPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Tablet | undefined>(
    undefined
  );

  useEffect(() => {
    const tablet = products.find((tablet) => tablet.id === id);
    setSelectedProduct(tablet);
  }, [id]);

  return (
    <div className={cl.phone__layout}>
      {selectedProduct ? (
        <ProductItem tablet={selectedProduct} />
      ) : (
        <NotFoundPage statusText='404' message='This tablet is not found' />
      )}
      <ModelsCatalog modelsTitle="iPad's" />
    </div>
  );
};

export default TabletPage;
