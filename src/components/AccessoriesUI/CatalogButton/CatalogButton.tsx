import { FC, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "../../UI Components/CatalogButton/CatalogButtonStyles.module.scss";
import { translations } from "../../LanguageSwitcher/translation";
import { useLanguage } from "../../../hooks/useLanguage";
import { Accessories } from "../../../interfaces/accessories";

interface CatalogProps {
  product: Accessories;
  inCart: boolean;
  onClick: (product: Accessories) => void;
  onDeleteProduct: (productId: string) => void;
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
    localStorage.setItem(`catalogButtonColor_${product.id}`, "#66CDAA");
    onClick(product);
  };

  const handleRemoveFromCart = () => {
    setIsActiveButton(false);
    localStorage.setItem(`catalogButtonColor_${product.id}`, "#313237");
    onDeleteProduct(product.id);
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
