import React from "react";
import { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple","dogecoin","cardano","polkadot","litecoin"]);

  const deleteCoin = (coin) =>{
    setWatchList(watchList.filter(el =>{
        return el!==coin
    }))
  }
  return (
    <WatchListContext.Provider value={{ watchList ,deleteCoin}}>
      {props.children}
    </WatchListContext.Provider>
  );
};
