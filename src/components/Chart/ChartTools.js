import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TbLine } from "react-icons/tb";

const ChartTools = () => {
  return (
    <div className="tools-container">
      <FaLocationCrosshairs size={30} />
      <TbLine size={30} />
    </div>
  );
};

export default ChartTools;
