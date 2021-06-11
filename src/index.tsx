import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './utils/themes';
import { CSSReset } from './styles';
import { IconContext } from 'react-icons';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <IconContext.Provider value={{ color: '#fff' }}>
        <ThemeProvider theme={DefaultTheme}>
          <CSSReset />
          <App />
        </ThemeProvider>
      </IconContext.Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
