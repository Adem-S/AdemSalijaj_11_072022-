import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <p className="error-page__number">404</p>
      <p className="error-page__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
