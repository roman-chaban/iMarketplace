import { FC, useEffect, useState } from "react";
import styles from "./AccessorStyles.module.scss";
import accessoriesData from "../../common/products/accessories.json";
import { useParams } from "react-router-dom";
import { AccessorProduct } from "../../components/AccessorProduct/AccessorProduct";
import { AccessoriesCatalog } from "../../components/AccessoriesCatalog/AccessoriesCatalog";

export const AccessorPage: FC = () => {
  const [accessorProduct, setAccessorProduct] = useState(accessoriesData[0]);
  const { id } = useParams<{ id: string }>();

  const handleAccessorProductTitle = (title: string) => {
    const formattedTitle = title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return formattedTitle;
  };

  useEffect(() => {
    const titleProductName = id || "";
    document.title = `Accessor | ${handleAccessorProductTitle(
      titleProductName
    )}`;
    const product = accessoriesData.find((product) => product.id === id);
    if (product) {
      setAccessorProduct(product);
    }
  }, [id]);

  return (
    <div className={styles.accessor__layout}>
      <AccessorProduct accessor={accessorProduct} />
      <AccessoriesCatalog accessories={accessoriesData} />
    </div>
  );
};
