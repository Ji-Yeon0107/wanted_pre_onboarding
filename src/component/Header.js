import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul className="menu-list">
        <li className="menu-item ">
          <Link to="/" className="menu__home">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/modal">Modal</Link>
        </li>
        <li className="menu-item">
          <Link to="/tab">Tab</Link>
        </li>
        <li className="menu-item">
          <Link to="/tag">Tag</Link>
        </li>
        <li className="menu-item">
          <Link to="/toggle">Toggle</Link>
        </li>
        <li className="menu-item">
          <Link to="/clickToEdit">ClickToEdit</Link>
        </li>
      </ul>
    </header>
  );
};
