import { FC, useEffect } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './catalogPage.module.scss';

type TypeContent = boolean;

export const CartPage: FC = () => {
  const isContent: TypeContent = true;

  useEffect(() => {
    document.title = 'iMarketplace | Products';
  }, []);
  return (
    <>
      <CatalogPage smallTitle='Cart' mainTitle='Products Cart' models='' />
      <div>
        {isContent && (
          <h2 className={styles.empty__title}>Products page is empty</h2>
        )}
      </div>
    </>
  );
};
