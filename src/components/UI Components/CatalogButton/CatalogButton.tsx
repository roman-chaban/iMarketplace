import { FC, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "./CatalogButtonStyles.module.scss";
import { Products } from "../../../redux/interfaces/products";
import { translations } from "../../LanguageSwitcher/translation";
import { useLanguage } from "../../../hooks/useLanguage";

interface CatalogProps {
  product: Products;
  inCart: boolean;
  onClick: (product: Products) => void;
  onDeleteProduct: (productId: number) => void;
}

export const CatalogButton: FC<CatalogProps> = ({
  product,
  inCart,
  onClick,
  onDeleteProduct,
}) => {
  const { currentLanguage } = useLanguage();
  const [isActiveButton, setIsActiveButton] = useState<boolean>(inCart);

  useEffect(() => {
    setIsActiveButton(inCart);
  }, [inCart]);

  const handleAddToCart = () => {
    setIsActiveButton(true);
    localStorage.setItem(`catalogButtonColor_${product.phoneId}`, "#66CDAA");
    onClick(product);
  };

  const handleRemoveFromCart = () => {
    setIsActiveButton(false);
    localStorage.setItem(`catalogButtonColor_${product.phoneId}`, "#313237");
    onDeleteProduct(product.phoneId);
  };

  const handleClick = isActiveButton ? handleRemoveFromCart : handleAddToCart;

  return (
    <Button
      onClick={handleClick}
      className={styles.catalog__buttonItem}
      style={{ backgroundColor: isActiveButton ? "#66CDAA" : "#313237" }}
    >
      {isActiveButton
        ? translations[currentLanguage].cartState.addedCart
        : translations[currentLanguage].cartState.addCart}
    </Button>
  );
};
