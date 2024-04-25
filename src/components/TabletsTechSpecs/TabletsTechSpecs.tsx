import { FC } from 'react';
import cl from './tabletsTechSpecs.module.scss';
import { Tablet } from '../../interfaces/tablets';

interface TabletsTechSpecsProps {
  product: Tablet;
}

export const TabletsTechSpecs: FC<TabletsTechSpecsProps> = ({ product }) => {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <article className={cl.techSpecs__block}>
      <h2 className={cl.techSpecs__title}>Tech specs</h2>
      <div className={cl.techSpecs__characteristics}>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Title</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.name}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Price</span>
          <span className={cl.techSpecs__itemSubTitle}>
            {`${product.priceRegular} $`}
          </span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Discount</span>
          <span className={cl.techSpecs__itemSubTitle}>
            {`${product.priceDiscount} $` ?? 'N/A'}
          </span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Capacity</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.capacity}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Ram</span>
          <span className={cl.techSpecs__itemSubTitle}>
            {product.ram ?? 'N/A'}
          </span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Display Size</span>
          <span className={cl.techSpecs__itemSubTitle}>
            {product.screen ?? 'N/A'}
          </span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Category</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.category}</span>
        </div>
      </div>
    </article>
  );
};
