import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './favoritePage.module.scss';
import { FC, useEffect } from 'react';

type TypeContent = boolean;

export const FavoritesPage: FC = () => {
  const isContent: TypeContent = true;

  useEffect(() => {
    document.title = 'iMarketplace | Favorites';
  }, []);
  return (
    <>
      <CatalogPage mainTitle='Favorites' smallTitle='Favorites' />
      <div>
        {isContent && (
          <h2 className={cl.empty__title}>Favorite page is empty</h2>
        )}
      </div>
    </>
  );
};
