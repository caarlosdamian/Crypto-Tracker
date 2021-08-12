import React, { useContext, useEffect, useState } from "react";
import coinData from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { watchList,addCoin } = useContext(WatchListContext);
  const [availableCoins, setAvailableCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await coinData.get("/coins/markets/", {
        params: {
          vs_currency: "mxn",
        },
      });
      setAvailableCoins(data);
    };
    if (watchList.length > 0) {
      fetchData();
    } else setAvailableCoins([]);
  }, [watchList]);

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
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
      <div className={isActive ? "dropdown-menu dataResult show" : "dropdown-menu dataResult"}>
        {availableCoins.map((el) => {
          return (
            <a
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
