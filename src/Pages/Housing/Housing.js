import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import starIcon from "../../Assets/star_icon.svg";
import Accordion from "../../Components/Accordion/Accordion";
import Carousel from "../../Components/Carousel/Carousel";

import "./Housing.css";

const Housing = ({ housing }) => {
  const [data, setData] = useState(null);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let element = housing.find((h) => h.id === id);
    if (housing.length > 0) {
      if (element) {
        setData(element);
      } else {
        navigate("/404");
      }
    }
  }, [housing]);

  return (
    <div className="housing">
      {data && (
        <>
          <Carousel pictures={data.pictures} />
          <div className="housing__presentation">
            <div className="housing__presentation1">
              <h1>{data.title}</h1>
              <h2>{data.location}</h2>
              <ul className="housing__tag">
                {data.tags.map((tag, index) => {
                  return (
                    <li className="tag" key={index}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="housing__presentation2">
              <div className="housing__host">
                <p>{data.host.name}</p>
                <img src={data.host.picture} alt="host" />
              </div>
              <div className={`rating rating--${data.rating}`}>
                <img src={starIcon} alt="starIcon" />
                <img src={starIcon} alt="starIcon" />
                <img src={starIcon} alt="starIcon" />
                <img src={starIcon} alt="starIcon" />
                <img src={starIcon} alt="starIcon" />
              </div>
            </div>
          </div>
          <div className="housing__content">
            <Accordion title="Description">
              <p>{data.description}</p>
            </Accordion>
            <Accordion title="Équipements">
              <ul className="housing__equipments">
                {data.equipments.map((equipment, index) => {
                  return <li key={index}>{equipment}</li>;
                })}
              </ul>
            </Accordion>
          </div>
        </>
      )}
    </div>
  );
};

export default Housing;
