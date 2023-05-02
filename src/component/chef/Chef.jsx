import React from "react";
import { FaCheck, FaThumbsUp } from "react-icons/fa";

const Chef = ({ chef }) => {
  const { name, picture, id, experience_years, num_recipes, likes } = chef;
  return (
    <div>
      <div className="mt-10 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 w-64 " src={picture} alt="Chef" />
        </figure>
        <div className="card-body ">
          <h2 className="text-center text-3xl text-indigo-900">{name}</h2>
          <div className="ml-15">
            <p className="flex text-lg gap-2">
              <FaCheck className="mt-1" /> Experience: {experience_years} Years
            </p>
            <p className="flex text-lg gap-2">
              <FaCheck className="mt-1" /> Number of Recipes: {num_recipes}
            </p>
            <p className="flex text-lg gap-2">
              <FaThumbsUp className="mt-1" /> Total Likes: {likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
