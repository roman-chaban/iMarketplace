import { FC, useEffect } from 'react';
import styles from './home.module.scss';
import { Main } from '../../components/Main/Main';

export const HomePage: FC = () => {
  useEffect(() => {
    document.title = 'iMarketplace | Home';
  }, []);

  return (
    <div className={styles.home__page}>
      <Main />
    </div>
  );
};
