import React from "react";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="tv-nav-center">
      <div className="tv-search-container">
        <FaSearch size="1.25rem" />
        <span className="tv-search-text">Search (Ctrl + K)</span>
      </div>
      <ul className="tv-nav-links">
        <li>Products</li>
        <li>Community</li>
        <li>Markets</li>
        <li>Brokers</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default Navigation;
