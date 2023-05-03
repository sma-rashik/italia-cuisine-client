import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = ({ chefs }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (recipe) => {
    setFavorites([...favorites, recipe]);
    toast.success(`Added ${recipe.name} to favorites!`);
  };

  const handleAddToFavorites = (recipe) => {
    const updatedRecipes = chefs.recipes.map((r) => {
      if (r.name == recipe.name) {
        r.isFavorite = true;
      }
      return r;
    });

    setChefs({ ...chefs, recipes: updatedRecipes });
    setFavorites([...favorites, recipe]);
    toast.success(`"${recipe.name}" is now your favorite!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h1 className="text-center text-5xl p-14">Most Loved Recipes</h1>
      <div className="grid md:grid-cols-3 gap-5 p-5">
        {chefs.recipes.map((recipe) => (
          <div
            key={recipe.name}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="p-8 rounded-t-lg"
              src={recipe.picture}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {recipe.name}
              </h5>
              <div className="flex items-center justify-between">
                <span className=" font-bold text-gray-900 dark:text-white">
                  <Rating
                    placeholderRating={recipe.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                  {recipe.rating}
                </span>
                <button
                  className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={recipe.isFavorite}
                  onClick={() => handleAddToFavorites(recipe)}
                >
                  {recipe.isFavorite
                    ? "Added to Favorites"
                    : "Add to Favorites"}
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
