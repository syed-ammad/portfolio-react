import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Routes as RouteX,
} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <RouteX>
          {/* <Route exact path="/" element={<Preview />} /> */}
          <Route exact path="/" element={<HomeDark />} />

          <Route path="/home-light" element={<HomeLight />} />
          <Route path="/home-dark" element={<HomeDark />} />
          <Route element={NotFound} />
        </RouteX>
      </Router>
    </>
  );
};

export default Routes;
