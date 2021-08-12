import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import { WatchListContextProvider } from "./context/watchListContext";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route exact path="/coins/:id" component={CoinDetailPage} />
        </Router>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
