import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import styles from './accessories.module.scss';
// import { CustomSelect } from '../../components/Select/Select';
import { useEffect } from 'react';
import { useLanguage } from '../../components/LanguagesContext/LanguagesContext';
import { translations } from '../../components/LanguageSwitcher/translation';

export const AccessoriesPage: FC = () => {
  const { currentLanguage } = useLanguage();
  useEffect(() => {
    document.title = 'iMarketplace | Accessories';
  }, []);
  return (
    <div className={styles.catalog__container}>
      <CatalogPage
        smallTitle={translations[currentLanguage].pagesTitle.accessories}
        models={`0 ${translations[currentLanguage].modelsTitle}`}
        mainTitle={translations[currentLanguage].pagesTitle.accessories}
      />
      <div className={styles.page__select}>{/* <CustomSelect /> */}</div>
      <h3 className={styles.coming__title}>
        {translations[currentLanguage].accessoriesComing}
      </h3>
    </div>
  );
};
