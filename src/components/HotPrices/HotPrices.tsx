import { FC } from 'react';
import styled from 'styled-components';
import cl from './hotPrices.module.scss';
import products from '../../common/products/products.json';
import { ICatalogItemProps } from '../../interfaces/catalog-item';
import { Phones } from '../Phones/Phones';
import { Phone } from '../../interfaces/phones';

const ModelsCatalogSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 30px;
  padding-right: 0px;
`;

const HotPrices: FC<ICatalogItemProps> = ({
  pricesTitle,
}: ICatalogItemProps) => {
  return (
    <ModelsCatalogSection>
      <div className={cl.modelsCatalog__block}>
        <h2 className={cl.catalog__title}>{pricesTitle}</h2>
        <h3
          className={`${cl.catalog__title} ${cl.zoomTitle}`}
          style={{ fontSize: '1.4rem' }}
        >
          Swipe to view the catalog
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'hidden',
        }}
      >
        <Phones products={products as unknown as Phone[]} />
      </div>
    </ModelsCatalogSection>
  );
};

export { HotPrices };
