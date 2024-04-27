import styled, { createGlobalStyle } from 'styled-components';

export const RootWrapper = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
}
`;

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
