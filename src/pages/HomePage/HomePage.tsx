import { FC, useEffect } from 'react';
import styles from './Home.module.scss';
import { Main } from '../../components/Main/Main';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../components/LanguageSwitcher/translation';

export const HomePage: FC = () => {
  const { currentLanguage } = useLanguage();
  useEffect(() => {
    document.title = `iMarketplace | ${translations[currentLanguage].homeLabel}`;
  }, [currentLanguage]);

  return (
    <div className={styles.home__page}>
      <Main />
    </div>
  );
};
