import { FC } from 'react';
import styles from './hero.module.scss';
import { Slider } from '../Slider/Slider';
import { HeroSection, MainTitle } from './styled/hero';
import { Apple } from 'grommet-icons';
import { translations } from '../LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';

export const Hero: FC = () => {
  const { currentLanguage } = useLanguage();
  return (
    <HeroSection>
      <div className={styles.hero__container}>
        {
          <MainTitle className={styles.mainHero__title}>
            {translations[currentLanguage].catalogTitle}
            <Apple
              id={styles.hero__logo}
              size='large'
              style={{ marginLeft: 20, position: 'relative', bottom: 5 }}
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
