import React from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Left */}
      <div className="sidebar-left">
        <div className="serverIcon">
          <img src=".\logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src=".\logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src=".\logo192.png" alt="" />
        </div>
      </div>
      {/* Sidbar Right */}
      <div className="sidebar-right">
        <div className="sidebar-top">
          <h3>DISCORD</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
