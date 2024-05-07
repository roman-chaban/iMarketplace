import { FC } from 'react';
import styles from './modelsCatalog.module.scss';
import products from '../../common/products/products.json';
import { Phones } from '../ProductsUI/Phones/Phones';
import { Phone } from '../../interfaces/phones';
import { ModelsCatalogSection } from './styled/modelsCatalog';

interface IModelsCatalog {
  modelsTitle: string;
}

export const ModelsCatalog: FC<IModelsCatalog> = ({
  modelsTitle,
}): JSX.Element => {
  return (
    <ModelsCatalogSection>
      <div className={styles.modelsCatalog__block}>
        <h2 className={styles.catalog__title}>{modelsTitle}</h2>
        <h3
          className={`${styles.catalog__title} ${styles.zoomTitle}`}
          style={{ fontSize: '1.4rem' }}
        >
          Swipe to view the catalog
        </h3>
      </div>
      <div className={styles.catalog__cards}>
        <Phones products={products as unknown as Phone[]} />
      </div>
    </ModelsCatalogSection>
  );
};
