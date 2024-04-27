import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './accessories.module.scss';
// import { CustomSelect } from '../../components/Select/Select';
import { useEffect } from 'react';

export const AccessoriesPage: FC = () => {
  useEffect(() => {
    document.title = 'iMarketplace | Accessories';
  }, []);
  return (
    <div className={styles.catalog__container}>
      <CatalogPage
        smallTitle='Accessories'
        models='0 models'
        mainTitle='Accessories'
      />
      <div className={styles.page__select}>
        {/* <CustomSelect /> */}
      </div>
      <h3 className={styles.coming__title} >Accessories is coming</h3>
    </div>
  );
};
