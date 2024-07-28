import { FC } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';
import styles from './PhonesAboutStyles.module.scss';
import { Phone } from '../../../interfaces/phones';
import { PhonesTechSpecs } from '../PhonesTechSpecs/PhonesTechSpecs';

interface PhonesAboutProps {
  phone: Phone;
  selectMemory: string;
}

export const PhonesAbout: FC<PhonesAboutProps> = ({ phone, selectMemory }) => {
  const { currentLanguage } = useLanguage();
  return (
    <article className={styles.phonesAbout}>
      <div className={styles.about__titlesBlock}>
        <div className={styles.about__titles}>
      <h2 className={styles.about__title}>
        {translations[currentLanguage].aboutItems.title}
      </h2>
          <h3 className={styles.first__title} style={{ paddingTop: '32px' }}>
            {translations[currentLanguage].aboutItems.subTitle}
          </h3>
          <p className={styles.second__subTitle}>
            {translations[currentLanguage].aboutItems.subSubTitle}
          </p>
        </div>
        <div className={styles.about__titles}>
          <h3 className={styles.first__title}>
            {translations[currentLanguage].cameraItems.cameraTitle}
          </h3>
          <p className={styles.second__subTitle}>
            {translations[currentLanguage].cameraItems.cameraSubTitle}
          </p>
        </div>
        <div className={styles.about__titles}>
          <h3 className={styles.first__title}>
            {translations[currentLanguage].zoomItems.zoomTitle}
          </h3>
          <p className={styles.second__subTitle}>
            {translations[currentLanguage].zoomItems.zoomSubTitle}
          </p>
        </div>
      </div>
      <PhonesTechSpecs selectMemory={selectMemory} product={phone} />
    </article>
  );
};
