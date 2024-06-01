import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';
import styles from './PhonesAboutStyles.module.scss';

export const PhonesAbout = () => {
  const { currentLanguage } = useLanguage();
  return (
    <article className={styles.phonesAbout}>
      <h2 className={styles.about__title}>
        {translations[currentLanguage].aboutItems.title}
      </h2>
      <div className={styles.about__titlesBlock}>
        <div className={styles.about__titles}>
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
    </article>
  );
};
