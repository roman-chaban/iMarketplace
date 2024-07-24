import { FC } from "react";
import Button from "@mui/material/Button";
import styles from "../../../pages/FavoritesPage/FavoritePageStyles.module.scss";
import { FavoriteBorder } from "@mui/icons-material";
import { Accessories } from "../../../interfaces/accessories";

interface FavoriteButtonProps {
  product: Accessories;
  inFavorites: boolean;
  onClick: (product: Accessories) => void;
  onDeleteProduct: (productId: string) => void;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  product,
  inFavorites,
  onClick,
  onDeleteProduct,
}) => {
  const handleAddToFavorites = () => {
    onClick(product);
  };

  const handleRemoveFromFavorites = () => {
    onDeleteProduct(product.id);
  };

  const handleClick = inFavorites
    ? handleRemoveFromFavorites
    : handleAddToFavorites;

  return (
    <Button
      title="Add to favorites"
      onClick={handleClick}
      className={styles.favorite__button}
      style={{ backgroundColor: inFavorites ? "#FF6F61" : "" }}
    >
      <FavoriteBorder
        style={{ fontSize: 20, color: inFavorites ? "#fff" : "" }}
        className={styles.favorite__icon}
      />
    </Button>
  );
};
