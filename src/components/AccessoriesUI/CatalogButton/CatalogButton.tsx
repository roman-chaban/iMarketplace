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
  width?: string;
}

export const CatalogButton: FC<CatalogProps> = ({
  product,
  inCart,
  onClick,
  onDeleteProduct,
  width,
}) => {
  const { currentLanguage } = useLanguage();
  const [isActiveButton, setIsActiveButton] = useState<boolean>(inCart);

  useEffect(() => {
    setIsActiveButton(inCart);
  }, [inCart]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isActiveButton) {
      onDeleteProduct(product.id);
    } else {
      onClick(product);
    }
    setIsActiveButton(!isActiveButton);
  };

  return (
    <Button
      onClick={handleClick}
      className={styles.catalog__buttonItem}
      style={{
        backgroundColor: isActiveButton ? "#66CDAA" : "#313237",
        width: width || "auto",
      }}
    >
      {isActiveButton
        ? translations[currentLanguage].cartState.addedCart
        : translations[currentLanguage].cartState.addCart}
    </Button>
  );
};
