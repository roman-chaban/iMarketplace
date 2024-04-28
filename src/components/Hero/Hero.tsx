import { FC, useEffect, useState } from 'react';
import styles from './hero.module.scss';
import { Slider } from '../Slider/Slider';
import AppleLogo from '../../favicon/favicon.png';
import { HeroSection, MainTitle } from './styled/hero';

type IsShowTitle = boolean;

export const Hero: FC = (): JSX.Element => {
  const [isShowTitle, setIsShowTitle] = useState<IsShowTitle>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowTitle(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSection>
      <div className={styles.hero__container}>
        {isShowTitle && (
          <MainTitle className={styles.mainHero__title}>
            Welcome to iMarketplace! It's great to have you here.
            <img
              className={styles.appleLogo}
              src={AppleLogo}
              alt='Store Apple Logo'
              width={48}
              style={{ marginLeft: '40px' }}
            />
          </MainTitle>
        )}
        <div className={styles.swiper__div}>
          <Slider slides={[]} />
        </div>
      </div>
    </HeroSection>
  );
};
