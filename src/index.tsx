import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage/MainPage';
import {Reset} from 'styled-reset';

ReactDOM.render(
  <>
    <React.StrictMode>
      <Reset/>
    </React.StrictMode>
    <MainPage/>
  </>,
  document.getElementById('root')
);
