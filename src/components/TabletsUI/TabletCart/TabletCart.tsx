import { FC, useState } from "react";
import styles from "./TabletCartStyles.module.scss";
import { useAppDispatch } from "../../../hooks/reduxHooks/useAppDispatch";
import { deleteBasketTablets } from "../../../redux/slices/cartSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useCount } from "../../../hooks/useCount";
import { translations } from "../../LanguageSwitcher/translation";
import { useLanguage } from "../../../hooks/useLanguage";
import { Tablet } from "../../../interfaces/tablets";

interface FavoriteCardProps {
  product: Tablet;
}

export const TabletCart: FC<FavoriteCardProps> = ({
  product,
}) => {
  const { currentLanguage } = useLanguage();
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);
  const [productItemCounter, setProductCounter] = useState<number>(0);

  const price =
    typeof product.priceRegular === "string"
      ? parseFloat(product.priceRegular)
      : product.priceRegular;

  const { productPrice, onAddProduct, onDeleteProduct } = useCount(price);

  const handleDeleteGoods = () => {
    setIsRemoving(true);
    dispatch(deleteBasketTablets(product.tabletId));
  };

  const handleTransitionEnd = () => {
    setIsRemoving(false);
  };

  return (
    <div
      className={`${styles.favorite__cardBlock} ${
        isRemoving ? styles.removing : ""
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.favorite__card}>
        <button
          className={styles.favorite__cardDelete}
          onClick={handleDeleteGoods}
        >
          <HighlightOffIcon fontSize="large" />
        </button>
        <img
          src={product.images[0]}
          alt="tablet banner"
          className={styles.favorite__cardPicture}
        />
        <div>
          <h3 className={styles.favorite__cardTitle}>{product.name}</h3>
        </div>
        <span className={styles.favorite__cardPrice}>
          {productPrice} {"$"}
        </span>
        <div className={styles.counterPhone__block}>
          <button
            className={styles.plus}
            onClick={() => {
              onAddProduct();
              setProductCounter((prevCount) => prevCount + 1);
            }}
          >
            <AddCircleIcon style={{ color: "#65C466" }} fontSize="large" />
          </button>
          <button
            className={styles.minus}
            disabled={productItemCounter < 1}
            style={{
              opacity: productItemCounter < 1 ? "0.5" : "1",
              cursor: productItemCounter > 0 ? "pointer" : "not-allowed",
            }}
            onClick={() => {
              onDeleteProduct();
              setProductCounter((prevCount) => prevCount - 1);
            }}
          >
            <RemoveCircleIcon
              style={{ color: "rgba(199, 53, 8, 0.8352941176)" }}
              fontSize="large"
            />
          </button>
        </div>
        <h6 className={styles.productItems__title}>
          {translations[currentLanguage].readyTitle} {productItemCounter}
        </h6>
      </div>
    </div>
  );
};
