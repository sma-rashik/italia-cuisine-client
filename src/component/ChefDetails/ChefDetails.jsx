import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const ChefDetails = () => {
  const { id } = useParams();

  const chefs = useLoaderData();
  console.log(chefs);
  const { name, picture, bio, experience_years, num_recipes, likes } = chefs;
  return (
    <div>
      <div className="page-banner w-full">
        <h1 className="text-5xl text-center pt-64 underline-offset-2 underline text-zinc-950">
          <span className="text-white"> Get to Know:</span> {name} ,Our Expert
          Chef
        </h1>
      </div>

      <div className="hero p-5 min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <img src={picture} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-4 max-w-sm">{bio}</p>
            <b>
              <p>Number Of Recipes: {num_recipes} </p>
            </b>{" "}
            <b>
              <p>Experience: {experience_years} Years </p>
            </b>
            <b>
              <p>Loved By: {likes} likes </p>
            </b>
          </div>
        </div>
      </div>

      <Recipes chefs={chefs}></Recipes>
    </div>
  );
};

export default ChefDetails;
