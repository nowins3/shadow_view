import React from "react";
import { FaUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const UserLinks = () => {
  return (
    <div className="tv-nav-right">
      <button className="tv-icon-button">
        <TbWorld size="2em" />
        <span className="tv-lang-text">EN</span>
      </button>

      <button className="tv-icon-button-user">
        <FaUser size="1.5em" className="tv-icon-user" />
      </button>

      <button className="tv-btn-get-started">Get started</button>
    </div>
  );
};

export default UserLinks;
