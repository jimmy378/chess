import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/colours.css';
import App from './views';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConfigureStore, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor(store)}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
