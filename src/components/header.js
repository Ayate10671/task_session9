import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>
          <Link to="/">4opping</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="prodects">
              Prodects
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="prodect">
              Prodect
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="addProdect">
              Add Prodect
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
