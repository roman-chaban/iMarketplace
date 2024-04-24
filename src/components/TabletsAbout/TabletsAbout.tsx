import { FC, Fragment, useState } from 'react';
import cl from './tabletsAbout.module.scss';
import products from '../../common/products/tablets.json';

export const TabletsAbout: FC = () => {
  const [selectedTabletIndex] = useState<number>(0);

  const selectedTablet = products[selectedTabletIndex];

  return (
    <article className={cl.phonesAbout}>
      <h2 className={cl.about__title}>About Tablets</h2>
      <div className={cl.about__titlesBlock}>
        <div className={cl.about__titles}>
          {selectedTablet.description.map((item, index) => (
            <Fragment key={index}>
              <h3 className={cl.first__title}>{item.title}</h3>
              <p className={cl.second__subTitle}>{item.text}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};
