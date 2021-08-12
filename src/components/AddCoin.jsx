import React, { useContext, useEffect, useState } from "react";
import coinData from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
  const { watchList, addCoin } = useContext(WatchListContext);
  const [coins, setCoins] = useState([]);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await coinData.get("/coins/markets/", {
        params: {
          vs_currency: "mxn",
        },
      });
      setCoins(data);
    };
    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const handleClick = (coin) => {
    setIsActive(false);
    addCoin(coin);
  };
  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div
        className={
          isActive
            ? "dropdown-menu dataResult show"
            : "dataResult dropdown-menu"
        }
      >
        {coins.map((el) => {
          return (
            <a
              key={el.id}
              onClick={() => handleClick(el.id)}
              href="#"
              className="dropdown-item"
            >
              {el.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
