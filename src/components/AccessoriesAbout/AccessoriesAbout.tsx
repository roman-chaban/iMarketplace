import { FC } from "react";
import styles from "./AccessoriesAboutStyles.module.scss";
import { Accessories } from "../../interfaces/accessories";
import { AccessorTechSpecs } from "../AccessorTechSpecs/AccessorTechSpecs";

interface AccessorAboutProps {
  accessor: Accessories;
  selectMemory: string;
}

export const AccessoriesAbout: FC<AccessorAboutProps> = ({ accessor, selectMemory }) => {
  return (
    <section className={styles.accessorAbout__container}>
      <article className={styles.accessorAbout}>
        <h2 className={styles.about__title}>About</h2>
        <div className={styles.about__titlesBlock}>
          <div className={styles.about__titles}>
            <h3 className={styles.first__title} style={{ paddingTop: "32px" }}>
              {accessor.description[0].title}
            </h3>
            <p className={styles.second__subTitle}>
              {accessor.description[0].text}
            </p>
          </div>
          <div className={styles.about__titles}>
            <h3 className={styles.first__title}>
              {accessor.description[1].title}
            </h3>
            <p className={styles.second__subTitle}>
              {accessor.description[1].text}
            </p>
          </div>
          <div className={styles.about__titles}>
            <h3 className={styles.first__title}>
              {accessor.description[2].title}
            </h3>
            <p className={styles.second__subTitle}>
              {accessor.description[2].text}
            </p>
          </div>
        </div>
      </article>
      <AccessorTechSpecs selectMemory={selectMemory} accessor={accessor} />
    </section>
  );
};
