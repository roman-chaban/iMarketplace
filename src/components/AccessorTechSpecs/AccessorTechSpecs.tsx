import { FC } from "react";
import { Accessories } from "../../interfaces/accessories";
import styles from "./AccessorTechSpecsStyles.module.scss";

interface AccessorTechSpecsProps {
  accessor: Accessories;
  selectMemory: string;
}

export const AccessorTechSpecs: FC<AccessorTechSpecsProps> = ({
  accessor,
  selectMemory,
}) => {
  if (!accessor) {
    return <div>No product data available.</div>;
  }

  return (
    <article className={styles.techSpecs__block}>
      <h2 className={styles.techSpecs__title}>Tech specs:</h2>
      <div className={styles.techSpecs__characteristics}>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Title:</span>
          <span className={styles.techSpecs__itemSubTitle}>{accessor.name}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Price:</span>
          <span
            className={styles.techSpecs__itemSubTitle}
          >{`${accessor.priceRegular} $`}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Discount:</span>
          <span
            className={styles.techSpecs__itemSubTitle}
          >{`${accessor.priceDiscount} $`}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Memory:</span>
          <span className={styles.techSpecs__itemSubTitle}>{selectMemory}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Capacity:</span>
          <span
            className={styles.techSpecs__itemSubTitle}
          >{`${accessor.capacity} GB`}</span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Display Size:</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {accessor.screen}
          </span>
        </div>
        <div className={styles.techSpecs__item}>
          <span className={styles.techSpecs__itemTitle}>Category:</span>
          <span className={styles.techSpecs__itemSubTitle}>
            {accessor.category}
          </span>
        </div>
      </div>
    </article>
  );
};
