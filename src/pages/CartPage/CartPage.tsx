import { FC, useEffect } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './CartPage.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { useAppSelector } from '../../hooks/reduxHooks/useAppSelector';
import { Products } from '../../redux/interfaces/products';
import {
  addToCart,
  deleteFromCart,
  addBasketTablets,
  deleteBasketTablets,
} from '../../redux/slices/cartSlice';
import { Tablet } from '../../interfaces/tablets';
import { PhoneCart } from '../../components/ProductsUI/PhoneCart/PhoneCart';
import { TabletCart } from '../../components/TabletsUI/TabletCart/TabletCart';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../components/LanguageSwitcher/translation';

export const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();

  const basketCounter = useAppSelector((state) => state.cart.cartCounter);
  const cartPhones = useAppSelector((state) => state.cart.cart);
  const cartTablets = useAppSelector((state) => state.cart.basketTablets);

  const handleAddToCart = (product: Products) => {
    dispatch(addToCart(product));
  };

  const handleAddToCartTablets = (tablet: Tablet) => {
    dispatch(addBasketTablets(tablet));
  };

  const handleDeleteFromCart = (phoneId: number) => {
    dispatch(deleteFromCart(phoneId));
  };

  const handleDeleteFromCartTablets = (tabletId: string) => {
    dispatch(deleteBasketTablets(tabletId));
  };

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].cartLabel}`;
  }, [currentLanguage]);

  return (
    <>
      <CatalogPage
        mainTitle={translations[currentLanguage].cartTitle}
        smallTitle={translations[currentLanguage].cartTitle}
      />
      {basketCounter === 0 ? (
        ''
      ) : (
        <h4 className={styles.itemsCounter}>
          {translations[currentLanguage].productsInBasketLabel}{' '}
          <strong className={styles.counter__marker}>{basketCounter}</strong>
        </h4>
      )}
      <div>
        <br />
        {cartPhones.length === 0 && cartTablets.length === 0 ? (
          <h2 className={styles.empty__title}>
            {translations[currentLanguage].cartEmptyTitle}
          </h2>
        ) : (
          <div className={styles.favorite__list}>
            {cartPhones.map((cart: Products) => (
              <div key={cart.phoneId} className={styles.favorite__item}>
                <PhoneCart
                  imgUrl={cart.imgUrl}
                  title={cart.title}
                  price={cart.price}
                  phoneId={cart.phoneId}
                  onAddToCart={() => handleAddToCart(cart)}
                  onDeleteFromCart={() =>
                    handleDeleteFromCart(cart.phoneId || 0)
                  }
                />
              </div>
            ))}
            {cartTablets.map((cart: Tablet) => (
              <div key={cart.id} className={styles.favorite__item}>
                <TabletCart
                  images={cart.images}
                  name={cart.name}
                  priceRegular={cart.priceRegular}
                  id={cart.id}
                  tabletId={cart.id === undefined ? '' : cart.id}
                  onAddToCart={() => handleAddToCartTablets(cart)}
                  onDeleteFromCart={() =>
                    handleDeleteFromCartTablets(cart.id || '')
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
