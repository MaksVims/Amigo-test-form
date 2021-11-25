import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./themes";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

