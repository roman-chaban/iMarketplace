import { FC, Fragment } from "react";
import styles from "./TabletsAboutStyles.module.scss";
import { useLanguage } from "../../../hooks/useLanguage";
import { translations } from "../../LanguageSwitcher/translation";
import { TabletInfo } from "./about";

export const TabletsAbout: FC = () => {
  const { currentLanguage } = useLanguage();

  const tabletsData: TabletInfo[] = translations[currentLanguage].aboutTablets;

  return (
    <article className={styles.phonesAbout}>
      <h2 className={styles.about__title}> {translations[currentLanguage].aboutTabletsTitle}</h2>
      <div className={styles.about__titlesBlock}>
        <div className={styles.about__titles}>
          {tabletsData.map((item, index) => (
            <Fragment key={index}>
              <h3 className={styles.first__title}>{item.title}</h3>
              <p className={styles.second__subTitle}>
                {item.text.map((paragraph, idx) => (
                  <Fragment key={idx}>{paragraph}</Fragment>
                ))}
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};
