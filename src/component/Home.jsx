import React from "react";
import "../Style.css";
import Chefs from "./chef/Chefs";
import Galllery from "./BonusComponent/Galllery";
import Video from "./BonusComponent/Video";

const Home = () => {
  return (
    <>
      <div className="page-banner w-full">
        <h1 className="text-5xl text-center pt-72  text-black hover:text-purple-700 underline">
          Indulge in the <br /> Authentic Flavors of Italy
        </h1>
      </div>
      <Galllery />
      <Chefs />
      <Video />
    </>
  );
};

export default Home;
