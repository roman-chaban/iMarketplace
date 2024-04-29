import { FC } from 'react';
import styles from './hero.module.scss';
import { Slider } from '../Slider/Slider';
import AppleLogo from '../../favicon/favicon.png';
import { HeroSection, MainTitle } from './styled/hero';

export const Hero: FC = (): JSX.Element => {
  return (
    <HeroSection>
      <div className={styles.hero__container}>
        {
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
        }
        <div className={styles.swiper__div}>
          <Slider slides={[]} />
        </div>
      </div>
    </HeroSection>
  );
};
