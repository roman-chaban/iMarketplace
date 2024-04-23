import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './accessories.module.scss';
import { CustomSelect } from '../../components/Select/Select';
import { useEffect } from 'react';

export const AccessoriesPage: FC = () => {
  useEffect(() => {
    document.title = 'iMarketplace | Accessories';
  }, []);
  return (
    <div className={cl.catalog__container}>
      <CatalogPage
        smallTitle='Accessories'
        models='0 models'
        mainTitle='Accessories'
      />
      <div className={cl.page__select}>
        <CustomSelect />
      </div>
    </div>
  );
};
