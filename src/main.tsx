/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { styled, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { store } from './redux/store/store';
import { AuthProvider } from './common/hoc/AuthProvider';

const RootWrapper = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
}
`;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RootWrapper />
        <Loader>
          <App />
          <AppContainer />
        </Loader>
      </AuthProvider>
    </Provider>
  </StrictMode>
);
