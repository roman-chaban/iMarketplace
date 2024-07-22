import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Fingerprint } from "@mui/icons-material";
import { FormClose } from "grommet-icons";
import styles from "../../CatalogItem/CatalogItemStyles.module.scss";
import { Tablet } from "../../../interfaces/tablets";
import { TabletFavoriteButton } from "../TabletFavoriteButton/TabletFavoriteButton";
import { useAppDispatch } from "../../../hooks/reduxHooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/reduxHooks/useAppSelector";
import {
  addToFavoritesTablets,
  deleteFromFavoriteTablets,
} from "../../../redux/slices/favoriteSlice";
import { useLanguage } from "../../../hooks/useLanguage";
import { CardItem } from "./styled/cardItem";
import { TabletButton } from "../TabletButton/TabletButton";
import { translations } from "../../LanguageSwitcher/translation";
import { CustomButton } from "../../UI Components/CustomButton/CustomButton";
import {
  addBasketTablets,
  deleteBasketTablets,
} from "../../../redux/slices/cartSlice";

const enum TabletsPath {
  TABLETS = "/tablets/tablet/",
}

interface TabletItemProps {
  product: Tablet;
}

export const TabletItem: FC<TabletItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();
  const location = useLocation();
  
  const inCart = useAppSelector((state) =>
    state.cart.basketTablets.some((item) => item.tabletId === product.tabletId)
  );
  
  const inFavorites = useAppSelector((state) =>
    state.favorite.favoritesTablets.some((item) => item.tabletId === product.tabletId)
  );

  const handleAddToFavorites = (product: Tablet) => {
    dispatch(addToFavoritesTablets(product));
  };
  
  const handleAddToCart = (product: Tablet) => {
    dispatch(addBasketTablets(product));
  };
  
  const handleDeleteFromCart = (productId: number) => {
    dispatch(deleteBasketTablets(productId));
  };
  
  const handleDeleteFavorites = (productId: number) => {
    dispatch(deleteFromFavoriteTablets(productId));
  };
  
  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <CardItem className={styles.cardItem}>
      {location.pathname === "/" || location.pathname === "/tablets" ? null : (
        <button
          title="Delete product"
          className={styles.deleteButton}
          onClick={() => handleDeleteFavorites(product.tabletId ?? "")}
        >
          <FormClose color="#eb5757" />
        </button>
      )}
      <div className={styles.card__container}>
        <img
          src={product.images ? product.images[0] : ""}
          alt="tablet"
          className={styles.image__hovered}
        />
        <h3 className={styles.card__title}>{product.name}</h3>
        <CustomButton
          style={{ border: "2px solid #fff", marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`${TabletsPath.TABLETS}${product.id}`}
          >
            {translations[currentLanguage].viewButtonLabel}
            <Fingerprint />
          </NavLink>
        </CustomButton>
      </div>

      <span
        className={styles.price}
        style={{ color: "rgba(199, 53, 8, 0.8352941176)" }}
      >
        {product.priceRegular}{" "}
        <strong id={styles.discount}>{product.priceDiscount}</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.screen}
          <span className={styles.list__itemSecondary}>{product.screen}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.capacity}
          <span className={styles.list__itemSecondary}>
            {product.capacity} {translations[currentLanguage].memoryLabel}
          </span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.ram}
          <span className={styles.list__itemSecondary}>
            {product.ram} {translations[currentLanguage].memoryLabel}
          </span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <TabletButton
          product={product}
          inCart={inCart}
          onClick={handleAddToCart}
          onDeleteProduct={handleDeleteFromCart}
        />
        {product.tabletId !== undefined && (
          <TabletFavoriteButton
            product={product}
            inFavorites={inFavorites}
            onClick={handleAddToFavorites}
            onDeleteProduct={handleDeleteFavorites}
          />
        )}
      </div>
    </CardItem>
  );
};
