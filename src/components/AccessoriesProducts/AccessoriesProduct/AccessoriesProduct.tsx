import { FC, useCallback, useState } from "react";
import { Accessories } from "../../../interfaces/accessories";
import { CardItem } from "../../CatalogItem/styled/catalogItem";
import { translations } from "../../LanguageSwitcher/translation";
import { CustomButton } from "../../UI Components/CustomButton/CustomButton";
import { Fingerprint } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/reduxHooks/useAppDispatch";
import { useLanguage } from "../../../hooks/useLanguage";
import styles from "./AccessoriesProduct.module.scss";
import { CatalogButton } from "../../AccessoriesUI/CatalogButton/CatalogButton";
import { FavoriteButton } from "../../AccessoriesUI/FavoriteButton/FavoriteButton";
import {
  addAccessoriesToCart,
  deleteAccessoriesFromCart,
} from "../../../redux/slices/cartSlice";
import {
  addToFavoritesAccessories,
  deleteFromFavoriteAccessories,
} from "../../../redux/slices/favoriteSlice";
import { FormClose } from "grommet-icons";

interface AccessoriesProps {
  product: Accessories;
}

export const AccessoriesProduct: FC<AccessoriesProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();
  const [isRemoving, setIsRemoving] = useState(false);

  const cartAccessories = useAppSelector(
    (state) => state.cart.cartAccessories || []
  );
  const favoriteAccessories = useAppSelector(
    (state) => state.favorite.favoritesAccessories || []
  );

  const inCart = cartAccessories.some((item) => item.id === product.id);
  const inFavorites = favoriteAccessories.some(
    (item) => item.id === product.id
  );

  const handleAddToFavorites = useCallback(() => {
    dispatch(addToFavoritesAccessories(product));
  }, [dispatch, product]);

  const handleAddToCart = useCallback(() => {
    dispatch(addAccessoriesToCart(product));
  }, [dispatch, product]);

  const handleDeleteFromCart = useCallback(() => {
    dispatch(deleteAccessoriesFromCart(product.id));
  }, [dispatch, product.id]);

  const handleDeleteFromFavorites = useCallback(() => {
    dispatch(deleteFromFavoriteAccessories(product.id));
  }, [dispatch, product.id]);

  const toUpPage = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleRemoveItem = () => {
    setIsRemoving(true);
    setTimeout(() => {
      handleDeleteFromFavorites();
    }, 500);
  };

  const shouldShowButton = () => {
    return !(
      location.pathname === "/" ||
      location.pathname === "/accessories" ||
      location.pathname.startsWith("/accessories/accessor")
    );
  };

  return (
    <CardItem
      className={`${styles.cardItem} ${isRemoving ? styles.hidden : ""}`}
    >
      {shouldShowButton() && (
        <button
          title="Delete product"
          className={styles.deleteButton}
          onClick={handleRemoveItem}
        >
          <FormClose color="#eb5757" />
        </button>
      )}
      <div className={styles.card__container}>
        <img
          src={product.images?.[0] || ""}
          alt={product.name || "accessory"}
          className={styles.image__hovered}
        />
        <h3 className={styles.card__title}>
          {product.name.replace(/-/g, " ")}
        </h3>
        <CustomButton
          style={{ border: "2px solid #fff", marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`/accessories/accessor/${product.id}`}
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
        {product.priceDiscount}$
        <strong id={styles.discount}>{product.priceRegular}$</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.screen}
          <span className={styles.list__itemSecondary}>{product.screen}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.capacity}
          <span className={styles.list__itemSecondary}>{product.capacity}</span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.ram}
          <span className={styles.list__itemSecondary}>{product.ram}</span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton
          product={product}
          inCart={inCart}
          onClick={handleAddToCart}
          onDeleteProduct={handleDeleteFromCart}
        />
        {product.id && (
          <FavoriteButton
            product={product}
            inFavorites={inFavorites}
            onClick={handleAddToFavorites}
            onDeleteProduct={handleDeleteFromFavorites}
          />
        )}
      </div>
    </CardItem>
  );
};
