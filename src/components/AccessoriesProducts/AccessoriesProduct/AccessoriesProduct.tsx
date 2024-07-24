import { FC, useState } from "react";
import { Accessories } from "../../../interfaces/accessories";
import { CardItem } from "../../CatalogItem/styled/catalogItem";
import { translations } from "../../LanguageSwitcher/translation";
import { CustomButton } from "../../UI Components/CustomButton/CustomButton";
import { Fingerprint } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { FormClose } from "grommet-icons";
import { useAppSelector } from "../../../hooks/reduxHooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/reduxHooks/useAppDispatch";
import { useLanguage } from "../../../hooks/useLanguage";
import styles from "./AccessoriesProduct.module.scss";
import {
  addAccessoriesToCart,
  addToFavoritesAccessories,
  deleteAccessoriesFromCart,
  deleteFromFavoritesAccessories,
} from "../../../redux/slices/accessoriesSlice";
import { CatalogButton } from "../../AccessoriesUI/CatalogButton/CatalogButton";
import { FavoriteButton } from "../../AccessoriesUI/FavoriteButton/FavoriteButton";

interface AccessoriesProps {
  product: Accessories;
}

export const AccessoriesProduct: FC<AccessoriesProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();
  const location = useLocation();

  const [isRemoving, setIsRemoving] = useState(false);

  const inCart = useAppSelector((state) =>
    state.accessories.favorites.some((item) => item.id === product.id)
  );
  const inFavorites = useAppSelector((state) =>
    state.accessories.favorites.some((item) => item.id === product.id)
  );

  const handleAddToFavorites = (product: Accessories) => {
    dispatch(addToFavoritesAccessories(product));
  };

  const handleAddToCart = (product: Accessories) => {
    dispatch(addAccessoriesToCart(product));
  };

  const handleDeleteFromCart = (productId: string) => {
    dispatch(deleteAccessoriesFromCart(productId));
  };

  const handleDeleteFromFavorites = (productId: string) => {
    dispatch(deleteFromFavoritesAccessories(productId));
  };

  const handleRemoveItem = () => {
    setIsRemoving(true);
    setTimeout(() => {
      handleDeleteFromFavorites(product.id);
    }, 500);
  };

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <CardItem
      className={`${styles.cardItem} ${isRemoving ? styles.hidden : ""}`}
    >
      {location.pathname === "/" ||
      location.pathname === "/accessories" ? null : (
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
          src={product.images[0]}
          alt={product.name}
          className={styles.image__hovered}
        />
        <h3 className={styles.card__title}>
          {product.name.replaceAll("-", " ")}
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
        {product.priceDiscount}${" "}
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
        {product.id !== undefined && (
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
