import React from "react";
import "./App.css";
import { ThemeProvider } from "theme-ui";
import theme from "@rebass/preset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navpage from "./Components/NavPage";
import Raid from "./Components/Raid";
import Result from "./Components/Result";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navpage />
          </Route>
          <Route path="/raid">
            <Raid />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
