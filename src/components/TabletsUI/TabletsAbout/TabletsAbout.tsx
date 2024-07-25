import { FC } from "react";
import styles from "../../AccessoriesAbout/AccessoriesAboutStyles.module.scss";
import { Tablet } from "../../../interfaces/tablets";
import { TabletsTechSpecs } from "../TabletsTechSpecs/TabletsTechSpecs";

interface AccessorAboutProps {
  tablet: Tablet;
  selectMemory: string;
}

export const TabletsAbout: FC<AccessorAboutProps> = ({
  tablet,
  selectMemory,
}) => {
  return (
    <section className={styles.accessorAbout__container}>
      <article className={styles.accessorAbout}>
        <h2 className={styles.about__title}>About</h2>
        <div className={styles.about__titlesBlock}>
          <div className={styles.about__titles}>
            <h3 className={styles.first__title} style={{ paddingTop: "32px" }}>
              {tablet.description[0].title}
            </h3>
            <p className={styles.second__subTitle}>
              {tablet.description[0].text}
            </p>
          </div>
          <div className={styles.about__titles}>
            <h3 className={styles.first__title}>
              {tablet.description[1].title}
            </h3>
            <p className={styles.second__subTitle}>
              {tablet.description[1].text}
            </p>
          </div>
          <div className={styles.about__titles}>
            <h3 className={styles.first__title}>
              {tablet.description[2].title}
            </h3>
            <p className={styles.second__subTitle}>
              {tablet.description[2].text}
            </p>
          </div>
        </div>
      </article>
      <TabletsTechSpecs selectMemory={selectMemory} accessor={tablet} />
    </section>
  );
};
