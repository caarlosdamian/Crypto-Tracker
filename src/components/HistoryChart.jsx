import React, { useEffect } from "react";
import { useRef } from "react";
import Chart from "chart.js/auto";
import { historyOptions } from "../chartConfig/chartConfig";

const HistoryChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: [
                { x: 1, y: 15 },
                { x: 5, y: 12 },
                { x: 3, y: 25 },
                { x: 5, y: 12 },
              ],
              backgroundColor: "rgb(174,305,194,0.5)",
              borderColor: "rgba(174,305,194,0.4)",
              pointRadius: 0,
            },
          ],
        },
        options: historyOptions,
      });
    }
  }, []);
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <di></di>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
