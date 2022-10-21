import React from "react";
import downArrow from "../../Assets/down_arrow_icon.svg";

import "./Banner.css";

const Banner = ({ children, backgroundImage }) => {
  return (
    <div style={{ backgroundImage }} className="banner">
      {children}
    </div>
  );
};

export default Banner;
