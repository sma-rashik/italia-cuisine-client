import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Recipes = ({ chefs }) => {
  console.log(chefs.recipes);
  return (
    <div>
      <h1 className="text-center text-5xl p-14">Most Loved Recipes</h1>
      <div className="grid md:grid-cols-3 gap-5 p-5">
        {chefs.recipes.map((chef) => (
          <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="p-8 rounded-t-lg"
              src={chef.picture}
              alt="product image"
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {chef.name}
              </h5>

              <div className="flex items-center justify-between">
                <span className=" font-bold text-gray-900 dark:text-white">
                  <Rating
                    placeholderRating={chef.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                  {chef.rating}
                </span>
                <button className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
