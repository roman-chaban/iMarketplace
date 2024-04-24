import { FC } from 'react';
import cl from './hero.module.scss';
import { styled } from 'styled-components';
import { Slider } from '../Slider/Slider';
import AppleLogo from '../../favicon/favicon.png';

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  margin-bottom: 80px;
  @media (max-width: 550px) {
    padding: 0px;
  }
`;

const MainTitle = styled.h1`
  padding: 10px 0;
  color: #313237;
  font-size: 48px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.48px;
  @media (max-width: 850px) {
    font-size: 34px;
  };
`;

const Hero: FC = (): JSX.Element => {
  return (
    <HeroSection>
      <div className={cl.hero__container}>
        <MainTitle className={cl.mainHero__title}>
          Welcome to iMarketplace!
          <img
            className={cl.appleLogo}
            src={AppleLogo}
            alt='Store Apple Logo'
            width={48}
            style={{ marginLeft: '40px' }}
          />
        </MainTitle>
        <div className={cl.swiper__div}>
          <Slider slides={[]} />
        </div>
      </div>
    </HeroSection>
  );
};

export { Hero };
