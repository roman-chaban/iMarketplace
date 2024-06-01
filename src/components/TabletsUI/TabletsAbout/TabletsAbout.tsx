import { FC, Fragment, useState } from 'react';
import styles from './TabletsAbout.module.scss';
import products from '../../../common/products/tablets.json';

export const TabletsAbout: FC = () => {
  const [selectedTabletIndex] = useState<number>(0);

  const selectedTablet = products[selectedTabletIndex];

  return (
    <article className={styles.phonesAbout}>
      <h2 className={styles.about__title}>About Tablets</h2>
      <div className={styles.about__titlesBlock}>
        <div className={styles.about__titles}>
          {selectedTablet.description.map((item, index) => (
            <Fragment key={index}>
              <h3 className={styles.first__title}>{item.title}</h3>
              <p className={styles.second__subTitle}>{item.text}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};
