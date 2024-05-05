import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const MainTitleStyled = styled.h1`
  color: #313237;
  font-size: clamp(34px, 6vw, 48px);
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.48px;
`;

interface IMainTitleProps {
  children: ReactNode;
  className?: string;
}

export const MainTitle: FC<IMainTitleProps> = ({ children, className }) => {
  return <MainTitleStyled className={className}>{children}</MainTitleStyled>;
};
