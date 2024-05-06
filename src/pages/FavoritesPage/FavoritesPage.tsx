import { FC, useEffect } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './favoritePage.module.scss';
import { Products } from '../../redux/interfaces/products';
import { Tablet } from '../../interfaces/tablets';
import { TabletFavoriteCard } from '../../components/TabletFavoriteCard/TabletFavoriteCard';
import {
  addToFavorites,
  addToFavoritesTablets,
  deleteFromFavoriteTablets,
  deleteFromFavorites,
} from '../../redux/slices/favoriteSlice';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { useAppSelector } from '../../hooks/reduxHooks/useAppSelector';
import { PhoneItem } from '../../components/CatalogItem/PhoneItem';

export const FavoritesPage: FC = () => {
  const dispatch = useAppDispatch();

  const favoritesCounter = useAppSelector(
    (state) => state.favorite.favoriteCounter
  );

  const favoriteProducts = useAppSelector((state) => state.favorite.favorites);

  const favoriteTablets = useAppSelector(
    (state) => state.favorite.favoritesTablets
  );

  useEffect(() => {
    document.title = 'iMarketplace | Favorites';
  }, []);

  const handleAddToFavorites = (product: Products) => {
    dispatch(addToFavorites(product));
  };

  const handleAddToFavoritesTablets = (tablet: Tablet) => {
    dispatch(addToFavoritesTablets(tablet));
  };

  const handleDeleteFromFavorites = (phoneId: number) => {
    dispatch(deleteFromFavorites(phoneId));
  };

  const handleDeleteFromFavoritesTablets = (tabletId: string) => {
    dispatch(deleteFromFavoriteTablets(tabletId));
  };

  return (
    <>
      <CatalogPage mainTitle='Favorites' smallTitle='Favorites' />
      {favoritesCounter === 0 ? (
        ''
      ) : (
        <h4 className={styles.itemsCounter}>
          Products in favorites:{' '}
          <strong className={styles.counter__marker}>{favoritesCounter}</strong>
        </h4>
      )}
      <div>
        <br />
        {favoriteProducts.length === 0 && favoriteTablets.length === 0 ? (
          <h2 className={styles.empty__title}>Favorite page is empty</h2>
        ) : (
          <div className={styles.favorite__list}>
            {favoriteProducts.map((favorite: Products) => (
              <div key={favorite.phoneId} className={styles.favorite__item}>
                <PhoneItem
                  imgUrl={favorite.imgUrl}
                  displaySize={favorite.displaySize}
                  capacity={`${favorite.capacity}`}
                  memory={favorite.memory}
                  title={favorite.title}
                  price={favorite.price}
                  phoneId={favorite.phoneId}
                  onAddToFavorites={() => handleAddToFavorites(favorite)}
                  onDeleteFromFavorites={() =>
                    handleDeleteFromFavorites(favorite.phoneId || 0)
                  }
                />
              </div>
            ))}
            {favoriteTablets.map((favorite: Tablet) => (
              <div key={favorite.id} className={styles.favorite__item}>
                <TabletFavoriteCard
                  images={favorite.images}
                  name={favorite.name}
                  priceRegular={favorite.priceRegular}
                  id={favorite.id}
                  tabletId={favorite.id === undefined ? '' : favorite.id}
                  onAddToFavorites={() => handleAddToFavoritesTablets(favorite)}
                  onDeleteFromFavorites={() =>
                    handleDeleteFromFavoritesTablets(favorite.id || '')
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
