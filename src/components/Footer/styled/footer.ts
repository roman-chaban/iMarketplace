import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background: #d2d3d2;
`;

export const FooterStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  }
`;
