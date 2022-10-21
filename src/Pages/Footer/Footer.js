import React from "react";
import logo from "../../Assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
