import { FC } from 'react';
import styles from './modelsCatalog.module.scss';
import products from '../../common/products/products.json';
import { Phones } from '../ProductsUI/Phones/Phones';
import { Phone } from '../../interfaces/phones';
import { ModelsCatalogSection } from './styled/modelsCatalog';
import { useLanguage } from '../LanguagesContext/LanguagesContext';
import { translations } from '../LanguageSwitcher/translation';

export const ModelsCatalog: FC = () => {
  const { currentLanguage } = useLanguage();
  return (
    <ModelsCatalogSection>
      <div className={styles.modelsCatalog__block}>
        <h2 className={styles.catalog__title}>
          {translations[currentLanguage].brandModelsTitle}
        </h2>
        <h3
          className={`${styles.catalog__title} ${styles.zoomTitle}`}
          style={{ fontSize: '1.4rem' }}
        >
          {translations[currentLanguage].brandModelsSubTitle}
        </h3>
      </div>
      <div className={styles.catalog__cards}>
        <Phones products={products as unknown as Phone[]} />
      </div>
    </ModelsCatalogSection>
  );
};
