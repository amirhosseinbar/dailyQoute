import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <div>
      <div className="menu-wrapper">
        <div className="menu-items-wrapper">
            <Link to="/hadis">حدیث</Link>
        </div>
        <div className="menu-items-wrapper">
            <Link to="/time">زمان</Link>

        </div>
        <div className="menu-items-wrapper">
            <Link to="aya">قرآن</Link>

        </div>
      </div>
    </div>
  );
}
