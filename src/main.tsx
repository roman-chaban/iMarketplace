import * as ReactDOMClient from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { Provider } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { persistor, store } from './redux/store/store';
import { AuthProvider } from './common/hoc/AuthProvider';
import './assets/styles/main.scss';
import { RootContainer, RootWrapper } from './styled/main';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <RootWrapper />
          <Loader>
            <App />
            <RootContainer />
          </Loader>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
