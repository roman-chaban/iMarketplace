import { FC, useEffect } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import { CustomSelect } from '../../components/Select/Select';
import cl from './tablets.module.scss';

export const TabletsPage: FC = () => {
  useEffect(() => {
    document.title = 'iMarketplace| Tablets';
  }, []);

  return (
    <div className={cl.catalog__container}>
      <CatalogPage smallTitle='Tablets' models='0 models' mainTitle='Tablets' />
      <div className={cl.page__select}>
        <CustomSelect />
      </div>
    </div>
  );
};
