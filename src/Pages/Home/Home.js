import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import homeBackground from "../../Assets/background-home.jpg";

import "./Home.css";

const Home = ({ housing }) => {
  return (
    <div className="home">
      <Banner
        backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${homeBackground})`}
      >
        <p>
          <span>Chez vous, </span>partout et ailleurs
        </p>
      </Banner>

      <div className="home__content">
        {housing.map((h, index) => {
          return (
            <Link
              to={`/logement/${h.id}`}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.5)), url(${h.cover})`,
              }}
              className="home__card"
              key={index}
            >
              <p>{h.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
