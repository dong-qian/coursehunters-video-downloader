import React, { memo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";
import reset from "styled-reset";

import { UrlScreen, DownloadScreen } from "./screens";
import theme from "./config/theme";

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
    font-family: Raleway, Roboto, OpenSans, arial;
    transition: all 0.2s ease;

    a {
      color: #ddd;
      text-decoration: none;
    }
  }
`;

const App = memo(() => {
  const [url, setUrl] = useState("");
  const [lessonNames, setLessonNames] = useState([]);
  const [lessonUrls, setLessonUrls] = useState([]);

  const setData = data => {
    setLessonNames(data.lessonNames);
    setLessonUrls(data.lessonUrls);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle whiteColor />
        <Router>
          <Switch>
            <Route
              exact
              path="/url"
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
              path="/"
              render={props => (
                <DownloadScreen
                  {...props}
                  url={url}
                  lessonNames={lessonNames}
                  lessonUrls={lessonUrls}
                />
              )}
            />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
});

export default App;
