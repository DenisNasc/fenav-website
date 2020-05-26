import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {ThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';

const fenavWebsiteTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={fenavWebsiteTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
