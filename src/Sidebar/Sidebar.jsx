import React, { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <section className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="logo-container">
          <button onClick={toggleSidebar} className="toggle-btn">
            {isCollapsed ? "▶️" : "◀️"}
          </button>
          <h1>🛒</h1>
        </div>
        {!isCollapsed && (
          <>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
          </>
        )}
      </section>
    </>
  );
};

export default Sidebar;
