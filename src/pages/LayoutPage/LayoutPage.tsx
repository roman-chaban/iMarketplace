import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

export const LayoutPage: FC = () => {
  return (
    <div className={styles.layout__container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
