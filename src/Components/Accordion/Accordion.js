import React from "react";
import downArrow from "../../Assets/down_arrow_icon.svg";

import "./Accordion.css";

const Accordion = ({ children, title }) => {
  const handleClickAccordion = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      e.target.parentElement.classList.toggle("accordion--open");
    } else {
      e.target.parentElement.parentElement.classList.toggle("accordion--open");
    }
  };
  return (
    <div className="accordion">
      <button
        className="accordion__button"
        onClick={(e) => handleClickAccordion(e)}
      >
        <span>{title}</span>
        <img src={downArrow} alt="" />
      </button>
      <div className="accordion__text">{children}</div>
    </div>
  );
};

export default Accordion;
