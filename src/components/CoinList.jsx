import React, { useEffect, useState } from "react";
import coinData from "../apis/coinGecko";
const CoinList = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await coinData.get("/coins/markets/", {
        params: {
          vs_currency: "mxn",
          ids: "bitcoin,ethereum",
        },
      });
      console.log(data);
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default CoinList;
