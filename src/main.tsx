import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { store } from './redux/store/store';
import { AuthProvider } from './common/hoc/AuthProvider';
import './assets/styles/main.scss';
import { AppContainer, RootWrapper } from './styled/main';

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
