import React, { memo, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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

    input {
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
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <UrlScreen
                  {...props}
                  setData={setData}
                  url={url}
                  setUrl={setUrl}
                />
              )}
            />
            <Route
              exact
              path="/download"
              render={props => (
                <DownloadScreen {...props} url={url} videos={videos} />
              )}
            />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
});

export default App;
