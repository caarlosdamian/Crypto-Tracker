import React, { useContext, useEffect, useState } from "react";
import coinData from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";
const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { watchList,deleteCoin } = useContext(WatchListContext);
  console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await coinData.get("/coins/markets/", {
        params: {
          vs_currency: "mxn",
          ids: watchList.join(","),
        },
      });
      setCoins(data);
      setIsLoading(false);
    };
    if(watchList.length>0){
        fetchData();
    }else(
        setCoins([])
    )
  }, [watchList]);
  const renderCoins = () =>{
      if(isLoading){
          return <div>Loading...</div>
      }
      return (
          <ul className="coinlist list-group mt-2">
              {coins.map(coin=>{
                return   <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
              })}
          </ul>
      )
  }
  return <div>{renderCoins()}</div>;
};

export default CoinList;
