import React from "react";
import "../Style.css";
import Chefs from "./chef/Chefs";
const Home = () => {
  return (
    <>
      <div className="page-banner w-full"></div>
      <Chefs />
    </>
  );
};

export default Home;
