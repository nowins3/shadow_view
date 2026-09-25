import React from "react";
import "../../assets/css/Chart.css";

// Left side icons
import { GrAddCircle } from "react-icons/gr";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import { TbClockPlus } from "react-icons/tb";
import { IoMdRewind } from "react-icons/io";
import { LiaUndoSolid } from "react-icons/lia";
import { LiaRedoSolid } from "react-icons/lia";
import { VscGroupByRefType } from "react-icons/vsc";

// Right side icons
import { CiCamera } from "react-icons/ci";
import { RiLayoutFill } from "react-icons/ri";
import { FaSearchengin } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { VscScreenFull } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const ChartHeader = () => {
  return (
    <div className="chart-header">
      <div className="chart-utilities">
        <FaRegCircleUser className="chart-user" size={25} />
        <div className="chart-index">
          <div className="chart-symbol">BTCUSD</div>
          <div className="chart-datatype">
            <VscGroupByRefType size={13} />
          </div>
        </div>
        <GrAddCircle className="chart-add-symbol" size={20} />
        <div className="chart-time-range">1m</div>
        <MdOutlineCandlestickChart className="chart-style" size={20} />
        <div className="chart-indicators-container">
          <MdOutlineStackedLineChart className="chart-indicator" size={20} />
          <span className="chart-indicator-label">Indicators</span>
        </div>
        <LuLayoutTemplate className="chart-templates" size={20} />
        <div className="chart-alerts-container">
          <TbClockPlus className="chart-alerts" size={20} />
          <span className="chart-alerts-label">Alert</span>
        </div>
        <div className="chart-replay-container">
          <IoMdRewind className="chart-replay" size={20} />
          <span className="chart-replay-label">Replay</span>
        </div>
        <LiaUndoSolid className="chart-icon" size={20} />
        <LiaRedoSolid className="chart-icon" size={20} />
      </div>
      <div className="chart-navigation">
        <RiLayoutFill size={23} />
        <div>Unnamed</div>
        <IoMdArrowDropdown className="chart-dropdown" size={23} />
        <CiCamera size={23} />
        <FaSearchengin size={23} />
        <SlSettings size={23} />
        <VscScreenFull size={23} />
        <button className="chart-trade-btn">Trade</button>
        <button className="chart-publish-btn">Publish</button>
      </div>
    </div>
  );
};

export default ChartHeader;
