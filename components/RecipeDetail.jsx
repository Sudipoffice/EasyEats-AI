import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetailShimmer from "./RecipeDetailShimmer";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const apiKey5 = process.env.REACT_APP_API_KEY5;

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey5}`
        );
        setRecipe(response.data);
      } catch (error) {
        ("Unable to fetch response");
      }
    };
    fetchRecipeDetail();
  }, []);

  if (!recipe) return <RecipeDetailShimmer/>;

  return (
    <div className=" pt-16 sm:pt-24 min-h-screen bg-orange-50" >
      <button
        onClick={() => history.back()}
        className="p-1 sm:p-2 mx-4 sm:mx-8 text-white text-xs sm:text-sm bg-red-400 mt-2 sm:mt-8 hover:bg-red-300 absolute"
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      {/* Main Content */}
      <div className=" flex flex-col sm:flex-row justify-center  p-8 w-screen">
      {/* first column */}
        <div className="flex flex-col justify-start items-center py-8 sm:py-0 w-full sm:w-3/5">
          <img
            className="aspect-3/2 w-full sm:w-2/3 object-cover "
            src={recipe.image}
            alt=""
          />
          <h1 className="pt-4 text-2xl sm:text-4xl font-extrabold font-lexend">
            {recipe.title}
          </h1>
          <div className=" text-gray-800 rounded-xl m-4 p-4 flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-2xl ">Ingredients: </h1>
            <ol>
              {recipe.extendedIngredients.map((ingredient, i) => {
                return (
                  <li key={i} className="m-2">
                    {" "}
                    &bull; {ingredient.original}{" "}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        {/* second column */}
        <div className="h-fit flex flex-col justify-center items-center w-full sm:w-2/5">
        <div className=" text-gray-800 px-12 flex flex-col items-center">
            <p> Preparation Time: {recipe.readyInMinutes} mins</p>
            <p> Serving: {recipe.servings}</p>
          </div>
          {/* diet type */}
          <div className="my-8 w-fit gap-2 grid grid-cols-2 text-gray-800">
            {recipe.diets.map((diet, i) => {
              return (
                <span key={i} className="bg-red-400 p-2 rounded-3xl text-white flex justify-center">
                  {diet}
                </span>
              );
            })}
          </div>
          <div className=" text-gray-800 rounded-xl px-8">
            <div className="my-4 text-gray-800">
              <h1 className="text-2xl m-4">Instructions: </h1>
              {recipe.analyzedInstructions.map((instruction, i) => {
                return (
                  <ol className="leading-8" key={i}>
                    {instruction.steps.map((step, idx) => {
                      return (
                        <li key={idx} className="m-4">
                          {step.number}. {step.step}{" "}
                        </li>
                      );
                    })}
                  </ol>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
