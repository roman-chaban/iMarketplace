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
      <ModelsCatalog modelsTitle='Brand New Models' />
      <ShopCategory title='Shop by category' />
      <HotPrices pricesTitle='Hot prices' />
    </MainContainer>
  );
};

