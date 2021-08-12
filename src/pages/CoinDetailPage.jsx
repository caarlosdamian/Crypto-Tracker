import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CoinData from "../components/CoinData";
import HistoryChart from "../components/HistoryChart";
import coinData from "../apis/coinGecko";
const CoinDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        coinData.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "mxn",
            days: "1",
          },
        }),
        coinData.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "mxn",
            days: "7",
          },
        }),
        coinData.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "mxn",
            days: "365",
          },
        }),
        coinData.get("/coins/markets/", {
          params: {
            vs_currency: "mxn",
            ids: id,
          },
        }),
        setIsLoading(false),
      ]);
      console.log(data.prices);
      setData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
    };
    fetchData();
  }, []);
  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="coinlist">
        <HistoryChart />
        <CoinData />
      </div>
    );
  };
  return renderData();
};

export default CoinDetailPage;
