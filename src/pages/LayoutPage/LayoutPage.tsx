import { FC, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export const LayoutPage: FC = () => {
  const [isScrolledButton, setIsScrolledButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScrolledButtonShow = () => {
      if (window.scrollY > 0) {
        setIsScrolledButton(true);
      } else {
        setIsScrolledButton(false);
      }
    };
    window.addEventListener('scroll', handleScrolledButtonShow);
    return () => {
      removeEventListener('scroll', handleScrolledButtonShow);
    };
  }, []);

  const handleUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.layout__container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <button
        className={isScrolledButton ? `${styles.upButton}` : styles.upButton}
        onClick={handleUppPage}
        style={{ display: isScrolledButton ? 'block' : 'none' }}
      >
        <DoubleArrowIcon
          className={styles.arrow__top}
          style={{ transform: 'rotate(-90deg)', color: '#fff', fontSize: 25 }}
        />
      </button>
    </div>
  );
};
