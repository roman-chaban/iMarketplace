import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const MainTitleStyled = styled.h1`
  color: #313237;
  font-size: 48px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.48px;
  @media (max-width: 850px) {
    font-size: 34px;
  }
`;

interface IMainTitleProps {
  children: ReactNode;
  className?: string;
}

export const MainTitle: FC<IMainTitleProps> = ({ children, className }) => {
  return <MainTitleStyled className={className}>{children}</MainTitleStyled>;
};
