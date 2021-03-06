import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { throttle } from 'lodash';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

import configureStore, { history, loadState, saveState } from './state';

const store = configureStore(loadState());
// const store = configureStore({});
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App history={history} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
