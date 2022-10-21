import React, { useEffect, useState } from "react";

import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  matchPath,
  Navigate,
} from "react-router-dom";

import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Footer/Footer";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Housing from "../Pages/Housing/Housing";
import { getData } from "../Service/service";

function App() {
  const location = useLocation();

  const [showFooter, setshowFooter] = useState(true);
  const [housing, setHousing] = useState([]);

  useEffect(() => {
    const data = getData();
    setHousing(data);
  }, []);

  useEffect(() => {
    const isErrorPagePath = matchPath("/404", location.pathname);
    setshowFooter(isErrorPagePath == null);
  }, [location]);

  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home housing={housing} />} />
          <Route path="logement">
            <Route path=":id" element={<Housing housing={housing} />} />
          </Route>
          <Route exact path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" exact={true} element={<ErrorPage />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
