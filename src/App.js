import React, { memo, useState } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

import { UrlScreen, DownloadScreen } from './screens';
import theme from './config/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
    color: #ddd;
    margin: 0;
    padding: 0;
    text-transform: none;
    text-decoration: none;
    font-family: Roboto Mono, Raleway, OpenSans, arial;
    
    a {
      color: #ddd;
      text-decoration: none;
    }

    button {
      -webkit-app-region: no-drag;
    }
  }
`;

const App = memo(() => {
  const [url, setUrl] = useState('');
  const [videos, setVideos] = useState([]);

  const setData = data => {
    setVideos(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle whiteColor />
        <Router>
          <UrlScreen path="/" setData={setData} url={url} setUrl={setUrl} />
          <DownloadScreen path="/download" url={url} videos={videos} />
        </Router>
      </>
    </ThemeProvider>
  );
});

export default App;
