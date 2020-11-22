import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import { Route, Switch } from "react-router-dom";
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="mainbody">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact-me" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
