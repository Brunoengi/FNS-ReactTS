import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from 'pages/main'
import '@fontsource/roboto';
import LightTheme from 'themes/activeTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LightTheme>
      <Main/>
    </LightTheme>
  </React.StrictMode>
);
