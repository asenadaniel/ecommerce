import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { app } from './firebase.config';
import Auth0ProviderWithHistory from './auth0Provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0ProviderWithHistory>
  <Provider store={store} app={app}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </Auth0ProviderWithHistory>
);

