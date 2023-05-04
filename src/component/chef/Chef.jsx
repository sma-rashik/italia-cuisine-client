import React, { useContext } from "react";
import { FaCheck, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LazyLoad from "react-lazyload";

const Chef = ({ chef }) => {
  const { name, picture, id, experience_years, num_recipes, likes } = chef;
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div>
      <div className=" mb-10 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <LazyLoad height={200} once>
            <img className="h-64 w-64 " src={picture} alt="Chef" />
          </LazyLoad>
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
            <p className="flex ml-20 mt-4 text-center text-lg gap-2">
              <FaThumbsUp className="mt-1 text-red-600" /> Total Likes: {likes}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`} className="btn btn-link">
              See All Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
