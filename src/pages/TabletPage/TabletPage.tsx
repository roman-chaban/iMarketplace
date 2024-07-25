import { FC, useState, useEffect } from "react";
import styles from "../PhonesPage/PhonesPageStyles.module.scss";
import { ProductItem } from "./ProductItem";
import products from "../../common/products/tablets.json";
import { Tablet } from "../../interfaces/tablets";
import { useParams } from "react-router-dom";
import { TabletsCatalog } from "../../components/TabletsUI/Tablets/TabletsCatalog";

export const TabletPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Tablet | undefined>(
    undefined
  );

  const handleAccessorProductTitle = (title: string) => {
    const formattedTitle = title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return formattedTitle;
  };

  useEffect(() => {
    const titleProductName = id || "";
    document.title = `Tablet | ${handleAccessorProductTitle(titleProductName)}`;
  }, [id]);

  useEffect(() => {
    const tablet = products.find((tablet) => tablet.id === id);
    setSelectedProduct(tablet as Tablet | undefined);
  }, [id]);

  return (
    <div className={`${styles.phone__layout} ${styles.tablet__layout}`}>
      {selectedProduct ? <ProductItem tablet={selectedProduct} /> : <></>}
      <TabletsCatalog modelsTitle="I'Pads" />
    </div>
  );
};

export default TabletPage;
