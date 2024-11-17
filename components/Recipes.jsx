import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RecipesShimmer from './RecipesShimmer';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cuisines, setCuisines] = useState("All")
    const [searchFood, setSearchFood] = useState("")
  const apiKey2 = import.meta.env.VITE_API_KEY2;
  const apiKey3 = import.meta.env.VITE_API_KEY3;
  const apiKey4 = import.meta.env.VITE_API_KEY4;
 
  useEffect(() => {
    const FetchRecipes = async () =>{
      try{
          const response = await axios.get(` https://api.spoonacular.com/recipes/random?number=100&veryPopular=true&apiKey=${apiKey2}`)
          setRecipes(response.data.recipes)
      }
      catch(error){
          console.log("error:",error)
      }
    }
    FetchRecipes()
  }, [apiKey2])

    useEffect(() => {
      const FetchRecipes = async () =>{
        try{
            const response = await axios.get(` https://api.spoonacular.com/recipes/random?number=100&veryPopular=true&apiKey=${apiKey3}`)
            setRecipes(prevData => [...prevData, ...response.data.recipes])
        }
        catch(error){
            console.log("error:",error)
        }
      }
      FetchRecipes()
    }, [apiKey3])

    useEffect(() => {
      const FetchRecipes = async () =>{
        try{
            const response = await axios.get(` https://api.spoonacular.com/recipes/random?number=100&veryPopular=true&apiKey=${apiKey4}`)
            setRecipes(prevData => [...prevData, ...response.data.recipes])
        }
        catch(error){
            console.log("error:",error)
        }
      }
      FetchRecipes()
    }, [apiKey4])



    
    const filteredRecipes = recipes.filter((recipe) => {
      const matchesCuisine = cuisines === "All" || recipe.cuisines.includes(cuisines);
      const matchesSearch = recipe.title.toLowerCase().includes(searchFood.toLowerCase());
      return matchesCuisine && matchesSearch;
    });



  return (
    recipes.length==0 ? <RecipesShimmer/> :
    <div className='pt-16 sm:pt-24 text-red-600 bg-orange-50 min-h-screen' >
      <h1 className='font-lexend text-xl sm:text-3xl uppercase flex justify-center font-bold ' style={{ fontFamily: '"Cookie", sans-serif' }}> Explore Recipes...</h1>
      <div className='py-4 sm:py-8 px-2 sm:px-20 flex flex-row justify-evenly items-center w-screen'>
      {/* Search&SortBar */}
      <div className='w-1/2 '>
      <input onChange={(e) => setSearchFood(e.target.value)} className=' border-[0.5px] border-gray-700 w-4/6 p-2 outline-none text-xs sm:text-lg' placeholder='Search Recipes'></input> 
      <button className='bg-red-600 text-gray-100 p-1.5 sm:p-2 text-sm sm:text-lg  border-[0.5px] border-red-600'>Search</button>
      </div>
      <div className='w-1/3 sm:w-1/2  justify-end flex'>
      <select onChange={(e) => setCuisines(e.target.value)} name="cuisines" id="cuisines" className='outline-none w-3/4  sm:w-fit border-[1px] border-red-600 text-sm sm:text-lg p-1 sm:p-[9px] '>
      <option value="select" disabled>Select Cuisines</option>
        <option value="All">All</option>
        <option value="Indian">Indian</option>
        <option value="Japanese">Japanese</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
        <option value="American">American</option>
        <option value="European">European</option>
        <option value="Korean">Korean</option>
      </select>
      </div>
      </div>


    <div className='grid  grid-cols-2 sm:grid-cols-3 w-screen px-4 sm:px-16 py-4 sm:py-8 '>
    {filteredRecipes.map((recipe,i) => (
      recipe.image?
        <div key={i} className='mx-2 sm:mx-8 my-2 sm:my-8 aspect-[3/2] flex flex-col justify-start items-start gap-1 sm:gap-3'>
            <img className='aspect-[3/2] ' src={recipe.image} alt={recipe.title} />
            <h2 className='font-lexend text-md sm:text-2xl flex justify-center item-center '>{recipe.title}</h2>
            <p className='text-red-700'>Total time: {recipe.readyInMinutes} mins</p>
            <span className='flex flex-row flex-wrap'>
            {recipe.diets.map((diet, i) => {
              return  (<p key={i} className='text-gray-100 bg-red-500 p-2 w-fit mx-1 sm:mx-4 my-1 sm:my-2  rounded-3xl text-xs sm:text-sm'>{diet}</p>)
            })}
            </span>

            <Link to={`/recipe/${recipe.id}`}>
            <button className='text-red-700 text-xs sm:text-lg group'>Check out this recipe
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-400"></span>
            </button>
            </Link>
        </div> : null
      ))}
    </div>
    </div>
  )
}

export default Recipes
