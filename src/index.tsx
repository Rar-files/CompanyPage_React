import React from 'react';
import ReactDOM from 'react-dom';
import {Reset} from 'styled-reset';
import {Provider} from "react-redux";

import store from './app/store'
import App from './App';

ReactDOM.render(
  <>
    <React.StrictMode>
      <Reset/>
    </React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </>,
  document.getElementById('root')
);
