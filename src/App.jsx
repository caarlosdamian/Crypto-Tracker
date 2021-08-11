import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import './App.css'
const App = () => {
  return (
    <div>
      <Router>
          <Header/>
          <Route exact path='/' component={CoinSummaryPage}/>
      </Router>
    </div>
  );
};

export default App;
