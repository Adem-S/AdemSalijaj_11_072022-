import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import "./Header.css";

const Header = () => {
  let activeClassName = "header__nav--active";
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
      </div>
      <div className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
