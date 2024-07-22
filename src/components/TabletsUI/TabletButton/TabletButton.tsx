import { FC, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "../../UI Components/CatalogButton/CatalogButtonStyles.module.scss";
import { translations } from "../../LanguageSwitcher/translation";
import { useLanguage } from "../../../hooks/useLanguage";
import { Tablet } from "../../../interfaces/tablets";

interface CatalogProps {
  product: Tablet;
  inCart: boolean;
  onClick: (product: Tablet) => void;
  onDeleteProduct?: (productId: number) => void;
}

export const TabletButton: FC<CatalogProps> = ({
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
    localStorage.setItem(`catalogButtonColor_${product.tabletId}`, "#66CDAA");
    onClick(product);
  };

  const handleRemoveFromCart = () => {
    setIsActiveButton(false);
    localStorage.setItem(`catalogButtonColor_${product.tabletId}`, "#313237");
    if (onDeleteProduct) {
      onDeleteProduct(product.tabletId);
    }
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
