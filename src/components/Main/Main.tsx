import { FC } from 'react';
import styled from 'styled-components';
import { Hero } from '../Hero/Hero';
import { HotPrices } from '../HotPrices/HotPrices';
import { ModelsCatalog } from '../ModelsCatalog/ModelsCatalog';
import { ShopCategory } from '../ShopCategory/ShopCategory';

const MainContainer = styled.div`
  width: 100%;
`;

export const Main: FC = () => {
  return (
    <MainContainer>
      <Hero />
      <ModelsCatalog />
      <ShopCategory />
      <HotPrices />
    </MainContainer>
  );
};
