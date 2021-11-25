import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {ThemeProvider} from "styled-components";

const theme = {
  color: {
    primary: '#0880AE',
    text: {
      black: '#2C2738',
      error: '#FF7171',
      label: '#756F86',
      placeholder: '#7C9CBF',
      light: '#EBF4F8',
      grey: '#B1B5BF'
    },
    bg: {
      hover_bg: '#EBF4F8',
      disabled: '#DBE2EA',
      light: '#EBF4F8',
    },
    border: {
      input: '#DBE2EA'
    }
  },
  zIndex: {
    dropdown: 50,
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

