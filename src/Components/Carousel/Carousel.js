import React, { useState, useRef } from "react";
import leftArrow from "../../Assets/left_arrow_icon.svg";
import rightArrow from "../../Assets/right_arrow_icon.svg";

import "./Carousel.css";

const Carousel = ({ pictures }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carousel = useRef(null);

  const changeCarouselItem = (index) => {
    const carouselLength = pictures.length;
    let newCarouselIndex;
    if (carouselIndex === 0 && index === -1) {
      newCarouselIndex = carouselLength - 1;
    } else if (carouselIndex + 1 === carouselLength && index === 1) {
      newCarouselIndex = 0;
    } else {
      newCarouselIndex = carouselIndex + index;
    }
    setCarouselIndex(newCarouselIndex);
    carousel.current.style.transform = `translateX(calc(${newCarouselIndex} * (-100% / ${carouselLength})))`;
  };

  return (
    <div className="carousel">
      <p className="carousel__index">{`${carouselIndex + 1}/${
        pictures.length
      }`}</p>
      {pictures.length > 1 && (
        <img
          src={leftArrow}
          className="carousel__btn carousel__btn--prev"
          onClick={() => changeCarouselItem(-1)}
          alt="left arrow"
        />
      )}
      <div
        className="carousel__container"
        style={{ width: `${pictures.length * 100}%` }}
        ref={carousel}
      >
        {pictures.map((p, index) => {
          return (
            <div className="carousel__item" key={index}>
              <img src={p} alt="housing" />
            </div>
          );
        })}
      </div>
      {pictures.length > 1 && (
        <img
          src={rightArrow}
          className="carousel__btn carousel__btn--next"
          onClick={() => changeCarouselItem(1)}
          alt="right arrow"
        />
      )}
    </div>
  );
};

export default Carousel;
