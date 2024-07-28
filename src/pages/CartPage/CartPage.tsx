import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './CartPageStyles.module.scss';
import { useAppSelector } from '../../hooks/reduxHooks/useAppSelector';
import { Products } from '../../redux/interfaces/products';
import { Tablet } from '../../interfaces/tablets';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../components/LanguageSwitcher/translation';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductCheckout } from '../../components/ProductCheckout/ProductCheckout';
import { useTotal } from '../../components/TotalContext/TotalContext';
import { Accessories } from '../../interfaces/accessories';
import { AccessoryCard } from '../../components/AccessorCard/AccessorCard';
import { useAppDispatch } from '../../hooks/reduxHooks/useAppDispatch';
import { clearCart } from '../../redux/slices/cartSlice';

export const CartPage: FC = () => {
  const { currentLanguage } = useLanguage();
  const basketCounter = useAppSelector((state) => state.cart.cartCounter);
  const cartPhones = useAppSelector((state) => state.cart.cart);
  const cartTablets = useAppSelector((state) => state.cart.basketTablets);
  const cartAccessories = useAppSelector((state) => state.cart.cartAccessories);
  const dispatch = useAppDispatch();
  const { totalPrice, totalItemCount } = useTotal();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckout = () => {
    dispatch(clearCart());
    setShowConfirmation(true);
  };

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].cartLabel}`;
  }, [currentLanguage]);

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);  // Delay before redirecting

      return () => clearTimeout(timer);
    }
  }, [showConfirmation, navigate]);

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
      <div className={styles.cart__container}>
        <br />
        {cartPhones.length === 0 &&
        cartTablets.length === 0 &&
        cartAccessories.length === 0 ? (
          <h2 className={styles.empty__title}>
            {translations[currentLanguage].cartEmptyTitle}
          </h2>
        ) : (
          <div className={styles.favorite__list}>
            {cartPhones.map((cart: Products) => (
              <div key={cart.phoneId} className={styles.favorite__item}>
                <ProductCard phone={cart} />
              </div>
            ))}
            {cartTablets.map((cart: Tablet) => (
              <div key={cart.id} className={styles.favorite__item}>
                <ProductCard tablet={cart} />
              </div>
            ))}
            {cartAccessories.map((cart: Accessories) => (
              <div key={cart.id} className={styles.favorite__item}>
                <AccessoryCard accessory={cart} />
              </div>
            ))}
          </div>
        )}
        {basketCounter > 0 && (
          <>
            <ProductCheckout
              totalPrice={totalPrice}
              itemCounter={totalItemCount}
              onCheckout={handleCheckout}
            />
            {showConfirmation && (
              <div className={styles.confirmationMessage}>
                Done! Your order has been placed.
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
