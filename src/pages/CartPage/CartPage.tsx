import { FC, useEffect } from "react";
import { CatalogPage } from "../CatalogPage/CatalogPage";
import styles from "./CartPageStyles.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks/useAppSelector";
import { Products } from "../../redux/interfaces/products";

import { Tablet } from "../../interfaces/tablets";
import { PhoneCart } from "../../components/ProductsUI/PhoneCart/PhoneCart";
import { TabletCart } from "../../components/TabletsUI/TabletCart/TabletCart";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../components/LanguageSwitcher/translation";

export const CartPage: FC = () => {
  const { currentLanguage } = useLanguage();

  const basketCounter = useAppSelector((state) => state.cart.cartCounter);
  const cartPhones = useAppSelector((state) => state.cart.cart);
  const cartTablets = useAppSelector((state) => state.cart.basketTablets);

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
        ""
      ) : (
        <h4 className={styles.itemsCounter}>
          {translations[currentLanguage].productsInBasketLabel}{" "}
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
                <PhoneCart product={cart} />
              </div>
            ))}
            {cartTablets.map((cart: Tablet) => (
              <div key={cart.id} className={styles.favorite__item}>
                <TabletCart product={cart} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
