import { FC, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './favoritePage.module.scss';
import { Products } from '../../redux/interfaces/products';
import { FavoriteCard } from '../../components/FavoriteCard/FavoriteCard';

export const FavoritesPage: FC = () => {
  const favoriteProducts = useAppSelector(
    (state) => state.productSlice.favorites
  );

  useEffect(() => {
    document.title = 'iMarketplace | Favorites';
  }, []);

  return (
    <>
      <CatalogPage mainTitle='Favorites' smallTitle='Favorites' />
      <div>
        {favoriteProducts.length === 0 ? (
          <h2 className={cl.empty__title}>Favorite page is empty</h2>
        ) : (
          <div className={cl.favorite__list}>
            {favoriteProducts.map((favorite: Products, index: number) => (
              <div key={index} className={cl.favorite__item}>
                <FavoriteCard
                  imgUrl={favorite.imgUrl}
                  title={favorite.title}
                  price={favorite.price}
                  phoneId={favorite.phoneId}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
