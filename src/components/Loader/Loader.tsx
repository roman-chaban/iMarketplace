import { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import styles from './loader.module.scss';
import { App } from '../../App';
import { BallTriangle } from 'react-loader-spinner';
import { MainTitle } from '../UI Components/MainTitle/MainTitle';
import { AppleAppStore } from 'grommet-icons';

type TypeLoader = {
  children: ReactNode;
};

export const Loader: FC<TypeLoader> = () => {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const changeLoading = () => {
      const loading = setTimeout(() => {
        setLoader(true);
      }, 1800);
      return loading;
    };
    changeLoading();
  }, []);

  if (!loader) {
    return (
      <div className={styles.blocks__loader}>
        <MainTitle className={styles.block__title}>
          Welcome to iMarketplace!
          <AppleAppStore size='large' />
        </MainTitle>
        <BallTriangle
          visible={true}
          height='100'
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
