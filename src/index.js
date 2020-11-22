import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { PortfolioProvider } from './context/PortfolioContext';
import { AboutProvider } from './context/AboutContext';


ReactDOM.render(
  <AboutProvider>
    <PortfolioProvider>
      <Router>
        <App />
      </Router>
    </PortfolioProvider>
  </AboutProvider>,
  document.getElementById('root')
);
