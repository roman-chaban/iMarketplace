import React, { FC } from 'react';
import cl from './phonesTechSpecs.module.scss';
import { Products } from '../../redux/interfaces/products';

interface PhonesTechSpecsProps {
  product: Products;
}

const PhonesTechSpecs: FC<PhonesTechSpecsProps> = ({ product }) => {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <article className={cl.techSpecs__block}>
      <h2 className={cl.techSpecs__title}>Tech specs</h2>
      <div className={cl.techSpecs__characteristics}>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Title</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.title}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Price</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.price}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Discount</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.discount}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Memory</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.memory}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Capacity</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.capacity}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Display Size</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.displaySize}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Category</span>
          <span className={cl.techSpecs__itemSubTitle}>{product.category}</span>
        </div>
      </div>
    </article>
  );
};

export { PhonesTechSpecs };
