import { FC, useState } from "react";
import styles from "./CatalogItemStyles.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { CustomButton } from "../UI Components/CustomButton/CustomButton";
import { FavoriteButton } from "../UI Components/FavoriteButton/FavoriteButton";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../redux/slices/favoriteSlice";
import { useAppDispatch } from "../../hooks/reduxHooks/useAppDispatch";
import { CatalogButton } from "../UI Components/CatalogButton/CatalogButton";
import { CardItem } from "./styled/catalogItem";
import { addToCart, deleteFromCart } from "../../redux/slices/cartSlice";
import { translations } from "../LanguageSwitcher/translation";
import { useLanguage } from "../../hooks/useLanguage";
import { Fingerprint } from "@mui/icons-material";
import { Products } from "../../redux/interfaces/products";
import { FormClose } from "grommet-icons";
import { useAppSelector } from "../../hooks/reduxHooks/useAppSelector";

const enum PhonesPath {
  PHONES = "/phones/phone/",
}

interface PhoneItemProps {
  product: Products;
}

export const PhoneItem: FC<PhoneItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();
  const location = useLocation();

  const [isRemoving, setIsRemoving] = useState(false);

  const inCart = useAppSelector((state) =>
    state.cart.cart.some((item) => item.phoneId === product.phoneId)
  );
  const inFavorites = useAppSelector((state) =>
    state.favorite.favorites.some((item) => item.phoneId === product.phoneId)
  );

  const handleAddToFavorites = (product: Products) => {
    dispatch(addToFavorites(product));
  };

  const handleAddToCart = (product: Products) => {
    dispatch(addToCart(product));
  };

  const handleDeleteFromCart = (productId: number) => {
    dispatch(deleteFromCart(productId));
  };

  const handleDeleteFromFavorites = (productId: number) => {
    dispatch(deleteFromFavorites(productId));
  };

  const handleRemoveItem = () => {
    setIsRemoving(true);
    setTimeout(() => {
      handleDeleteFromFavorites(product.phoneId);
    }, 500);
  };

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const shouldShowButton = () => {
    return !(
      location.pathname === "/" ||
      location.pathname === "/phones" ||
      location.pathname.startsWith(PhonesPath.PHONES)
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
          src={product.imgUrl}
          alt="iphone"
          className={styles.image__hovered}
        />
        <h3 className={styles.card__title}>
          {product.title.replaceAll("-", " ")}
        </h3>
        <CustomButton
          style={{ border: "2px solid #fff", marginBottom: 10 }}
          className={styles.button}
        >
          <NavLink
            onClick={toUpPage}
            className={styles.view__product}
            to={`${PhonesPath.PHONES}${product.title}`}
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
        {product.price}${" "}
        <strong id={styles.discount}>{product.discount}$</strong>
      </span>
      <ul className={styles.card__list}>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.screen}
          <span className={styles.list__itemSecondary}>
            {product.displaySize}
          </span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.capacity}
          <span className={styles.list__itemSecondary}>
            {product.memory} {translations[currentLanguage].memoryLabel}
          </span>
        </li>
        <li className={styles.list__item}>
          {translations[currentLanguage].productParams.ram}
          <span className={styles.list__itemSecondary}>
            {product.capacity} {translations[currentLanguage].memoryLabel}
          </span>
        </li>
      </ul>
      <div className={styles.catalog__buttonItems}>
        <CatalogButton
          product={product}
          inCart={inCart}
          onClick={handleAddToCart}
          onDeleteProduct={handleDeleteFromCart}
        />
        {product.phoneId !== undefined && (
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
