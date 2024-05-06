import { FC } from 'react';
import styles from './hero.module.scss';
import { Slider } from '../Slider/Slider';
import { HeroSection, MainTitle } from './styled/hero';
import { Apple } from 'grommet-icons';

export const Hero: FC = (): JSX.Element => {
  return (
    <HeroSection>
      <div className={styles.hero__container}>
        {
          <MainTitle className={styles.mainHero__title}>
            Welcome to iMarketplace! It's great to have you here.
            <Apple size='large' style={{marginLeft: 20, position: 'relative', bottom: 5}} />
          </MainTitle>
        }
        <div className={styles.swiper__div}>
          <Slider slides={[]} />
        </div>
      </div>
    </HeroSection>
  );
};
