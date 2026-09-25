import React, { useRef, useEffect } from "react";
import { ColorType, createChart, CandlestickSeries } from "lightweight-charts";

const ChartGrid = ({ data }) => {
  const colors = {
    backgroundColor: "white",
    lineColor: "#2962FF",
    textColor: "black",
    areaTopColor: "#2962FF",
    areaBottomColor: "rgba(41, 98, 255, 0.28)",
  };

  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          type: ColorType.Solid,
          color: colors.backgroundColor,
        },
        textColor: colors.textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 820,
    });

    const candleStickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candleStickSeries.setData(data);
    chart.timeScale().fitContent();

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    colors.areaBottomColor,
    colors.areaTopColor,
    colors.backgroundColor,
    colors.lineColor,
    colors.textColor,
  ]);

  return (
    <div
      className="chart-container"
      ref={chartContainerRef}
      style={{ width: "100%" }}
    />
  );
};

export default ChartGrid;
