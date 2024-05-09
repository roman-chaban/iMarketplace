import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background: #9e9e9e;
`;

export const FooterStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
  }
`;
