import { FC } from 'react';
import styled from 'styled-components';
import styles from '../../ModelsCatalog/ModelsCatalogStyles.module.scss';
import Tablets from './Tablets';
import tablets from '../../../common/products/tablets.json';
import { Tablet } from '../../../interfaces/tablets';

const ModelsCatalogSection = styled.section`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

interface IModelsCatalog {
  modelsTitle: string;
}

const TabletsCatalog: FC<IModelsCatalog> = ({ modelsTitle }): JSX.Element => {
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
        <Tablets products={tablets as unknown as Tablet[]} />
      </div>
    </ModelsCatalogSection>
  );
};

export { TabletsCatalog };
