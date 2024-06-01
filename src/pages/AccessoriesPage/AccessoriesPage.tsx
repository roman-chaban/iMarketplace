import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './Accessories.module.scss';
import { useEffect } from 'react';
import { translations } from '../../components/LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';

export const AccessoriesPage: FC = () => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].accessoriesLabel}`;
  }, [currentLanguage]);
  return (
    <div className={styles.catalog__container}>
      <CatalogPage
        smallTitle={translations[currentLanguage].pagesTitle.accessories}
        models={`0 ${translations[currentLanguage].modelsTitle}`}
        mainTitle={translations[currentLanguage].pagesTitle.accessories}
      />
      <h3 className={styles.coming__title}>
        {translations[currentLanguage].accessoriesComing}
      </h3>
    </div>
  );
};
