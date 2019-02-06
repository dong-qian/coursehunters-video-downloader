import React, { memo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import "./App.css";

import { UrlScreen, DownloadScreen } from "./screens";

const theme = {
  bgColor: "#fafafa",
  mainColor: "#5b3cc4",
  secColor: "#f96854"
};

const App = memo(() => {
  const [lessonNames, setLessonNames] = useState([]);
  const [lessonUrls, setLessonUrls] = useState([]);
  return (
    <div
      css={`
        width: 100%;
        margin: auto;
        height: 100vh;
      `}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <UrlScreen
                  {...props}
                  setLessonNames={setLessonNames}
                  setLessonUrls={setLessonUrls}
                />
              )}
            />
            <Route
              path="/download"
              render={props => (
                <DownloadScreen
                  {...props}
                  lessonNames={lessonNames}
                  lessonUrls={lessonUrls}
                />
              )}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
});

export default App;
