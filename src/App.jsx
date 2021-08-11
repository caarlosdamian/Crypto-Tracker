import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
const App = () => {
  return (
    <div>
      <Router>
          <Route exact path='/' component={CoinSummaryPage}/>
      </Router>
    </div>
  );
};

export default App;
