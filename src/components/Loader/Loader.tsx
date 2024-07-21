import { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import styles from './LoaderStyles.module.scss';
import { App } from '../../App';
import { BallTriangle } from 'react-loader-spinner';
import { MainTitle } from '../UI Components/MainTitle/MainTitle';
import { AppleAppStore } from 'grommet-icons';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../LanguageSwitcher/translation';

type TypeLoader = {
  children: ReactNode;
};

export const Loader: FC<TypeLoader> = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setLoader(false);
    const timeout = setTimeout(() => {
      setLoader(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [currentLanguage]);

  if (!loader) {
    return (
      <div className={styles.blocks__loader}>
        <MainTitle className={styles.block__title}>
          {translations[currentLanguage].welcomeTitle}
          <AppleAppStore size='large' className={styles.AppleAppStore} />
        </MainTitle>
        <BallTriangle
          visible={true}
          height='150'
          width='100'
          ariaLabel='comment-loading'
          wrapperStyle={{}}
          wrapperClass='comment-wrapper'
          color='#313131'
        />
      </div>
    );
  }
  return <App />;
};
