import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  margin-bottom: 80px;
  @media (max-width: 550px) {
    padding: 0px;
  }
`;

export const MainTitle = styled.h1`
  padding: 10px 24px;
  color: #313237;
  font-size: 48px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.48px;
  @media (max-width: 850px) {
    font-size: 34px;
  }
`;